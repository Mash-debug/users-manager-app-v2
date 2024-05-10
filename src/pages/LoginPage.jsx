import { Typography, Flex } from "antd";
import CustomForm from "../components/CustomForm";
import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";
import getAccount from "../utils/getAccount.js";
import login from "../utils/login.js";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getAccount(navigate, setUser);
  }, [navigate, setUser]);

  const handleFinish = async (loginUser) => {
    setIsLoading(true);

    await login(navigate, setErrorMessage, loginUser);

    setIsLoading(false);
  };

  return (
    <>
      <div style={{ padding: 32 }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            color: Colors.primary,
            margin: 0,
            fontWeight: Fonts.weights.bold,
          }}
        >
          {Strings.loginPage.title}
        </Typography.Title>
        <Flex
          justify="center"
          align="center"
          vertical
          style={{ width: "fit-content", margin: "auto" }}
        >
          <CustomForm
            onFinish={handleFinish}
            fields={["email", "password"]}
            btnMessage={Strings.buttons.loginAlt}
            isLoading={isLoading}
          />
          <span style={{ color: Colors.primary, marginTop: 8 }}>
            {Strings.loginPage.noAccount}{" "}
            <Link
              to={Paths.register}
              className="hover-underline"
              style={{ fontWeight: Fonts.weights.bold, color: Colors.primary }}
            >
              {Strings.buttons.registerAlt}
            </Link>
          </span>
          <span style={{ color: Colors.error, marginTop: 8 }}>
            {errorMessage ? errorMessage : null}
          </span>
        </Flex>
      </div>
    </>
  );
}
