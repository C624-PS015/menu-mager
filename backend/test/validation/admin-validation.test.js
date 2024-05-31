import adminValidation from "../../src/validation/admin-validation.js";

describe("Login Validation", () => {
  it("valid input should pass validation", () => {
    const validInput = {
      email: "test@example.com",
      password: "password123",
    };

    const { error } = adminValidation.loginValidation.validate(validInput);
    expect(error).toBeUndefined();
  });

  it("missing email should fail validation", () => {
    const invalidInput = {
      password: "password123",
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe('"email" is required');
  });

  it("invalid email format should fail validation", () => {
    const invalidInput = {
      email: "invalid-email",
      password: "password123",
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe('"email" must be a valid email');
  });

  it("email exceeding max length should fail validation", () => {
    const invalidInput = {
      email: "a".repeat(101) + "@example.com",
      password: "password123",
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe(
      '"email" length must be less than or equal to 100 characters long',
    );
  });

  it("missing password should fail validation", () => {
    const invalidInput = {
      email: "test@example.com",
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe('"password" is required');
  });

  it("password less than minimum length should fail validation", () => {
    const invalidInput = {
      email: "test@example.com",
      password: "short",
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe(
      '"password" length must be at least 8 characters long',
    );
  });

  it("password exceeding max length should fail validation", () => {
    const invalidInput = {
      email: "test@example.com",
      password: "a".repeat(101),
    };

    const { error } = adminValidation.loginValidation.validate(invalidInput);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe(
      '"password" length must be less than or equal to 100 characters long',
    );
  });
});
