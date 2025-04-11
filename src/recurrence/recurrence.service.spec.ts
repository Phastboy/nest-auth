import { Test, TestingModule } from '@nestjs/testing';
import { RecurrenceService, StrictRRuleSetLike } from './recurrence.service';
import { BadRequestException } from '@nestjs/common';
import { RRuleLike } from 'rrule-rust';

describe('RecurrenceService', () => {
  let service: RecurrenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurrenceService],
    }).compile();

    service = module.get<RecurrenceService>(RecurrenceService);
  });

  it('should create a DateTime object with correct values', () => {
    const dateTime = new Date(2023, 9, 1, 12, 30, 45); // Month is 0-indexed in JavaScript Date
    expect(dateTime.getFullYear()).toBe(2023);
    expect(dateTime.getMonth() + 1).toBe(10); // Adjust for 0-indexed month
    expect(dateTime.getDate()).toBe(1);
    expect(dateTime.getHours()).toBe(12);
    expect(dateTime.getMinutes()).toBe(30);
    expect(dateTime.getSeconds()).toBe(45);
  });

  it('should return occurrences from a valid ruleSet string', () => {
    const ruleSetString = 'DTSTART:20231001T123045Z\nRRULE:FREQ=DAILY;COUNT=3';
    const result = service.getOccurrences({ fromString: ruleSetString });
    expect(result.occurrences.length).toBe(3);
    expect(result.occurrences[0].toString()).toBe('20231001T123045Z');
  });

  it('should return occurrences from rruleOptions and rruleSetOptions', () => {
    const rruleOptions: Partial<RRuleLike> = { frequency: 2, count: 3 }; // FREQ=DAILY
    const rruleSetOptions: StrictRRuleSetLike = {
      tzid: 'UTC',
      dtstart: service.createDateTime(2023, 10, 1, 12, 30, 45),
    };
    const result = service.getOccurrences({ rruleOptions, rruleSetOptions });
    expect(result.occurrences.length).toBe(3);
    expect(result.occurrences[0].toString()).toBe('20231001T123045Z');
  });

  it('should throw BadRequestException for missing options', () => {
    expect(() => service.getOccurrences({})).toThrow(BadRequestException);
  });

  it('should throw BadRequestException for invalid ruleSet string', () => {
    expect(() =>
      service.getOccurrences({ fromString: 'INVALID_STRING' }),
    ).toThrow(BadRequestException);
  });

  it('should return occurrences as strings when asString is true', () => {
    const ruleSetString = 'DTSTART:20231001T123045Z\nRRULE:FREQ=DAILY;COUNT=2';
    const result = service.getOccurrences({
      fromString: ruleSetString,
      asString: true,
    });
    expect(result.occurrences).toEqual([
      '20231001T123045Z',
      '20231002T123045Z',
    ]);
  });

  it('should respect tzid when generating occurrences', () => {
    const dtstartUTC = service.createDateTime(2023, 10, 1, 12, 0, 0);
    const dtstartLagos = service.createDateTime(2023, 10, 1, 12, 0, 0);

    const rruleOptions: Partial<RRuleLike> = {
      frequency: 2,
      count: 1,
    };

    // RuleSet in UTC
    const resultUTC = service.getOccurrences({
      rruleOptions,
      rruleSetOptions: { tzid: 'UTC', dtstart: dtstartUTC },
      asString: true,
    });

    // RuleSet in Lagos (UTC+1/+1 DST)
    const resultLagos = service.getOccurrences({
      rruleOptions,
      rruleSetOptions: { tzid: 'Africa/Lagos', dtstart: dtstartLagos },
      asString: true,
    });

    expect(resultUTC.occurrences[0]).not.toEqual(resultLagos.occurrences[0]);
  });

  it('should throw BadRequestException for empty ruleSet string', () => {
    expect(() => service.getOccurrences({ fromString: '   ' })).toThrow(
      BadRequestException,
    );
  });
});
