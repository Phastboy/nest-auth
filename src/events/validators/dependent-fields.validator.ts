import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
    ValidationOptions,
  } from 'class-validator';
  
  /**
   * Validates that dependent fields meet a custom condition.
   * @param fields - Array of field names to check
   * @param validateFn - Custom validation function
   * @param message - Optional dynamic error message generator
   */
  export function ValidateDependentFields(
    fields: string[],
    validateFn: (values: any[], args: ValidationArguments) => boolean,
    message?: (args: ValidationArguments) => string,
    validationOptions?: ValidationOptions,
  ) {
    return function (object: object, propertyName: string) {
      registerDecorator({
        name: 'ValidateDependentFields',
        target: object.constructor,
        propertyName,
        options: validationOptions,
        validator: new DependentFieldsValidator(fields, validateFn, message),
      });
    };
  }
  
  @ValidatorConstraint({ name: 'DependentFieldsValidator', async: false })
  class DependentFieldsValidator implements ValidatorConstraintInterface {
    constructor(
      private readonly fields: string[],
      private readonly validateFn: (values: any[], args: ValidationArguments) => boolean,
      private readonly message?: (args: ValidationArguments) => string,
    ) {}
  
    validate(value: any, args: ValidationArguments) {
      const relatedValues = this.fields.map((field) => (args.object as any)[field]);
      return this.validateFn([value, ...relatedValues], args);
    }
  
    defaultMessage(args: ValidationArguments) {
      if (this.message) {
        return this.message(args);
      }
      return `Validation failed for fields: ${this.fields.join(', ')}`;
    }
  }