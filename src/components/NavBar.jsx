import { Flex, Typography, Space, Drawer } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useMediaQuery } from "usehooks-ts";

export default function NavBar() {
  const matches = useMediaQuery("(max-width: 850px");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:5000/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (res.status === 200 && res.data.success) {
      setUser(null);
      navigate(res.data.redirect);
    }
  };

  const handleOpenDrawer = () => {
    setIsOpenedDrawer(true);
  };

  const handleCloseDrawer = () => {
    setIsOpenedDrawer(false);
  };

  const buttonsNav = (
    <>
      <Link to="/login" onClick={handleCloseDrawer}>
        <Button
          size="large"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            width: "100%",
          }}
        >
          Connexion
        </Button>
      </Link>
      <Link to="/register" onClick={handleCloseDrawer}>
        <Button
          size="large"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            width: "100%",
          }}
        >
          Inscription
        </Button>
      </Link>
    </>
  );

  return (
    <>
      <Flex
        style={{
          backgroundColor: "#f857a6",
          padding: 16,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 3,
        }}
        justify="space-between"
      >
        <Flex
          justify={matches ? "space-around" : "flex-start"}
          align="center"
          style={{ width: matches ? "100%" : "50%" }}
        >
          <SolutionOutlined style={{ fontSize: 24, color: "white" }} />
          <Link to="/">
            <Typography.Title
              style={{
                margin: 0,
                marginLeft: "16px",
                color: "white",
                fontWeight: 1000,
              }}
              level={matches ? 3 : 1}
            >
              Users Manager App
            </Typography.Title>
          </Link>
          {matches && (
            <>
              <div
                className="hamburger"
                onClick={handleOpenDrawer}
                style={{ color: "white", fontSize: "1.6rem" }}
              >
                &#9776;
              </div>
              <Drawer
                title={
                  <Typography.Title
                    level={4}
                    style={{ fontWeight: 1000, color: "#f857a6", margin: 0 }}
                  >
                    Menu
                  </Typography.Title>
                }
                onClose={handleCloseDrawer}
                open={isOpenedDrawer}
                styles={{
                  header: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "cen",
                  },
                }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  {buttonsNav}
                </Space>
              </Drawer>
            </>
          )}
        </Flex>
        <Space size="middle">
          {user && user.email ? (
            <>
              <span style={{ color: "white", fontWeight: 1000 }}>
                {user.email}
              </span>
              <Button
                onClick={handleLogout}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                Se déconnecter
              </Button>
            </>
          ) : (
            <>{matches ? null : buttonsNav}</>
          )}
        </Space>
      </Flex>
    </>
  );
}
