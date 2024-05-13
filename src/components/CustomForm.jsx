import { Form, Flex } from "antd";
import CustomInput from "./CustomInput";
import Button from "./Button";


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
      {fields.map(field => {
        return <Form.Item {...field}>
          <CustomInput type={field.type} />
        </Form.Item>
      })}
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
