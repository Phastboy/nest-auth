import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

/**
 * An abstract base class for implementing conditional validation rules.
 * @abstract
 * @class ConditionalValidator
 * @implements {ValidatorConstraintInterface}
 */
@ValidatorConstraint({ name: 'ConditionalValidation', async: false })
export abstract class ConditionalValidator
  implements ValidatorConstraintInterface
{
  /**
   * Validates the given value based on custom conditions.
   * @abstract
   * @param {any} value - The value to validate
   * @param {ValidationArguments} args - Validation arguments
   * @returns {boolean} True if validation passes, false otherwise
   */
  abstract validate(value: any, args: ValidationArguments): boolean;

  /**
   * Gets the condition message for validation failure.
   * @abstract
   * @param {ValidationArguments} args - Validation arguments
   * @returns {string} The error message
   */
  abstract getConditionMessage(args: ValidationArguments): string;

  /**
   * Default message to return when validation fails.
   * @param {ValidationArguments} args - Validation arguments
   * @returns {string} The error message from getConditionMessage
   */
  defaultMessage(args: ValidationArguments): string {
    return this.getConditionMessage(args);
  }

  /**
   * Helper method to check a condition and set appropriate messages.
   * @protected
   * @param {boolean} condition - The condition to evaluate
   * @param {ValidationArguments} args - Validation arguments
   * @param {string} trueMessage - Message to set when condition is true
   * @param {string} falseMessage - Message to set when condition is false
   * @returns {boolean} The inverse of the condition (true if condition is false, false if condition is true)
   */
  protected checkCondition(
    condition: boolean,
    args: ValidationArguments,
    trueMessage: string,
    falseMessage: string,
  ): boolean {
    if (condition) {
      args.constraints[0].message = trueMessage;
      return false;
    }
    args.constraints[0].message = falseMessage;
    return true;
  }
}
