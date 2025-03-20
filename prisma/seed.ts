import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';
import { log } from 'console';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  log('database has been cleared');

  const users = Array.from({ length: 50 }, async () => ({
    email: faker.internet.email(),
    username: faker.internet.username(),
    password: await argon.hash('$trongPa55word'),
  }));

  // Wait for all users to be created
  const resolvedUsers = await Promise.all(users);

  const createdUsers = await prisma.user.createMany({
    data: resolvedUsers,
  });

  console.log(`Created ${createdUsers.count} users.`);

  // Fetch only the IDs of the created users
  const userIds = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  // Generate an array of 50 posts, each assigned to a user
  const posts = userIds.map((user) => ({
    content: faker.lorem.sentence(),
    published: faker.datatype.boolean(),
    userId: user.id,
  }));

  // Create posts in bulk
  const createdPosts = await prisma.post.createMany({
    data: posts,
  });

  console.log(`Created ${createdPosts.count} posts.`);
}

async function main() {
  await seed();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
