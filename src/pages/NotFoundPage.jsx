import { ConfigProvider, Flex, Result, Typography } from "antd";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/colors";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Paths } from "../constants/paths";
import { Strings } from "../constants/strings";

export default function NotFoundPage() {
  return (
    <ConfigProvider theme={{
      token: {
        colorError: Colors.primary
      }
    }}>
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Result
        status="404"
        title={
          <Typography.Title
            level={1}
            style={{ fontWeight: Fonts.weights.bold, color: Colors.primary }}
          >
            404
          </Typography.Title>
        }
        subTitle={Strings.notFoundPage.message}
        extra={
          <Link to={Paths.account}>
            <Button>Retour à mon compte</Button>
          </Link>
        }
      />
    </Flex>
    </ConfigProvider>
  );
}
