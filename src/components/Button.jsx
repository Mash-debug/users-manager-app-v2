import { Button as BaseButton, ConfigProvider } from "antd";

export default function Button({style, ...props}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBorderColor: ""
          },
        },
      }}
    >
      <BaseButton style={{ backgroundColor: "#f857a6", color: "white", ...style }} {...props}>Valider</BaseButton>
    </ConfigProvider>
  );
}
