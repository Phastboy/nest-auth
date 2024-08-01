import { Reflector } from '@nestjs/core';
import { RolesGuard } from './role.guard';

describe('RolesGuard', () => {
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
  });

  it('should be defined', () => {
    expect(new RolesGuard(reflector)).toBeDefined();
  });
});
