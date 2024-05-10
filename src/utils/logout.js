import axios from "axios";
import { Paths } from "../constants/paths";

export default async function logout(navigate, setUser) {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}${Paths.api.logout}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (res.status === 200 && res.data.success) {
      setUser(null);
      navigate(res.data.redirect);
    }
}