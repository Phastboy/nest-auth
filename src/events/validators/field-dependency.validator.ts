import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { ConditionalValidator } from './base.validator';

/**
 * Configuration object for strict field dependency validation
 * @typedef {Object} FieldDependencyConfig
 * @property {string} field - The name of the field to check dependency against
 * @property {function} condition - Function that evaluates the dependency condition
 * @property {string} [message] - Optional custom error message when validation fails
 */
type FieldDependencyConfig = {
  field: string;
  condition: (value: any) => boolean;
  message?: string;
  required?: boolean;
};

/**
 * Creates a decorator that enforces strict field dependency validation.
 * The decorated property must be defined when the condition is met on the dependent field,
 * and must be undefined when the condition is not met.
 *
 * @param {FieldDependencyConfig} config - Configuration for the validation including:
 *   - field: The dependent field name
 *   - condition: Function that evaluates the dependency condition
 *   - message: Optional custom error message
 * @param {ValidationOptions} [validationOptions] - Optional additional validation options
 * @returns {PropertyDecorator} A class-validator decorator function
 *
 * @example
 * @ValidateFieldDependency({
 *   field: 'isAdmin',
 *   condition: (isAdmin) => isAdmin === true,
 *   message: 'Admin code is required when isAdmin is true'
 * })
 * adminCode?: string;
 *
 * @example
 * @ValidateFieldDependency({
 *   field: 'accountType',
 *   condition: (type) => type === 'premium'
 * })
 * premiumFeature?: string;
 */
export function ValidateFieldDependency(
  config: FieldDependencyConfig,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'ValidateFieldDependency',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new (class extends ConditionalValidator {
        validate(value: any, args: ValidationArguments): boolean {
          const dependentValue = args.object[config.field];
          const conditionMet = config.condition(dependentValue);
          const isRequired = config.required ?? true;

          // For recurrenceRule validation (depends on isRecurring)
          if (args.property === 'recurrenceRule') {
            return conditionMet
              ? isRequired
                ? value !== undefined
                : true
              : true;
          }

          // For isRecurring validation (depends on recurrenceRule)
          if (args.property === 'isRecurring') {
            return conditionMet ? value === true : true;
          }

          // Default behavior for other cases
          return conditionMet
            ? isRequired
              ? value !== undefined
              : true
            : isRequired
              ? value === undefined
              : true;
        }

        getConditionMessage(args: ValidationArguments): string {
          if (config.message) return config.message;

          const dependentValue = args.object[config.field];
          const conditionMet = config.condition(dependentValue);
          const isRequired = config.required ?? true;

          return conditionMet
            ? isRequired
              ? `${args.property} is required when ${config.field} meets the condition`
              : `${args.property} is optional when ${config.field} meets the condition`
            : isRequired
              ? `${args.property} must not be provided when ${config.field} doesn't meet the condition`
              : `${args.property} is optional when ${config.field} doesn't meet the condition`;
        }
      })(),
    });
  };
}
