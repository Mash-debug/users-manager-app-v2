import { Flex, Typography, Space } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Flex style={{ backgroundColor: "#f857a6", padding: 16, position: "sticky", top: 0, left: 0, zIndex: 3 }} justify="space-between">
        <Flex justify="flex-start" align="center" style={{width: "50%"}}>
          <SolutionOutlined style={{ fontSize: 24, color: "white" }} />
          <Typography.Title
            style={{ margin: 0, marginLeft: "16px", color: "white", fontWeight: 1000 }}
            level={1}
          >
            Users Manager App
          </Typography.Title>
        </Flex>
        <Space size="middle">
          <Link to="/login">
            <Button size="large" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>Connexion</Button>
          </Link>
          <Link to="/register">
            <Button size="large" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>Inscription</Button>
          </Link>
        </Space>
      </Flex>
    </>
  );
}
