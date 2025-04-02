import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { Role } from '@prisma/client';
import { AppLogger } from 'src/app.logger';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = AppLogger.getInstance(SeedService.name);

  async onModuleInit() {
    if (process.env.NODE_ENV === 'production') {
      this.logger.log('Skipping seeding in production');
      return;
    }
    await this.seedDatabase();
  }

  async seedDatabase() {
    await this.seedRoles();
    await this.seedUsers();
    await this.seedCategories();
    this.logger.log('🌱 Database seeded successfully!');
  }

  private async seedRoles() {
    await this.prisma.role.deleteMany();
    const roles = [
      {
        name: 'user',
        description: 'Basic user role',
      },
      {
        name: 'admin',
        description: 'Administrator with moderation privileges',
      },
      {
        name: 'superadmin',
        description: 'System super administrator',
      },
    ];
    for (const role of roles) {
      await this.prisma.role.create({
        data: {
          ...role
        },
      });
    }
    this.logger.log('Roles seeded.');
  }

  private async seedUsers() {
    await this.prisma.user.deleteMany();
    for (let i = 0; i < 10; i++) {
      const user = await this.prisma.user.create({
        data: {
          email: faker.internet.email(),
          username: faker.internet.username(),
          password: await argon.hash('password123'),
          avatar: faker.image.avatar(),
          bio: faker.lorem.sentence(),
          roles: {
            create: {
              role: {
                connect: { name: 'user' },
              },
            },
          },
        },
      });
      this.logger.log(`User ${user.username} seeded.`);
    }
  }

  private async seedCategories() {
    const categories = ['Technology', 'Health', 'Education', 'Entertainment'];
    for (const categoryName of categories) {
      await this.prisma.category.create({
        data: {
          name: categoryName,
          slug: faker.helpers.slugify(categoryName.toLowerCase()),
        },
      });
    }
    this.logger.log('Categories seeded.');
  }
}
