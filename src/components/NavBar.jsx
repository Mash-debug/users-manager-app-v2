import { ConfigProvider, Flex, Typography } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Nunito Sans"
          }
        }}
      >
        <Flex justify="flex-start" align="center" style={{backgroundColor: "#f857a6", padding: 16}}>
          <SolutionOutlined style={{fontSize: 24, color: "white"}} />
          <Typography.Title style={{ margin: 0, color: "white", fontWeight: 1000 }} level={2}>
            Users Manager App
          </Typography.Title>
        </Flex>
      </ConfigProvider>
    </>
  );
}
