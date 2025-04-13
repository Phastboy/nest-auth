import 'reflect-metadata';
import { ValidationArguments } from 'class-validator';
import { ConditionalValidator } from './base.validator';
/**
 * Test implementation of ConditionalValidator for testing purposes.
 * @class TestValidator
 * @extends {ConditionalValidator}
 */
class TestValidator extends ConditionalValidator {
  /**
   * Validates that the value is or isn't "test"
   * @param {any} value - The value to validate
   * @param {ValidationArguments} args - Validation arguments
   * @returns {boolean} Validation result
   */
  validate(value: any, args: ValidationArguments): boolean {
    const condition = value === 'test';
    return this.checkCondition(
      condition,
      args,
      'Value cannot be "test"',
      'Value must be "test"',
    );
  }

  /**
   * Gets the condition message from constraints
   * @param {ValidationArguments} args - Validation arguments
   * @returns {string} The error message
   */
  getConditionMessage(args: ValidationArguments): string {
    return args.constraints[0].message;
  }
}

/**
 * Test suite for ConditionalValidator
 * @describe ConditionalValidator
 */
describe('ConditionalValidator', () => {
  let validator: TestValidator;
  const mockValidationArgs: ValidationArguments = {
    value: undefined,
    targetName: '',
    object: {},
    property: 'testProperty',
    constraints: [{}],
  };

  /**
   * Runs before each test
   * @beforeEach
   */
  beforeEach(() => {
    validator = new TestValidator();
  });

  /**
   * Test group for validate method
   * @describe validate
   */
  describe('validate', () => {
    /**
     * Test that validate returns false and sets trueMessage when condition is true
     * @it should return false and set trueMessage when condition is true
     */
    it('should return false and set trueMessage when condition is true', () => {
      const result = validator.validate('test', mockValidationArgs);
      expect(result).toBe(false);
      expect(mockValidationArgs.constraints[0].message).toBe(
        'Value cannot be "test"',
      );
    });

    /**
     * Test that validate returns true and sets falseMessage when condition is false
     * @it should return true and set falseMessage when condition is false
     */
    it('should return true and set falseMessage when condition is false', () => {
      const result = validator.validate('other', mockValidationArgs);
      expect(result).toBe(true);
      expect(mockValidationArgs.constraints[0].message).toBe(
        'Value must be "test"',
      );
    });
  });

  /**
   * Test group for defaultMessage method
   * @describe defaultMessage
   */
  describe('defaultMessage', () => {
    /**
     * Test that defaultMessage returns the message from getConditionMessage
     * @it should return the message from getConditionMessage
     */
    it('should return the message from getConditionMessage', () => {
      mockValidationArgs.constraints[0].message = 'Test message';
      const message = validator.defaultMessage(mockValidationArgs);
      expect(message).toBe('Test message');
    });
  });

  /**
   * Test group for checkCondition method
   * @describe checkCondition
   */
  describe('checkCondition', () => {
    /**
     * Test that checkCondition sets trueMessage and returns false when condition is true
     * @it should set trueMessage and return false when condition is true
     */
    it('should set trueMessage and return false when condition is true', () => {
      const result = validator['checkCondition'](
        true,
        mockValidationArgs,
        'True message',
        'False message',
      );
      expect(result).toBe(false);
      expect(mockValidationArgs.constraints[0].message).toBe('True message');
    });

    /**
     * Test that checkCondition sets falseMessage and returns true when condition is false
     * @it should set falseMessage and return true when condition is false
     */
    it('should set falseMessage and return true when condition is false', () => {
      const result = validator['checkCondition'](
        false,
        mockValidationArgs,
        'True message',
        'False message',
      );
      expect(result).toBe(true);
      expect(mockValidationArgs.constraints[0].message).toBe('False message');
    });
  });
});
