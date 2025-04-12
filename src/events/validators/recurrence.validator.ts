import { ValidationOptions } from 'class-validator';
import { ValidateFieldDependency } from './field-dependency.validator';
import { RecurrenceInput } from 'src/recurrence/types/recurrence.input';

/**
 * Validates that a recurrence rule exists when isRecurring is true
 * @function IsValidRecurrence
 * @param {ValidationOptions} [validationOptions] - Optional validation options
 * @returns {PropertyDecorator} A class-validator decorator function
 *
 * @example
 * @IsValidRecurrence()
 * recurrenceRule?: RecurrenceInput;
 */
export function IsValidRecurrence(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateFieldDependency(
    {
      field: 'isRecurring',
      condition: (isRecurring: boolean) => isRecurring,
      message: 'Recurrence rule is required when isRecurring is true',
      required: true,
    },
    validationOptions,
  );
}

/**
 * Validates that isRecurring is properly set when a recurrence rule exists
 * @function IsRecurringValid
 * @param {ValidationOptions} [validationOptions] - Optional validation options
 * @returns {PropertyDecorator} A class-validator decorator function
 *
 * @example
 * @IsRecurringValid()
 * isRecurring?: boolean;
 */
export function IsRecurringValid(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateFieldDependency(
    {
      field: 'recurrenceRule',
      condition: (recurrenceRule: RecurrenceInput) => !!recurrenceRule,
      message: 'isRecurring must be true when recurrence rule is defined',
      required: true,
    },
    validationOptions,
  );
}
