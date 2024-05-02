import { Flex, Typography, Divider } from "antd";
import CustomForm from "../components/CustomForm";

export default function AccountPage() {
  return (
    <div style={{ padding: 16, width: "100%" }}>
      <Flex justify="center" vertical align="center">
        <Divider orientation="left">
          <Typography.Title
            level={2}
            style={{ fontWeight: 1000, color: "#f857a6" }}
          >
            Compte
          </Typography.Title>
        </Divider>
      </Flex>
      <Flex justify="space-evenly">
        <CustomForm fields={["name", "firstname"]} btnMessage="Modifier le nom/prénom"/>
        <CustomForm fields={["password", "confirmPassword"]} btnMessage="Modifier le mot de passe"/>
      </Flex>
    </div>
  );
}
