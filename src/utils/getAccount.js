import axios from "axios";
import { Paths } from "../constants/paths.js";

export default async function getAccount(navigate, setUser, redirect = Paths.login) {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}${Paths.api.account}`, {
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