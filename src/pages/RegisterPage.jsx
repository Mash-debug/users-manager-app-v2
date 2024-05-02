import { Typography, Flex } from "antd";
import NavBar from "../components/NavBar";
import CustomForm from "../components/CustomForm";

export default function RegisterPage() {
  return (
    <>
      <NavBar />
      <div style={{ padding: 32 }}>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", color: "#f857a6", margin: 0 }}
        >
          Inscription
        </Typography.Title>
        <Flex justify="center">
          <CustomForm onFinish={(values) => console.log(values)} />
        </Flex>
      </div>
    </>
  );
}
