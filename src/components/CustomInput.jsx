import { Input, ConfigProvider } from "antd";

// eslint-disable-next-line react/prop-types
export default function CustomInput({password, ...props}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: "#f857a6",
            hoverBorderColor: "#f857a6",
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
