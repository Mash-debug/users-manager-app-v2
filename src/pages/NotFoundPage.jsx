import { Flex, Typography } from "antd";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/colors";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Paths } from "../constants/paths";

export default function NotFoundPage() {
  return (
    <>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Typography.Title
          style={{ fontWeight: Fonts.weights.bold, color: Colors.primary, margin: 0}}
          level={1}
        >
          404 | Not Found
        </Typography.Title>
        <Typography.Text>
          La page que vous essayez de consulter n'existe pas.
        </Typography.Text>
        <Link style={{margin: 32}} to={Paths.account}>
          <Button>Mon compte</Button>
        </Link>
      </Flex>
    </>
  );
}
