import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  RRule,
  RRuleSet,
  DateTime,
  type RRuleLike,
  type RRuleSetLike,
} from 'rrule-rust';

export type StrictRRuleSetLike = Partial<RRuleSetLike> & {
  tzid: string;
  dtstart: DateTime;
};

export interface IRuleFeatOccurrences<T extends boolean = false> {
  ruleSetString: string;
  ruleSet?: RRuleSet;
  occurrences: T extends true ? string[] : DateTime[];
}

@Injectable()
export class RecurrenceService {
  createDateTime(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ): DateTime {
    return DateTime.create(year, month, day, hour, minute, second, false);
  }

  getOccurrences<T extends boolean = false>(options: {
    rruleOptions?: Partial<RRuleLike>;
    rruleSetOptions?: StrictRRuleSetLike;
    fromString?: string;
    asString?: T;
  }): IRuleFeatOccurrences<T> {
    const { fromString, asString, rruleOptions, rruleSetOptions } = options;

    if (fromString) {
      return this.occurrencesFromString(fromString, asString);
    }

    if (!rruleOptions || !rruleSetOptions) {
      throw new BadRequestException('Missing RRule or RRuleSet options.');
    }

    try {
      const ruleSet = this.buildRuleSet(rruleOptions, rruleSetOptions);
      const dates = ruleSet.all();
      const processedDates = this.processDates(dates, !!asString);

      return {
        ruleSetString: ruleSet.toString(),
        ruleSet,
        occurrences: processedDates as T extends true ? string[] : DateTime[],
      };
    } catch (error: any) {
      throw new InternalServerErrorException(
        error?.message || 'Failed to build recurrence rule set.',
      );
    }
  }

  private buildRuleSet(
    rruleOptions: Partial<RRuleLike>,
    rruleSetOptions: StrictRRuleSetLike,
  ): RRuleSet {
    const rrule = new RRule(rruleOptions as RRuleLike);
    return new RRuleSet({
      ...rruleSetOptions,
      rrules: [rrule],
    });
  }

  private occurrencesFromString<T extends boolean = false>(
    ruleSetString: string,
    asString?: T,
  ): IRuleFeatOccurrences<T> {
    if (!ruleSetString?.trim()) {
      throw new BadRequestException('Empty rule set string.');
    }

    try {
      const ruleSet = RRuleSet.parse(ruleSetString.trim());
      const dates = ruleSet.all();
      const processedDates: T extends true ? string[] : DateTime[] = this.processDates(dates, !!asString) as T extends true ? string[] : DateTime[];

      return {
        ruleSetString,
        ruleSet,
        occurrences: processedDates,
      };
    } catch (error: any) {
      throw new BadRequestException(
        error?.message || 'Invalid recurrence rule set string.',
      );
    }
  }

  private processDates(
    dates: DateTime[],
    asString: boolean,
  ): DateTime[] | string[] {
    return asString ? dates.map((dt) => dt.toString()) : dates;
  }
}
