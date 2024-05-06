import { useNavigate } from "react-router-dom";
import { UserOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";

// eslint-disable-next-line react/prop-types
export default function RootMenu({style, closeDrawer}) {
  const navigate = useNavigate();
  const items = [
    {
      key: Paths.account,
      label: Strings.menu.items.account.label,
      icon: <UserOutlined />,
    },
    {
      key: Paths.users,
      label: Strings.menu.items.users.label,
      icon: <TeamOutlined />,
    },
    {
      key: Paths.gantt,
      label: Strings.menu.items.gantt.label,
      icon: <BarChartOutlined />
    }
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
      defaultOpenKeys={[Paths.account]}
      mode="inline"
    />
  );
}
