import { Strings } from "../constants/strings.js";

export const useCustomFormFields = () => ({
  name: {
    label: Strings.form.name.label,
    name: "name",
    type: "default",
    rules: [
      { required: true, message: Strings.form.name.missing },
      { whitespace: true, message: Strings.form.fieldEmpty },
      {
        max: 20,
        message: Strings.form.name.tooLong,
      },
    ],
    hasFeedback: true,
  },
  firstname: {
    label: Strings.form.firstname.label,
    name: "firstname",
    type: "default",
    rules: [
      {
        required: true,
        message: Strings.form.firstname.missing,
      },
      { whitespace: true, message: Strings.form.fieldEmpty },
      {
        max: 20,
        message: Strings.form.firstname.tooLong,
      },
    ],
    hasFeedback: true,
  },
  email: {
    label: Strings.form.mail.label,
    name: "email",
    type: "default",
    rules: [
      {
        type: "email",
        message: Strings.form.mail.invalid,
      },
      { required: true, message: Strings.form.mail.missing },
      { whitespace: true, message: Strings.form.fieldEmpty },
    ],
    hasFeedback: true,
  },
  password: {
    label: Strings.form.password.label,
    name: "password",
    type: "password",
    rules: [
      {
        required: true,
        message: Strings.form.password.missing,
      },
      { whitespace: true, message: Strings.form.fieldEmpty },
    ],
    hasFeedback: true,
  },
  passwordConfirm: {
    label: Strings.form.confirmPassword.label,
    name: "passwordConfirm",
    type: "password",
    rules: [
      {
        required: true,
        message: Strings.form.confirmPassword.missing,
      },
      { whitespace: true, message: Strings.form.fieldEmpty },
      ({ getFieldValue }) => ({
        validator: (_, value) => {
          if (getFieldValue("password") === value) {
            return Promise.resolve();
          } else {
            return Promise.reject(Strings.form.passwordsNotMatch);
          }
        },
      }),
    ],
    dependencies: ["password"],
    hasFeedback: true,
  },
});
