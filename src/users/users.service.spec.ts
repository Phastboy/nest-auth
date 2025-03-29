import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'nestjs-prisma';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import * as argon from 'argon2';
import { Role } from '@prisma/client';

jest.mock('argon2');

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn().mockResolvedValue(null),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('should create a user with hashed password', async () => {
      const createUserDto = { email: 'test@example.com', password: 'password', role: Role.STUDENT, username: 'testuser' };
      const hashedPassword = 'hashedPassword';
      jest.spyOn(argon, 'hash').mockResolvedValue(hashedPassword);
      (prisma.user.create as jest.Mock).mockResolvedValue({ id: 1, ...createUserDto, password: hashedPassword });

      const result = await service.create(createUserDto);

      expect(argon.hash).toHaveBeenCalledWith(createUserDto.password);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: { ...createUserDto, password: hashedPassword },
        include: expect.anything(),
      });
      expect(result).toEqual({ id: 1, ...createUserDto, password: hashedPassword });
    });

    it('should throw ForbiddenException for privileged roles', async () => {
      const createUserDto = { username: 'tester', email: 'test@example.com', password: 'password', role: Role.SUPER_ADMIN };

      await expect(service.create(createUserDto)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [{ id: 1, email: 'test@example.com' }];
      (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

      const result = await service.findAll();

      expect(prisma.user.findMany).toHaveBeenCalledWith({ include: expect.anything() });
      expect(result).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('should return a user by ID', async () => {
      const user = { id: 1, email: 'test@example.com' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

      const result = await service.findOne(1);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 }, include: expect.anything() });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user not found', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      const user = { id: 1, email: 'test@example.com' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

      const result = await service.findByEmail('test@example.com');

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user not found', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.findByEmail('test@example.com')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto = { id: 1, email: 'updated@example.com' };
      const { id, ...rest } = updateUserDto;
      const updatedUser = { id: 1, ...rest };
      (prisma.user.update as jest.Mock).mockResolvedValue(updatedUser);

      const result = await service.update(1, updateUserDto);

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateUserDto,
        include: expect.anything(),
      });
      expect(result).toEqual(updatedUser);
    });
  });

  describe('remove', () => {
    it('should delete a user', async () => {
      const user = { id: 1, role: Role.STUDENT };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);
      (prisma.user.delete as jest.Mock).mockResolvedValue(user);

      const result = await service.remove(1);

      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: 1 }, include: expect.anything() });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user not found', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.remove(1)).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException for privileged roles', async () => {
      const user = { id: 1, role: Role.SUPER_ADMIN };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

      await expect(service.remove(1)).rejects.toThrow(ForbiddenException);
    });
  });
});
