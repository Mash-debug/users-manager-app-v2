import NavBar from "../components/NavBar";
import { Typography, Flex } from "antd";
import CustomForm from "../components/CustomForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccount() {
      const res = await axios.get("http://localhost:5000/account", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true        
      });

      if(res.status === 401) {
        navigate(res.data.redirect);
      } else if (res.status === 200) {
        navigate("/dashboard/account");
      }
    }

    getAccount();
  }, [navigate]);

  const handleFinish = async (login) => {
    setIsLoading(true);
    const res = await axios.post("http://localhost:5000/login", login, {
      withCredentials: true
    });
  
    setIsLoading(false);

    if (res.data.success && res.data.isAuth) {
      navigate(res.data.redirect);
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ padding: 32 }}>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", color: "#f857a6", margin: 0 }}
        >
          Connexion
        </Typography.Title>
        <Flex justify="center">
          <CustomForm
            onFinish={handleFinish}
            fields={["email", "password"]}
            btnMessage="Se connecter"
            isLoading={isLoading}
          />
        </Flex>
      </div>
    </>
  );
}
