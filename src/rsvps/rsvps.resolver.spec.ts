import { Test, TestingModule } from '@nestjs/testing';
import { RsvpsResolver } from './rsvps.resolver';
import { RsvpsService } from './rsvps.service';

describe('RsvpsResolver', () => {
  let resolver: RsvpsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsvpsResolver, RsvpsService],
    }).compile();

    resolver = module.get<RsvpsResolver>(RsvpsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
