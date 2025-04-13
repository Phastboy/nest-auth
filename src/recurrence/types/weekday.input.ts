import { Field, InputType, registerEnumType } from '@nestjs/graphql';

export enum Weekday {
  Monday = 'MO',
  Tuesday = 'TU',
  Wednesday = 'WE',
  Thursday = 'TH',
  Friday = 'FR',
  Saturday = 'SA',
  Sunday = 'SU',
}

registerEnumType(Weekday, {
  name: 'Weekday',
  description: 'The days of the week',
});

@InputType()
export class WeekdayInput {
  @Field(() => Weekday, {
    nullable: false,
    description: 'The weekday to match.',
  })
  weekday: Weekday;

  @Field(() => Number, {
    nullable: true,
    description:
      'The nth occurrence of the weekday in the month. E.g. 1 for first, -1 for last.',
  })
  nth?: number;
}
