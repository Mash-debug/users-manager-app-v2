import NavBar from "../components/NavBar";
import Form from "../components/Form";
import { Flex } from "antd";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Flex justify="flex-start" style={{padding: 8}} align="center">
        <Form name="Connexion" />
      </Flex>
    </>
  );
}
