import { F } from '@faker-js/faker/dist/airline-CBNP41sR';
import { Field, InputType, Int } from '@nestjs/graphql';
import { log } from 'console';
import { DateTime } from 'graphql-scalars/typings/mocks';
import { Weekday } from './weekday.input';

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
}
