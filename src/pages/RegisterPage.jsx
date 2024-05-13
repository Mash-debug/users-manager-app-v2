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
import register from "../utils/register.js";
import { useCustomFormFields } from "../hooks/useCustomFormFields.js";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { name, firstname, email, password, passwordConfirm } =
    useCustomFormFields();

  useEffect(() => {
    getAccount(navigate, setUser, Paths.register);
  }, [navigate, setUser]);

  const handleFinish = async (user) => {
    setIsLoading(true);
    await register(navigate, setErrorMessage, user);
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
          {Strings.registerPage.title}
        </Typography.Title>
        <Flex
          justify="center"
          align="center"
          vertical
          style={{ width: "fit-content", margin: "auto" }}
        >
          <CustomForm
            fields={[name, firstname, email, password, passwordConfirm]}
            onFinish={handleFinish}
            isLoading={isLoading}
          />
          <span style={{ color: Colors.primary, marginTop: 8 }}>
            {Strings.registerPage.hasAccount}{" "}
            <Link
              to={Paths.login}
              className="hover-underline"
              style={{ fontWeight: Fonts.weights.bold, color: Colors.primary }}
            >
              {Strings.buttons.loginAlt}
            </Link>
          </span>
          {errorMessage && (
            <span style={{ color: Colors.error, marginTop: 8 }}>
              {errorMessage}
            </span>
          )}
        </Flex>
      </div>
    </>
  );
}
