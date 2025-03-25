import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(SeedService.name);

  async onModuleInit() {
    await this.seedDatabase();
  }

  async seedDatabase() {
    if (process.env.NODE_ENV === 'production') {
      this.logger.log('Skipping seeding in production environment.');
      return;
    }

    await this.prismaService.post.deleteMany();
    await this.prismaService.user.deleteMany();

    this.logger.log('All data has been deleted.');

    const users = Array.from({ length: 50 }, async () => ({
      email: faker.internet.email(),
      username: faker.internet.username(),
      password: await argon.hash('$trongPa55word'),
    }));

    const resolvedUsers = await Promise.all(users);

    const createdUsers = await this.prismaService.user.createMany({
      data: resolvedUsers,
    });

    this.logger.log(`Created ${createdUsers.count} users.`);

    const userIds = await this.prismaService.user.findMany({
      select: { id: true },
    });

    const posts = userIds.map((user) => ({
      content: faker.lorem.sentence(),
      userId: user.id,
    }));

    const createdPosts = await this.prismaService.post.createMany({
      data: posts,
    });

    this.logger.log(`Created ${createdPosts.count} posts.`);
  }
}
