import { Form, Flex } from "antd";
import CustomInput from "./CustomInput";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function CustomForm({
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
          label="Nom"
          name="name"
          rules={[
            { required: true, message: "Veuillez saisir votre nom." },
            { whitespace: true, message: "Le champ est vide." },
            {
              max: 20,
              message: "Le prénom doit faire moins de 20 caractères.",
            },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("firstname")) && (
        <Form.Item
          label="Prénom"
          name="firstname"
          rules={[
            { required: true, message: "Veuillez saisir votre prénom." },
            { whitespace: true, message: "Le champ est vide." },
            {
              max: 20,
              message: "Le prénom doit faire moins de 20 caractères.",
            },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("email")) && (
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "Veuillez saisir une adresse email valide.",
            },
            { required: true, message: "Veuillez saisir votre email." },
            { whitespace: true, message: "Le champ est vide." },
          ]}
          hasFeedback
        >
          <CustomInput />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("password")) && (
        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[
            { required: true, message: "Veuillez saisir votre mot de passe." },
            { whitespace: true, message: "Le champ est vide." },
          ]}
          hasFeedback
        >
          <CustomInput password />
        </Form.Item>
      )}
      {(!fields.length || fields.includes("confirmPassword")) && (
        <Form.Item
          label="Confirmation du mot de passe"
          name="passwordConfirm"
          rules={[
            {
              required: true,
              message: "Veuillez confirmer votre mot de passe.",
            },
            { whitespace: true, message: "Le champ est vide." },
            {
              validator: (_, value) => {
                if (form.getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    "Les deux mots de passe ne correspondent pas"
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
