import { Drawer, Typography, Space } from "antd";
import Button from "./Button";
import RootMenu from "./RootMenu";
import { Strings } from "../constants/strings.js";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useButtonsNav } from "../hooks/useButtonsNav.jsx";

export const CustomDrawer = ({ title, onClose, open, styles, onLogout }) => {
  const { user } = useContext(UserContext);
  const buttonsNav = useButtonsNav(onClose);

  return (
    <Drawer
      title={
        <Typography.Title
          level={4}
          style={{
            fontWeight: Fonts.weights.bold,
            color: Colors.primary,
            margin: 0,
          }}
        >
          {title}
        </Typography.Title>
      }
      onClose={onClose}
      open={open}
      styles={{
        header: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ...styles
      }}
    >
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%", textAlign: "center" }}
      >
        {user && user.email ? (
          <>
            <span
              style={{ color: Colors.primary, fontWeight: Fonts.weights.bold }}
            >
              {user.email}
            </span>
            <RootMenu
              style={{ width: "100%", borderWidth: 0 }}
              closeDrawer={onClose}
            />
            <Button
              onClick={onLogout}
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
  );
};
