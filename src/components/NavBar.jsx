import { Flex, Typography, Space } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { useMediaQuery } from "usehooks-ts";
import logout from "../utils/logout.js";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";
import { useButtonsNav } from "../hooks/useButtonsNav";
import { CustomDrawer } from "./CustomDrawer";

export default function NavBar() {
  const matches = useMediaQuery("(max-width: 850px)");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);

  const handleLogout = async () => {
    await logout(navigate, setUser);
  };
  const toggleDrawer = () => {
    setIsOpenedDrawer(prev => !prev);
  }
  const buttonsNav = useButtonsNav(toggleDrawer);

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
                onClick={toggleDrawer}
                style={{ color: Colors.white, fontSize: "1.6rem" }}
              >
                &#9776;
              </div>
              <CustomDrawer
                title={Strings.menu.title}
                onClose={toggleDrawer}
                onLogout={handleLogout}
                open={isOpenedDrawer}
              />
            </>
          )}
        </Flex>
        <Space size="middle">
          {user && user.email ? (
            <>
              {!matches && (
                <>
                  <span
                    style={{
                      color: Colors.white,
                      fontWeight: Fonts.weights.bold,
                    }}
                  >
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
