import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";
import { UserOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";

export const useMenuItems = () => {
  return [
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
      icon: <BarChartOutlined />,
    },
  ];
};
