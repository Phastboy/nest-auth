import { ValidationOptions } from 'class-validator';
import { ValidateFieldDependency } from './field-dependency.validator';

export function IsPostValidWhenSharing(validationOptions?: ValidationOptions) {
  return ValidateFieldDependency(
    {
      field: 'shareAsPost',
      condition: (value) => value === true,
      required: true,
      message: 'Post details are required when shareAsPost is true',
    },
    validationOptions,
  );
}

export function IsShareAsPostValid(validationOptions?: ValidationOptions) {
  return ValidateFieldDependency(
    {
      field: 'post',
      condition: (value) => value !== undefined,
      required: true,
      message: 'shareAsPost must be true when providing post details',
    },
    validationOptions,
  );
}
