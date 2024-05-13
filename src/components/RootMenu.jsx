import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { Paths } from "../constants/paths.js";
import { useMenuItems } from "../hooks/useMenuItems";

// eslint-disable-next-line react/prop-types
export default function RootMenu({style, closeDrawer}) {
  const navigate = useNavigate();
  const items = useMenuItems();

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
