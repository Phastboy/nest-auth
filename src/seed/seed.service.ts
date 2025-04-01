import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { Role } from '@prisma/client';
import { AppLogger } from 'src/app.logger';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = AppLogger.getInstance(SeedService.name)

  async onModuleInit() {
    if (process.env.NODE_ENV === 'production') {
      this.logger.log('Skipping seeding in production');
      return;
    }
    await this.seedDatabase();
  }

  async seedDatabase() {
    await this.clearDatabase();
    await this.seedRoles();
    await this.seedUsers();
    await this.seedCategories();
    this.logger.log('🌱 Database seeded successfully!');
  }

  private async seedRoles() {
    const roles = ['admin', 'superadmin', 'lecturer', 'student', 'dean', 'hod'];
    for (const roleName of roles) {
      await this.prisma.role.create({
        data: {
          name: roleName,
          description: `${roleName} role`,
        },
      });
    }
    this.logger.log('Roles seeded.');
  }

  private async seedUsers() {
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
                connect: { name: 'student' },
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

  private async clearDatabase() {
    this.logger.info(
      `all data deleted successfully.`
    )
  }
}
