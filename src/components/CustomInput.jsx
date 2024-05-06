import { Input, ConfigProvider } from "antd";
import { Colors } from "../constants/colors.js";

// eslint-disable-next-line react/prop-types
export default function CustomInput({password, ...props}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: Colors.primary,
            hoverBorderColor: Colors.primary,
          },
        },
      }}
    >
      {password ? (
        <Input.Password {...props}
          size="large"
          style={{ minWidth: "300px" }}
        />
      ) : (
        <Input {...props}
          size="large"
          style={{ minWidth: "300px" }}
        />
      )}
    </ConfigProvider>
  );
}
