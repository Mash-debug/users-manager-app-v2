import axios from "axios";
import { Paths } from "../constants/paths.js";

export default async function getAccount(navigate, setUser, redirect = Paths.login) {
    try {
      const res = await axios.get("http://localhost:5000/account", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        setUser({ ...res.data.user });
      }
    } catch {
      setUser(null);
      navigate(redirect);
    }
}