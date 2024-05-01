import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import { JavaScriptOutlined } from "@ant-design/icons";


function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    <ConfigProvider theme={{
      components: {
        Button: {
          fontWeight: "bold",
          primaryColor: "black"
        }
      }
    }}>
      <Button style={{backgroundColor: "yellow"}} type="primary" shape="round" size="large" loading={isLoading} onClick={() => setIsLoading(prev => !prev)}>
        <JavaScriptOutlined style={{color: "black"}}  />
      </Button>
    </ConfigProvider>
    </>
  );
}

export default LandingPage;
