import { Button as BaseButton, ConfigProvider } from "antd";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";

// eslint-disable-next-line react/prop-types
export default function Button({style, children, ...props}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: Colors.primary,
            defaultColor: Colors.white,
            defaultHoverColor: Colors.primary,
            defaultBorderColor: Colors.primary,
            defaultHoverBg: Colors.white,
            defaultActiveBorderColor: Colors.white,
            defaultActiveColor: Colors.primary,
            defaultHoverBorderColor: Colors.primary,
            fontWeight: Fonts.weights.bold
          },
        },
      }}
    >
      <BaseButton style={{...style }} {...props}>{children}</BaseButton>
    </ConfigProvider>
  );
}
