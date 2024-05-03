import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function BaseLayout() {
    return <>
        <NavBar />
        <Outlet />
    </>
}