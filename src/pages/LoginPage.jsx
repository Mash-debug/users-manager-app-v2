import { Typography, Flex } from "antd";
import CustomForm from "../components/CustomForm";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

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

  const handleFinish = async (login) => {
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/login", login, {
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
          style={{ textAlign: "center", color: "#f857a6", margin: 0 }}
        >
          Connexion
        </Typography.Title>
        <Flex justify="center" align="center" vertical style={{width: "fit-content", margin: "auto"}}>
          <CustomForm
            onFinish={handleFinish}
            fields={["email", "password"]}
            btnMessage="Se connecter"
            isLoading={isLoading}
          />
          <span style={{color: "#FF4D4F", marginTop: 8}}>{errorMessage ? errorMessage : null}</span>
        </Flex>
      </div>
    </>
  );
}
