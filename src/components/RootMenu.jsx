import { useNavigate } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import { Menu } from "antd";

// eslint-disable-next-line react/prop-types
export default function RootMenu({style, closeDrawer}) {
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
    if(closeDrawer) closeDrawer();
    navigate(key);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: "25%", minWidth: 200, height: "100%", ...style }}
      items={items}
      defaultOpenKeys={["/account"]}
      mode="inline"
    />
  );
}
