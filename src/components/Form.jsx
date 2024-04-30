import { Form as BaseForm } from "antd";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ name }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = BaseForm.useForm();


  return (
      <BaseForm onValuesChange={(c) => console.log(c)} form={form} name={name} layout="vertical">
        <BaseForm.Item label="Nom" name="name">
          <Input />
        </BaseForm.Item>
        <BaseForm.Item label="Prénom" name="firstname">
          <Input />
        </BaseForm.Item>
        <BaseForm.Item label="E-mail" name="email">
          <Input />
        </BaseForm.Item>
        <BaseForm.Item label="Mot de passe" name="password">
          <Input />
        </BaseForm.Item>
        <BaseForm.Item label="Confirmation du mot de passe" name="passwordConfirm">
          <Input />
        </BaseForm.Item>
        <BaseForm.Item>
          <Button style={{minWidth: 300}} loading={isLoading} onClick={() => setIsLoading(true)}>Valider</Button>
        </BaseForm.Item>
      </BaseForm>
  );
}
