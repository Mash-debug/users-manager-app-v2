import { Flex, Typography } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <>
      <Flex style={{ backgroundColor: "#f857a6", padding: 16 }} justify="space-between">
        <Flex justify="flex-start" align="center" style={{width: "50%"}}>
          <SolutionOutlined style={{ fontSize: 24, color: "white" }} />
          <Typography.Title
            style={{ margin: 0, marginLeft: "16px", color: "white", fontWeight: 1000 }}
            level={1}
          >
            Users Manager App
          </Typography.Title>
        </Flex>
      </Flex>
    </>
  );
}
