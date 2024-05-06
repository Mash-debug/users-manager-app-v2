import { Form, Flex } from "antd";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { Strings } from "../constants/strings.js";


export default function CustomForm({
  name,
  onFinish,
  fields = [],
  btnMessage = "Valider",
  isLoading = false,
  initialValues = {},
  btnStyle = {},
  formStyle = {},
  centerBtn = false
}) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onFinish(values);
  };

  return (
    <Form
      form={form}
      style={{ ...formStyle }}
      onFinish={handleFinish}
      name={name}
      layout="vertical"
      initialValues={{
        remember: true,
        ...initialValues,
      }}
    >
      {(!fields.length || fields.includes("name")) && (
        <Form.Item
          label={Strings.form.name.label}
          name="name"
          rules={[
            { required: true, message: Strings.form.name.missing },
            { whitespace: true, message: Strings.form.fieldEmpty },
            {
              max: 20,
              message: Strings.form.name.tooLong,
            },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("firstname")) && (
        <Form.Item
          label={Strings.form.firstname.label}
          name="firstname"
          rules={[
            { required: true, message: Strings.form.firstname.missing },
            { whitespace: true, message: Strings.form.fieldEmpty },
            {
              max: 20,
              message: Strings.form.firstname.tooLong,
            },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("email")) && (
        <Form.Item
          label={Strings.form.mail.label}
          name="email"
          rules={[
            {
              type: "email",
              message: Strings.form.mail.invalid,
            },
            { required: true, message: Strings.form.mail.missing },
            { whitespace: true, message: Strings.form.fieldEmpty },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("password")) && (
        <Form.Item
          label={Strings.form.password.label}
          name="password"
          rules={[
            { required: true, message: Strings.form.password.missing },
            { whitespace: true, message: Strings.form.fieldEmpty },
          ]}
          hasFeedback
        >
          <CustomInput password />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("confirmPassword")) && (
        <Form.Item
          label={Strings.form.confirmPassword.label}
          name="passwordConfirm"
          rules={[
            {
              required: true,
              message: Strings.form.confirmPassword.missing,
            },
            { whitespace: true, message: Strings.form.fieldEmpty },
            {
              validator: (_, value) => {
                if (form.getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    Strings.form.passwordsNotMatch
                  );
                }
              },
            },
          ]}
          dependencies={["password"]}
          hasFeedback
        >
          <CustomInput password />
        </Form.Item>
      )}
      <Flex justify={centerBtn && "center"}>
        <Button
          htmlType="submit"
          style={{ minWidth: 300, ...btnStyle }}
          loading={isLoading}
        >
          {btnMessage}
        </Button>
      </Flex>
    </Form>
  );
}
