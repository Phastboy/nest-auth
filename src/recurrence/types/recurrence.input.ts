import { Field, InputType, Int } from '@nestjs/graphql';
import { log } from 'console';
import { DateTime } from 'graphql-scalars/typings/mocks';
import { Weekday, WeekdayInput } from './weekday.input';

export enum RecurrenceFrequency {
  Yearly = 'YEARLY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Minutely = 'MINUTELY',
  Secondly = 'SECONDLY',
}

@InputType()
export class RecurrenceInput {
  @Field(() => RecurrenceFrequency, {
    nullable: true,
    description:
      'The frequency of the recurrence. if not given, the default frequency is YEARLY.',
    defaultValue: RecurrenceFrequency.Yearly,
  })
  frequency?: RecurrenceFrequency;

  @Field(() => DateTime, {
    nullable: true,
    description:
      'The start date and time of the recurrence. If not provided, the current date and time will be used.',
    defaultValue: new Date(),
  })
  dtstart?: Date;

  @Field(() => Int, {
    nullable: true,
    description: 'The number of occurrences to generate.',
  })
  count?: number;

  @Field(() => Int, {
    nullable: true,
    description: `The interval between each frequency iteration. For example, when using ${RecurrenceFrequency.Daily}, an interval of 2 would mean once every 2 days. The default interval is 1.`,
    defaultValue: 1,
  })
  interval: number;

  @Field(() => Weekday, {
    nullable: true,
    description: `the week start day. This will affect recurrences based on weekly periods. The default week start day is ${Weekday.Monday}.`,
    defaultValue: Weekday.Monday,
  })
  wkst?: Weekday;

  @Field(() => DateTime, {
    nullable: true,
    description: `The end date and time of the recurrence. If provided, it will override the count parameter.  If a recurrence instance happens to be the same as the ${Date} instance given in the until argument, this will be the last occurrence.`,
  })
  until?: Date;

  @Field(() => String, {
    nullable: true,
    description:
      'if given, this must be IANA string recognized by Intl API. This will be used to convert the start date to the given timezone. If not given, the start date will be treated as UTC.',
  })
  tzid?: string;

  @Field(() => [Int], {
    nullable: true,
    description:
      'array of integers. each integer specifies an occurrence number, corresponding to the nth occurrence of the rule inside the frequency period. For example, if the recurrence is daily and the array is [1, 3, 5], it means the first, third, and fifth occurrences will be generated.',
  })
  bysetpos?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the month of the year. For example, if the recurrence is yearly and the array is [1, 6], it means January and June will be generated.`,
  })
  bymonth?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the day of the month. For example, if the recurrence is monthly and the array is [1, 15], it means the first and fifteenth days of each month will be generated.`,
  })
  bymonthday?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the day of the year. For example, if the recurrence is yearly and the array is [1, 100], it means January 1st and April 10th will be generated.`,
  })
  byyearday?: number[];

  @Field(() => [WeekdayInput], {
    nullable: true,
    description: `Array of weekday objects. Each may include nth value (like "2nd Monday").`,
  })
  byweekday?: WeekdayInput[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the week number of the month. For example, if the recurrence is monthly and the array is [1, -1], it means the first and last weeks of each month will be generated.`,
  })
  byweekno?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the hour of the day. For example, if the recurrence is hourly and the array is [0, 12], it means midnight and noon will be generated.`,
  })
  byhour?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the minute of the hour. For example, if the recurrence is minutely and the array is [0, 30], it means every hour at 0 and 30 minutes will be generated.`,
  })
  byminute?: number[];

  @Field(() => [Int], {
    nullable: true,
    description: `array of integers. each integer specifies the second of the minute. For example, if the recurrence is secondly and the array is [0, 30], it means every minute at 0 and 30 seconds will be generated.`,
  })
  bysecond?: number[];
}
