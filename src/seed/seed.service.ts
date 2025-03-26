import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(SeedService.name);

  async onModuleInit() {
    if (process.env.NODE_ENV === 'production') {
      this.logger.log('Skipping seeding in production');
      return;
    }
    await this.seedDatabase();
  }

  async seedDatabase() {
    await this.clearDatabase();
    await this.seedCategories();
    const userIds = await this.seedUsers();
    const categoryIds = await this.prisma.category.findMany({
      select: { id: true },
    });
    await this.seedPosts(userIds, categoryIds);
    await this.seedEvents(userIds, categoryIds);
    await this.seedComments();
    await this.seedLikes();
    await this.seedRSVPs();
    await this.seedNotifications();

    this.logger.log('🌱 Database seeded successfully!');
  }

  private async clearDatabase() {
    const tables = [
      'notifications',
      'comments',
      'likes',
      'rsvps',
      'events',
      'posts',
      'categories',
      'users',
    ];

    await this.prisma.$executeRawUnsafe(`PRAGMA foreign_keys = OFF;`);

    for (const table of tables) {
      await this.prisma.$executeRawUnsafe(`DELETE FROM "${table}";`);
      this.logger.log(`Cleared table: ${table}`);
    }

    await this.prisma.$executeRawUnsafe(`PRAGMA foreign_keys = ON;`);
  }

  private async seedCategories() {
    const parentCategories = [
      { name: 'Academics', slug: 'academics' },
      { name: 'Computer Science', slug: 'cs' },
      { name: 'Social', slug: 'social' },
      { name: 'Sports', slug: 'sports' },
      { name: 'Arts & Humanities', slug: 'arts-humanities' },
      { name: 'Science & Technology', slug: 'science-tech' },
    ];

    const createdParentCategories = await Promise.all(
      parentCategories.map((category) =>
        this.prisma.category.create({
          data: category,
        }),
      ),
    );
    this.logger.log(
      `Seeded ${createdParentCategories.length} parent categories`,
    );

    const childCategories = [
      {
        name: 'Mathematics',
        slug: 'math',
        parentId: createdParentCategories[0].id,
      },
      {
        name: 'Physics',
        slug: 'physics',
        parentId: createdParentCategories[0].id,
      },
      {
        name: 'Artificial Intelligence',
        slug: 'ai',
        parentId: createdParentCategories[1].id,
      },
      {
        name: 'Cyber Security',
        slug: 'cyber-security',
        parentId: createdParentCategories[1].id,
      },
      {
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        parentId: createdParentCategories[2].id,
      },
      {
        name: 'E-sports',
        slug: 'esports',
        parentId: createdParentCategories[3].id,
      },
      {
        name: 'Philosophy',
        slug: 'philosophy',
        parentId: createdParentCategories[4].id,
      },
      {
        name: 'Engineering',
        slug: 'engineering',
        parentId: createdParentCategories[5].id,
      },
    ];

    await this.prisma.category.createMany({ data: childCategories });
    this.logger.log(`Seeded ${childCategories.length} child categories`);
  }

  async seedUsers() {
    const users = Array.from({ length: 50 }, async () => ({
      email: faker.internet.email(),
      username: faker.internet.username(),
      password: await argon.hash('$trongPa55word'),
      avatar: faker.image.avatar(),
      role: faker.helpers.arrayElement(['student', 'moderator']),
      bio: faker.lorem.sentence(),
    }));

    const resolvedUsers = await Promise.all(users);

    await this.prisma.user.createMany({ data: resolvedUsers });
    const dbUsers = await this.prisma.user.findMany({ select: { id: true } });
    this.logger.log(`Seeded ${dbUsers.length} users`);
    return dbUsers.map((u) => u.id);
  }

  private async seedPosts(userIds: number[], categoryIds: { id: number }[]) {
    // Create posts one by one to handle relations
    for (let i = 0; i < 500; i++) {
      const userId = faker.helpers.arrayElement(userIds);
      await this.prisma.post.create({
        data: {
          content: faker.lorem.paragraph(),
          userId: userId,
          isEvent: faker.datatype.boolean(),
          categories: {
            connect: faker.helpers.arrayElements(categoryIds, {
              min: 2,
              max: 5,
            }),
          },
        },
      });
    }

    const postCount = await this.prisma.post.count();
    this.logger.log(`Seeded ${postCount} posts`);
  }

  private async seedEvents(userIds: number[], categoryIds: { id: number }[]) {
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 100,
    });

    for (const post of posts) {
      await this.prisma.event.create({
        data: {
          title: faker.lorem.words(3),
          description: faker.lorem.paragraph(),
          location: `${faker.location.buildingNumber()} ${faker.location.street()}`,
          startTime: faker.date.soon({ days: 30 }),
          endTime: faker.date.soon({ days: 31 }),
          userId: faker.helpers.arrayElement(userIds),
          postId: post.id,
          categories: {
            connect: faker.helpers.arrayElements(categoryIds, {
              min: 1,
              max: 3,
            }),
          },
        },
      });

      await this.prisma.post.update({
        where: { id: post.id },
        data: { isEvent: true },
      });
    }

    const eventCount = await this.prisma.event.count();
    this.logger.log(`Seeded ${eventCount} events`);
  }

  private async seedComments() {
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 100,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const post of posts) {
      const commentCount = faker.number.int({ min: 1, max: 10 });
      for (let i = 0; i < commentCount; i++) {
        await this.prisma.comment.create({
          data: {
            content: faker.lorem.sentence(),
            userId: faker.helpers.arrayElement(users).id,
            postId: post.id,
          },
        });
      }
    }

    const commentCount = await this.prisma.comment.count();
    this.logger.log(`Seeded ${commentCount} comments`);
  }

  private async seedLikes() {
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 100,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const post of posts) {
      const likeCount = faker.number.int({ min: 1, max: 20 });
      const selectedUsers = faker.helpers.arrayElements(users, likeCount);
      for (const user of selectedUsers) {
        await this.prisma.like.create({
          data: {
            userId: user.id,
            postId: post.id,
          },
        });
      }
    }

    const likeCount = await this.prisma.like.count();
    this.logger.log(`Seeded ${likeCount} likes`);
  }

  private async seedRSVPs() {
    const events = await this.prisma.event.findMany({
      take: 100,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const event of events) {
      const rsvpCount = faker.number.int({ min: 1, max: 30 });
      const selectedUsers = faker.helpers.arrayElements(users, rsvpCount);
      for (const user of selectedUsers) {
        await this.prisma.rSVP.create({
          data: {
            userId: user.id,
            eventId: event.id,
            status: faker.helpers.arrayElement([
              'going',
              'interested',
              'not_going',
            ]),
          },
        });
      }
    }

    const rsvpCount = await this.prisma.rSVP.count();
    this.logger.log(`Seeded ${rsvpCount} RSVPs`);
  }

  private async seedNotifications() {
    const users = await this.prisma.user.findMany();

    for (const user of users) {
      const notificationCount = faker.number.int({ min: 1, max: 10 });
      for (let i = 0; i < notificationCount; i++) {
        await this.prisma.notification.create({
          data: {
            content: faker.lorem.sentence(),
            userId: user.id,
            type: 'info',
            isRead: faker.datatype.boolean(),
          },
        });
      }
    }

    const notificationCount = await this.prisma.notification.count();
    this.logger.log(`Seeded ${notificationCount} notifications`);
  }
}
