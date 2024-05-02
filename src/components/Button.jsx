import { Button as BaseButton, ConfigProvider } from "antd";

// eslint-disable-next-line react/prop-types
export default function Button({style, children, ...props}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "#f857a6",
            defaultColor: "#ffffff",
            defaultHoverColor: "#f857a6",
            defaultBorderColor: "#f857a6",
            defaultHoverBg: "#ffffff",
            defaultActiveBorderColor: "white",
            defaultActiveColor: "#f857a6",
            defaultHoverBorderColor: "#f857a6",
          },
        },
      }}
    >
      <BaseButton style={{...style }} {...props}>{children}</BaseButton>
    </ConfigProvider>
  );
}
