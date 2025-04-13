import { ValidationOptions } from 'class-validator';
import { ValidateDependentFields } from './dependent-fields.validator';

/**
 * Validates that the recurrence configuration is logically consistent.
 * @param validationOptions - Optional class-validator options
 * @returns PropertyDecorator
 *
 * @example
 * @ValidateRecurrence()
 * isRecurring?: boolean;
 * recurrenceRule?: RecurrenceInput;
 */
export function ValidateRecurrence(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateDependentFields(
    ['isRecurring'],
    ([recurrenceRule, isRecurring]) => isRecurring ? !!recurrenceRule : !recurrenceRule,
    (args) => {
      const { isRecurring, recurrenceRule } = args.object as any;
      if (isRecurring && !recurrenceRule) return 'recurrenceRule is required when isRecurring is true!';
      if (recurrenceRule && !isRecurring) return 'isRecurring must be true if recurrenceRule is provided!';
      return 'Invalid recurrence configuration!';
    },
    validationOptions,
  );
}