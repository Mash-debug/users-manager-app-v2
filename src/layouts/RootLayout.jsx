import { Flex, Menu } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  const navigate = useNavigate();
  const items = [
    {
      key: "/dashboard/account",
      label: "Compte",
      icon: <UserOutlined />,
    },
    {
      key: "/dashboard/users",
      label: "Utilisateurs",
      icon: <TeamOutlined />,
    },
  ];

  const handleClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Flex vertical style={{ flexFlow: "column", height: "100vh" }}>
      <NavBar />
      <Flex style={{ height: "100%" }}>
        <Flex className="side-menu" style={{ height: "100%" }}>
          <Menu
            onClick={handleClick}
            style={{ width: "25%", minWidth: 200, height: "100%" }}
            items={items}
            defaultOpenKeys={["/account"]}
            mode="inline"
          />
        </Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
}
