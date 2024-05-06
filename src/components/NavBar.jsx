import { Flex, Typography, Space, Drawer } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useMediaQuery } from "usehooks-ts";
import RootMenu from "./RootMenu";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";

export default function NavBar() {
  const matches = useMediaQuery("(max-width: 850px)");
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
      <Link to={Paths.login} onClick={handleCloseDrawer}>
        <Button
          size="large"
          style={{
            boxShadow: Colors.shadow,
            width: "100%",
          }}
        >
          {Strings.buttons.login}
        </Button>
      </Link>
      <Link to={Paths.register} onClick={handleCloseDrawer}>
        <Button
          size="large"
          style={{
            boxShadow: Colors.shadow,
            width: "100%",
          }}
        >
          {Strings.buttons.register}
        </Button>
      </Link>
    </>
  );

  return (
    <>
      <Flex
        style={{
          backgroundColor: Colors.primary,
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
          <SolutionOutlined style={{ fontSize: 24, color: Colors.white }} />
          <Link to={Paths.root}>
            <Typography.Title
              style={{
                margin: 0,
                marginLeft: "16px",
                color: Colors.white,
                fontWeight: Fonts.weights.bold,
              }}
              level={matches ? 3 : 1}
            >
              {Strings.appName}
            </Typography.Title>
          </Link>
          {matches && (
            <>
              <div
                className="hamburger"
                onClick={handleOpenDrawer}
                style={{ color: Colors.white, fontSize: "1.6rem" }}
              >
                &#9776;
              </div>
              <Drawer
                title={
                  <Typography.Title
                    level={4}
                    style={{ fontWeight: Fonts.weights.bold, color: Colors.primary, margin: 0 }}
                  >
                    {Strings.menuTitle}
                  </Typography.Title>
                }
                onClose={handleCloseDrawer}
                open={isOpenedDrawer}
                styles={{
                  header: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  {user && user.email ? (
                    <>
                      <span style={{ color: Colors.primary, fontWeight: Fonts.weights.bold }}>
                        {user.email}
                      </span>
                      <RootMenu
                        style={{ width: "100%", borderWidth: 0 }}
                        closeDrawer={handleCloseDrawer}
                      />
                      <Button
                        onClick={handleLogout}
                        style={{
                          boxShadow: Colors.shadow,
                          width: "100%",
                        }}
                      >
                        {Strings.buttons.logout}
                      </Button>
                    </>
                  ) : (
                    buttonsNav
                  )}
                </Space>
              </Drawer>
            </>
          )}
        </Flex>
        <Space size="middle">
          {user && user.email ? (
            <>
              {!matches && (
                <>
                  <span style={{ color: Colors.white, fontWeight: Fonts.weights.bold }}>
                    {user.email}
                  </span>
                  <Button
                    onClick={handleLogout}
                    style={{
                      boxShadow: Colors.shadow,
                    }}
                  >
                    {Strings.buttons.logout}
                  </Button>
                </>
              )}
            </>
          ) : (
            <>{matches ? null : buttonsNav}</>
          )}
        </Space>
      </Flex>
    </>
  );
}
