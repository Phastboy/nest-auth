import 'reflect-metadata';
import { validate, Validate, IsOptional } from 'class-validator';
import { ValidateFieldDependency } from './field-dependency.validator';

/**
 * Test class for validating field dependency scenarios
 * @class TestClass
 */
class TestClass {
  /**
   * The field that triggers the dependency condition
   * @type {boolean}
   */
  isAdmin: boolean;

  /**
   * The field that should be present when isAdmin is true
   * @type {string}
   * @ValidateFieldDependency({
   *   field: 'isAdmin',
   *   condition: (isAdmin) => isAdmin === true
   * })
   */
  @ValidateFieldDependency({
    field: 'isAdmin',
    condition: (isAdmin) => isAdmin === true,
  })
  adminCode?: string;
}

/**
 * Test class with custom error message
 * @class TestClassWithCustomMessage
 */
class TestClassWithCustomMessage {
  isActive: boolean;

  /**
   * @ValidateFieldDependency({
   *   field: 'isActive',
   *   condition: (active) => active,
   *   message: 'Feature flag is required when active'
   * })
   */
  @ValidateFieldDependency({
    field: 'isActive',
    condition: (active) => active,
    message: 'Feature flag is required when active',
  })
  featureFlag?: string;
}

/**
 * Test suite for ValidateFieldDependency decorator
 * @describe ValidateFieldDependency
 */
describe('ValidateFieldDependency', () => {
  /**
   * Test case: should validate when dependent field meets condition
   * @it should validate when dependent field meets condition
   */
  it('should validate when dependent field meets condition', async () => {
    const testObj = new TestClass();
    testObj.isAdmin = true;
    testObj.adminCode = 'ADMIN123';

    const errors = await validate(testObj);
    expect(errors.length).toBe(0);
  });

  /**
   * Test case: should fail when dependent field meets condition but main field is missing
   * @it should fail when dependent field meets condition but main field is missing
   */
  it('should fail when dependent field meets condition but main field is missing', async () => {
    const testObj = new TestClass();
    testObj.isAdmin = true;
    testObj.adminCode = undefined;

    const errors = await validate(testObj);
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toEqual({
      ValidateFieldDependency:
        'adminCode is required when isAdmin meets the condition',
    });
  });

  /**
   * Test case: should validate when dependent field doesn't meet condition and main field is missing
   * @it should validate when dependent field doesn't meet condition and main field is missing
   */
  it("should validate when dependent field doesn't meet condition and main field is missing", async () => {
    const testObj = new TestClass();
    testObj.isAdmin = false;
    testObj.adminCode = undefined;

    const errors = await validate(testObj);
    expect(errors.length).toBe(0);
  });

  /**
   * Test case: should fail when dependent field doesn't meet condition but main field is present
   * @it should fail when dependent field doesn't meet condition but main field is present
   */
  it("should fail when dependent field doesn't meet condition but main field is present", async () => {
    const testObj = new TestClass();
    testObj.isAdmin = false;
    testObj.adminCode = 'ADMIN123';

    const errors = await validate(testObj);
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toEqual({
      ValidateFieldDependency:
        "adminCode must not be provided when isAdmin doesn't meet the condition",
    });
  });

  /**
   * Test case: should use custom message when provided
   * @it should use custom message when provided
   */
  it('should use custom message when provided', async () => {
    const testObj = new TestClassWithCustomMessage();
    testObj.isActive = true;
    testObj.featureFlag = undefined;

    const errors = await validate(testObj);
    expect(errors.length).toBe(1);
    expect(errors[0].constraints).toEqual({
      ValidateFieldDependency: 'Feature flag is required when active',
    });
  });

  /**
   * Test case: should work with optional fields when condition not met
   * @it should work with optional fields when condition not met
   */
  it('should work with optional fields when condition not met', async () => {
    class TestOptionalClass {
      isEnabled: boolean;

      @ValidateFieldDependency({
        field: 'isEnabled',
        condition: (enabled) => enabled,
      })
      @IsOptional()
      optionalField?: string;
    }

    const testObj = new TestOptionalClass();
    testObj.isEnabled = false;
    testObj.optionalField = undefined;

    const errors = await validate(testObj);
    expect(errors.length).toBe(0);
  });
});
