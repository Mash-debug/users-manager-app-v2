import { Input, ConfigProvider } from "antd";
import { Colors } from "../constants/colors.js";

// eslint-disable-next-line react/prop-types
export default function CustomInput(props) {
  const { Password } = Input;

  const inputs = {
    default: <Input {...props} size="large" style={{ minWidth: "300px" }} />,
    password: (
      <Password {...props} size="large" style={{ minWidth: "300px" }} />
    ),
  };
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
      {inputs[props.type]}
    </ConfigProvider>
  );
}
