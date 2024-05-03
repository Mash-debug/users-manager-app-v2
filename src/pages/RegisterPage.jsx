import { Typography, Flex } from "antd";
import CustomForm from "../components/CustomForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
  }


  return (
    <>
      <div style={{ padding: 32 }}>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", color: "#f857a6", margin: 0 }}
        >
          Inscription
        </Typography.Title>
        <Flex justify="center">
          <CustomForm onFinish={handleFinish} isLoading={isLoading} />
          {errorMessage && <span style={{color: "#ff4d4f", marginTop: 8}}>{errorMessage}</span>}
        </Flex>
      </div>
    </>
  );
}
