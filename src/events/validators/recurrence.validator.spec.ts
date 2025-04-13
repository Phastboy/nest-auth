import 'reflect-metadata';
import { validate } from 'class-validator';
import { IsRecurringValid, IsValidRecurrence } from './recurrence.validator';
import { ValidateFieldDependency } from './field-dependency.validator';

// Mock RecurrenceInput type for testing
type RecurrenceInput = {
  frequency: string;
  interval?: number;
};

class RecurrenceTestClass {
  isRecurring: boolean;

  @IsValidRecurrence()
  recurrenceRule?: RecurrenceInput;
}

class IsRecurringTestClass {
  @IsRecurringValid()
  isRecurring?: boolean;

  recurrenceRule?: RecurrenceInput;
}

describe('RecurrenceValidators', () => {
  describe('IsValidRecurrence (recurrenceRule validation)', () => {
    it('should validate when isRecurring is true and rule exists', async () => {
      const testObj = new RecurrenceTestClass();
      testObj.isRecurring = true;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });

    it('should fail when isRecurring is true but rule is missing', async () => {
      const testObj = new RecurrenceTestClass();
      testObj.isRecurring = true;
      testObj.recurrenceRule = undefined;

      const errors = await validate(testObj);
      expect(errors.length).toBe(1);
      expect(errors[0].constraints).toEqual({
        ValidateFieldDependency:
          'Recurrence rule is required when isRecurring is true',
      });
    });

    it('should validate when isRecurring is false and rule is missing', async () => {
      const testObj = new RecurrenceTestClass();
      testObj.isRecurring = false;
      testObj.recurrenceRule = undefined;

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });

    it('should validate when isRecurring is false but rule exists', async () => {
      const testObj = new RecurrenceTestClass();
      testObj.isRecurring = false;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });
  });

  describe('IsRecurringValid (isRecurring validation)', () => {
    it('should validate when rule exists and isRecurring is true', async () => {
      const testObj = new IsRecurringTestClass();
      testObj.isRecurring = true;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });

    it('should fail when rule exists but isRecurring is false', async () => {
      const testObj = new IsRecurringTestClass();
      testObj.isRecurring = false;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(1);
      expect(errors[0].constraints).toEqual({
        ValidateFieldDependency:
          'isRecurring must be true when recurrence rule is defined',
      });
    });

    it('should fail when rule exists but isRecurring is undefined', async () => {
      const testObj = new IsRecurringTestClass();
      testObj.isRecurring = undefined;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(1);
      expect(errors[0].constraints).toEqual({
        ValidateFieldDependency:
          'isRecurring must be true when recurrence rule is defined',
      });
    });

    it('should validate when rule is missing and isRecurring is false', async () => {
      const testObj = new IsRecurringTestClass();
      testObj.isRecurring = false;
      testObj.recurrenceRule = undefined;

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });

    it('should validate when rule is missing and isRecurring is undefined', async () => {
      const testObj = new IsRecurringTestClass();
      testObj.isRecurring = undefined;
      testObj.recurrenceRule = undefined;

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });
  });

  // Test new optional dependency functionality
  describe('Optional dependency cases', () => {
    class OptionalRecurrenceTestClass {
      isRecurring: boolean;

      @ValidateFieldDependency({
        field: 'isRecurring',
        condition: (isRecurring: boolean) => isRecurring,
        message: 'Custom optional message',
        required: false, // Testing optional case
      })
      recurrenceRule?: RecurrenceInput;
    }

    it('should validate when condition met but optional field is missing', async () => {
      const testObj = new OptionalRecurrenceTestClass();
      testObj.isRecurring = true;
      testObj.recurrenceRule = undefined;

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });

    it('should validate when condition not met and optional field exists', async () => {
      const testObj = new OptionalRecurrenceTestClass();
      testObj.isRecurring = false;
      testObj.recurrenceRule = { frequency: 'DAILY' };

      const errors = await validate(testObj);
      expect(errors.length).toBe(0);
    });
  });
});
