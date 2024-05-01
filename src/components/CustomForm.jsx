import { Form } from "antd";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CustomForm({ name, onFinish }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    setIsLoading(true);
    onFinish(values);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      name={name}
      layout="vertical"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Nom"
        name="name"
        rules={[
          { required: true, message: "Veuillez saisir votre nom." },
          { whitespace: true, message: "Le champ est vide." },
          { max: 20, message: "Le prénom doit faire moins de 20 caractères." },
        ]}
        hasFeedback
      >
        <CustomInput />
      </Form.Item>
      <Form.Item
        label="Prénom"
        name="firstname"
        rules={[
          { required: true, message: "Veuillez saisir votre prénom." },
          { whitespace: true, message: "Le champ est vide." },
          { max: 20, message: "Le prénom doit faire moins de 20 caractères." },
        ]}
        hasFeedback
      >
        <CustomInput />
      </Form.Item>
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
      <Form.Item
        label="Confirmation du mot de passe"
        name="passwordConfirm"
        rules={[
          { required: true, message: "Veuillez confirmer votre mot de passe." },
          { whitespace: true, message: "Le champ est vide." },
          {validator: (_, value) => {
            if(form.getFieldValue("password") === value) {
              return Promise.resolve();
            } else {
              return Promise.reject('Les deux mots de passe ne correspondent pas')
            }
          }}
        ]}
        dependencies={["password"]}
        hasFeedback
      >
        <CustomInput password />
      </Form.Item>
      <Button htmlType="submit" style={{ minWidth: 300 }} loading={isLoading}>
        Valider
      </Button>
    </Form>
  );
}
