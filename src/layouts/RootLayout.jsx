import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "usehooks-ts";
import RootMenu from "../components/RootMenu";

export default function RootLayout() {
  const matchesMd = useMediaQuery("(max-width: 850px)");

  return (
    <Flex vertical style={{ flexFlow: "column", height: "100vh" }}>
      <NavBar />
      <Flex style={{ height: "100%" }}>
        {matchesMd ? null : (
          <Flex className="side-menu" style={{ height: "100%" }}>
            <RootMenu />
          </Flex>
        )}
        <Outlet />
      </Flex>
    </Flex>
  );
}
