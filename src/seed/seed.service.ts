import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { Role } from '@prisma/client';

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
      { name: 'Technology', slug: 'tech' },
      { name: 'Science', slug: 'science' },
      { name: 'Arts', slug: 'arts' },
      { name: 'Sports', slug: 'sports' },
      { name: 'Education', slug: 'education' },
      { name: 'Business', slug: 'business' },
      { name: 'Health', slug: 'health' },
      { name: 'Entertainment', slug: 'entertainment' },
    ];

    await this.prisma.category.createMany({ data: categories });
    this.logger.log(`Seeded ${categories.length} categories`);
  }

  async seedUsers() {
    const roles = [
      Role.STUDENT,
      Role.LECTURER,
      Role.IT_STAFF,
      Role.LIBRARIAN,
      Role.DEPARTMENT_HEAD,
      Role.FACULTY_DEAN,
      Role.FINANCE_STAFF,
    ];
    const users = Array.from({ length: 100 }, async () => ({
      email: faker.internet.email(),
      username: faker.internet.username(),
      password: await argon.hash('$trongPa55word'),
      avatar: faker.image.avatar(),
      role: faker.helpers.arrayElement(roles),
      bio: faker.lorem.sentence(),
    }));
    const resolvedUsers = await Promise.all(users);

    await this.prisma.user.createMany({ data: resolvedUsers });

    const dbUsers = await this.prisma.user.findMany({ select: { id: true } });
    this.logger.log(`Seeded ${dbUsers.length} users`);
    return dbUsers.map((u) => u.id);
  }

  private async seedPosts(userIds: number[], categoryIds: { id: number }[]) {
    const posts = Array.from({ length: 300 }, () => {
      const userId = faker.helpers.arrayElement(userIds);
      return {
        content: faker.lorem.paragraphs(faker.number.int({ min: 1, max: 3 })),
        userId,
        image: faker.datatype.boolean() ? faker.image.url() : null,
        createdAt: faker.date.recent({ days: 30 }),
      };
    });

    for (const post of posts) {
      await this.prisma.post.create({
        data: {
          ...post,
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

  private async seedEvents(userIds: number[], categoryIds: { id: number }[]) {
    // Seed public events with posts (shareAsPost: true)
    for (let i = 0; i < 75; i++) {
      const userId = faker.helpers.arrayElement(userIds);
      const startTime = faker.date.soon({ days: 30 });
      const endTime = faker.date.soon({
        days: 30,
        refDate: startTime,
      });

      await this.prisma.$transaction(async (tx) => {
        const event = await tx.event.create({
          data: {
            title: faker.lorem.words(faker.number.int({ min: 2, max: 5 })),
            description: faker.lorem.paragraphs(
              faker.number.int({ min: 1, max: 3 }),
            ),
            location: `${faker.location.city()}, ${faker.location.country()}`,
            startTime,
            endTime,
            image: faker.datatype.boolean() ? faker.image.url() : null,
            userId,
            shareAsPost: true,
            categories: {
              connect: faker.helpers.arrayElements(categoryIds, {
                min: 1,
                max: 3,
              }),
            },
          },
        });

        await tx.post.create({
          data: {
            content: `Join us for ${event.title} at ${event.location}!`,
            userId,
            isEvent: true,
            eventId: event.id,
            image: event.image,
            createdAt: faker.date.recent({ days: 7 }),
            categories: {
              connect: faker.helpers.arrayElements(categoryIds, {
                min: 1,
                max: 3,
              }),
            },
          },
        });
      });
    }

    // Seed private events (shareAsPost: false)
    const privateEvents = Array.from({ length: 25 }, () => {
      const userId = faker.helpers.arrayElement(userIds);
      const startTime = faker.date.soon({ days: 30 });
      return {
        title: faker.lorem.words(faker.number.int({ min: 2, max: 5 })),
        description: faker.lorem.paragraphs(
          faker.number.int({ min: 1, max: 3 }),
        ),
        location: `${faker.location.city()}, ${faker.location.country()}`,
        startTime,
        endTime: faker.date.soon({
          days: 30,
          refDate: startTime,
        }),
        userId,
        shareAsPost: false,
        image: faker.datatype.boolean() ? faker.image.url() : null,
      };
    });

    for (const event of privateEvents) {
      await this.prisma.event.create({
        data: {
          ...event,
          categories: {
            connect: faker.helpers.arrayElements(categoryIds, {
              min: 1,
              max: 3,
            }),
          },
        },
      });
    }

    const eventCount = await this.prisma.event.count();
    this.logger.log(`Seeded ${eventCount} events`);
  }

  private async seedComments() {
    const posts = await this.prisma.post.findMany({
      select: { id: true },
    });
    const events = await this.prisma.event.findMany({
      select: { id: true },
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    // Seed comments for posts
    for (const post of posts) {
      const commentCount = faker.number.int({ min: 0, max: 15 });
      for (let i = 0; i < commentCount; i++) {
        const comment = await this.prisma.comment.create({
          data: {
            content: faker.lorem.sentences(
              faker.number.int({ min: 1, max: 3 }),
            ),
            userId: faker.helpers.arrayElement(users).id,
            postId: post.id,
            createdAt: faker.date.recent({ days: 7 }),
          },
        });

        // Create random replies to the comment
        const replyCount = faker.number.int({ min: 0, max: 5 });
        for (let j = 0; j < replyCount; j++) {
          await this.prisma.comment.create({
            data: {
              content: faker.lorem.sentences(
                faker.number.int({ min: 1, max: 3 }),
              ),
              userId: faker.helpers.arrayElement(users).id,
              postId: post.id,
              parentId: comment.id, // Link to the parent comment
              createdAt: faker.date.recent({ days: 7 }),
            },
          });
        }
      }
    }

    // Seed comments for events
    for (const event of events) {
      const commentCount = faker.number.int({ min: 0, max: 15 });
      for (let i = 0; i < commentCount; i++) {
        const comment = await this.prisma.comment.create({
          data: {
            content: faker.lorem.sentences(
              faker.number.int({ min: 1, max: 3 }),
            ),
            userId: faker.helpers.arrayElement(users).id,
            eventId: event.id,
            createdAt: faker.date.recent({ days: 7 }),
          },
        });

        // Create random replies to the comment
        const replyCount = faker.number.int({ min: 0, max: 5 });
        for (let j = 0; j < replyCount; j++) {
          await this.prisma.comment.create({
            data: {
              content: faker.lorem.sentences(
                faker.number.int({ min: 1, max: 3 }),
              ),
              userId: faker.helpers.arrayElement(users).id,
              eventId: event.id,
              parentId: comment.id, // Link to the parent comment
              createdAt: faker.date.recent({ days: 7 }),
            },
          });
        }
      }
    }

    const commentCount = await this.prisma.comment.count();
    this.logger.log(`Seeded ${commentCount} comments`);
  }

  private async seedLikes() {
    const posts = await this.prisma.post.findMany({
      select: { id: true },
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const post of posts) {
      const likeCount = faker.number.int({ min: 0, max: 30 });
      const selectedUsers = faker.helpers.arrayElements(users, likeCount);

      await this.prisma.like.createMany({
        data: selectedUsers.map((user) => ({
          userId: user.id,
          postId: post.id,
          createdAt: faker.date.recent({ days: 7 }),
        })),
      });
    }

    const likeCount = await this.prisma.like.count();
    this.logger.log(`Seeded ${likeCount} likes`);
  }

  private async seedRSVPs() {
    const events = await this.prisma.event.findMany({
      select: { id: true },
    });
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const event of events) {
      const rsvpCount = faker.number.int({ min: 0, max: 25 });
      const selectedUsers = faker.helpers.arrayElements(users, rsvpCount);

      await this.prisma.rSVP.createMany({
        data: selectedUsers.map((user) => ({
          userId: user.id,
          eventId: event.id,
          status: faker.helpers.arrayElement([
            'GOING',
            'INTERESTED',
            'NOT_GOING',
          ]),
          createdAt: faker.date.recent({ days: 7 }),
        })),
      });
    }

    const rsvpCount = await this.prisma.rSVP.count();
    this.logger.log(`Seeded ${rsvpCount} RSVPs`);
  }

  private async seedNotifications() {
    const users = await this.prisma.user.findMany({
      select: { id: true },
    });

    for (const user of users) {
      const notificationCount = faker.number.int({ min: 1, max: 10 });
      await this.prisma.notification.createMany({
        data: Array.from({ length: notificationCount }, () => ({
          userId: user.id,
          content: faker.lorem.sentence(),
          type: faker.helpers.arrayElement([
            'LIKE',
            'COMMENT',
            'EVENT',
            'SYSTEM',
          ]),
          isRead: faker.datatype.boolean(),
          createdAt: faker.date.recent({ days: 7 }),
        })),
      });
    }

    const notificationCount = await this.prisma.notification.count();
    this.logger.log(`Seeded ${notificationCount} notifications`);
  }
}
