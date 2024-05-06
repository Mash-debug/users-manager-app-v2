import { Typography, Flex } from "antd";
import CustomForm from "../components/CustomForm";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccount() {
      try {
        const res = await axios.get("http://localhost:5000/account", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.status === 200) {
          setUser({ ...res.data.user });
          navigate("/dashboard/account");
        }
      } catch {
        setUser(null);
      }
    }
    getAccount();
  }, [navigate, setUser]);

  const handleFinish = async (user) => {
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/register", user, {
        withCredentials: true,
      });

      if (res.data.success && res.data.isAuth) {
        navigate(res.data.redirect);
      }
    } catch (e) {
      setErrorMessage(e.response.data.errorMessage);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div style={{ padding: 32 }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            color: "#f857a6",
            margin: 0,
            fontWeight: 1000,
          }}
        >
          Inscription
        </Typography.Title>
        <Flex
          justify="center"
          align="center"
          vertical
          style={{ width: "fit-content", margin: "auto" }}
        >
          <CustomForm onFinish={handleFinish} isLoading={isLoading} />
          <span style={{ color: "#f857a6", marginTop: 8 }}>
            Vous avez déjà un compte ?{" "}
            <Link
              to="/login"
              className="hover-underline"
              style={{ fontWeight: 1000, color: "inherit" }}
            >
              Se connecter
            </Link>
          </span>
          {errorMessage && (
            <span style={{ color: "#ff4d4f", marginTop: 8 }}>
              {errorMessage}
            </span>
          )}
        </Flex>
      </div>
    </>
  );
}
