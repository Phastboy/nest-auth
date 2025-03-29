import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import * as argon from 'argon2';
import { UserWithoutPassword } from 'src/users/users.types';
import { User } from '@prisma/client';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(async () => {
    usersService = {
      findByEmail: jest.fn(),
      findOne: jest.fn(),
    };

    jwtService = {
      sign: jest.fn(),
      verify: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('validateUser', () => {
    it('should return user without password if credentials are valid', async () => {
      const mockUser: User = {
        id: 1,
        email: "alice@example.com",
        username: "alice42",
        avatar: "https://example.com/avatars/alice.jpg",
        role: "ADMIN",
        bio: "Software engineer & coffee enthusiast ☕",
        password:"password",
        createdAt: new Date("2023-05-15T10:00:00Z"),
        updatedAt: new Date("2024-02-20T15:30:00Z"),
      };
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(argon, 'verify').mockResolvedValue(true);

      const result = await authService.validateUser({ email: 'test@example.com', password: 'password' });

      expect(result).toEqual({ id: 1, email: 'test@example.com' });
    });

    it('should throw UnauthorizedException if user does not exist', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue();

      await expect(
        authService.validateUser({ email: 'nonexistent@example.com', password: 'password' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if password is invalid', async () => {
      const mockUser: User = {
        id: 1,
        email: "alice@example.com",
        username: "alice42",
        avatar: "https://example.com/avatars/alice.jpg",
        role: "ADMIN",
        bio: "Software engineer & coffee enthusiast ☕",
        password:"password",
        createdAt: new Date("2023-05-15T10:00:00Z"),
        updatedAt: new Date("2024-02-20T15:30:00Z"),
      };
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(argon, 'verify').mockResolvedValue(false);

      await expect(
        authService.validateUser({ email: 'test@example.com', password: 'wrongPassword' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('generateTokens', () => {
    it('should generate access and refresh tokens', () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        email: "alice@example.com",
        username: "alice42",
        avatar: "https://example.com/avatars/alice.jpg",
        role: "ADMIN",
        bio: "Software engineer & coffee enthusiast ☕",
        createdAt: new Date("2023-05-15T10:00:00Z"),
        updatedAt: new Date("2024-02-20T15:30:00Z"),
      };
      jest.spyOn(jwtService, 'sign').mockImplementation((payload, options) => `${payload.sub}-${options.expiresIn}`);

      const tokens = authService.generateTokens(mockUser);

      expect(tokens).toEqual({
        accessToken: '1-1h',
        refreshToken: '1-7d',
      });
    });
  });

  describe('refreshTokens', () => {
    it('should return new tokens if refresh token is valid', async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        email: "alice@example.com",
        username: "alice42",
        avatar: "https://example.com/avatars/alice.jpg",
        role: "ADMIN",
        bio: "Software engineer & coffee enthusiast ☕",
        createdAt: new Date("2023-05-15T10:00:00Z"),
        updatedAt: new Date("2024-02-20T15:30:00Z"),
      };
      jest.spyOn(jwtService, 'verify').mockReturnValue({ email: "test@example.com", sub: 1 });
      jest.spyOn(usersService, 'findOne').mockResolvedValue(mockUser);
      jest.spyOn(authService, 'generateTokens').mockReturnValue({
        accessToken: 'newAccessToken',
        refreshToken: 'newRefreshToken',
      });

      const tokens = await authService.refreshTokens(1, 'validRefreshToken');

      expect(tokens).toEqual({
        accessToken: 'newAccessToken',
        refreshToken: 'newRefreshToken',
      });
    });

    it('should throw UnauthorizedException if refresh token is invalid', async () => {
      jest.spyOn(jwtService, 'verify').mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await expect(authService.refreshTokens(1, 'invalidRefreshToken')).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if user does not match token', async () => {
      jest.spyOn(jwtService, 'verify').mockReturnValue({ sub: 2 });

      await expect(authService.refreshTokens(1, 'validRefreshToken')).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if user does not exist', async () => {
      jest.spyOn(jwtService, 'verify').mockReturnValue({ sub: 1 });
      jest.spyOn(usersService, 'findOne').mockResolvedValue(null);

      await expect(authService.refreshTokens(1, 'validRefreshToken')).rejects.toThrow(UnauthorizedException);
    });
  });
});
