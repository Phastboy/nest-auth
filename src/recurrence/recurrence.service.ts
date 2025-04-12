import { BadRequestException, Injectable } from '@nestjs/common';
import { RecurrenceInput } from './types/recurrence.input';
import { WeekdayInput } from './types/weekday.input';
import pkg from 'rrule';
import { RRule } from 'rrule';

export interface IRecurrence {
  description: string;
  rruleString: string;
  occurrences: Date[];
}

export interface IGetRecurrenceInput {
  rruleOptions?: RecurrenceInput;
  fromString?: string;
}

@Injectable()
export class RecurrenceService {
  private buildOptions(input: RecurrenceInput): Partial<pkg.Options> {
    return {
      freq: input.frequency ? RRule[input.frequency] : undefined,
      dtstart: input.dtstart,
      count: input.count,
      interval: input.interval ?? 1,
      wkst: input.wkst ? RRule[input.wkst] : undefined,
      until: input.until,
      tzid: input.tzid,
      byweekday: input.byweekday
        ? this.transformWeekdays(input.byweekday)
        : undefined,
      bymonth: input.bymonth,
      bymonthday: input.bymonthday,
      byyearday: input.byyearday,
      byhour: input.byhour,
      byminute: input.byminute,
      bysecond: input.bysecond,
      bysetpos: input.bysetpos,
    };
  }

  private transformWeekdays(weekdays: WeekdayInput[]): pkg.Weekday[] {
    return weekdays.map(({ weekday, nth }) => {
      const rruleWeekday = RRule[weekday] as pkg.Weekday;
      return typeof nth === 'number' ? rruleWeekday.nth(nth) : rruleWeekday;
    });
  }

  getRecurrences(option: IGetRecurrenceInput): IRecurrence {
    const rule = this.buildRule(option);
    return {
      description: rule.toText(),
      rruleString: rule.toString(),
      occurrences: rule.all(),
    };
  }

  private buildRule(option: IGetRecurrenceInput): pkg.RRule {
    const { rruleOptions, fromString } = option;

    if (!rruleOptions && !fromString) {
      throw new BadRequestException(
        'Either rruleOptions or fromString must be provided',
      );
    }

    if (rruleOptions && fromString) {
      throw new BadRequestException(
        'Only one of rruleOptions or fromString can be provided',
      );
    }

    if (fromString) {
      return RRule.fromString(fromString);
    }

    if (!option.rruleOptions) {
      throw new BadRequestException('rruleOptions must be provided');
    }
    const options = this.buildOptions(option.rruleOptions);
    return new RRule(options);
  }
}
