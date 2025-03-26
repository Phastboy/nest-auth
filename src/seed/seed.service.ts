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
    const categories = [
      { id: 'academics', name: 'Academics', slug: 'academics' },
      { id: 'cs', name: 'Computer Science', slug: 'cs', parentId: 'academics' },
      { id: 'social', name: 'Social', slug: 'social' },
      { id: 'sports', name: 'Sports', slug: 'sports', parentId: 'social' },
    ];

    await this.prisma.category.createMany({ data: categories });
    this.logger.log(`Seeded ${categories.length} categories`);
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

  private async seedPosts(userIds: number[], categoryIds: { id: string }[]) {
    // Create posts one by one to handle relations
    for (const userId of userIds) {
      await this.prisma.post.create({
        data: {
          content: faker.lorem.paragraph(),
          userId: userId,
          isEvent: false,
          categories: {
            connect: faker.helpers.arrayElements(categoryIds, {
              min: 1,
              max: 3,
            }),
          },
        },
      });
    }

    const postCount = await this.prisma.post.count();
    this.logger.log(`Seeded ${postCount} posts`);
  }

  private async seedEvents(userIds: number[], categoryIds: { id: string }[]) {
    // Get some regular posts to convert to events
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 10,
    });

    // Create events one by one to handle relations
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
              max: 2,
            }),
          },
        },
      });

      // Update the post to mark it as an event
      await this.prisma.post.update({
        where: { id: post.id },
        data: { isEvent: true },
      });
    }

    const eventCount = await this.prisma.event.count();
    this.logger.log(`Seeded ${eventCount} events`);
  }

  private async seedComments() {
    // Get existing posts and users to ensure valid foreign keys
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 10,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    // Create comments one by one to better handle errors
    for (const post of posts) {
      for (let i = 0; i < 2; i++) {
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
    // Get existing posts and users
    const posts = await this.prisma.post.findMany({
      where: { isEvent: false },
      take: 10,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    // Create likes one by one
    for (const post of posts) {
      const selectedUsers = faker.helpers.arrayElements(users, 2);
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
    // Get existing events and users
    const events = await this.prisma.event.findMany({
      take: 10,
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    // Create RSVPs one by one
    for (const event of events) {
      const selectedUsers = faker.helpers.arrayElements(users, 2);
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

    // Create notifications one by one
    for (const user of users) {
      for (let i = 0; i < 2; i++) {
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
