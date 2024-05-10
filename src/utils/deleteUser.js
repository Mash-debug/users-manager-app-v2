import axios from "axios";
import { Paths } from "../constants/paths.js";

export default async function deleteUser(navigate, setUser, user) {
  try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}${Paths.api.users}`, {
      withCredentials: true,
      data: { email: user.email },
    });

    if (res.data.success) {
      setUser(null);
      navigate(res.data.redirect);
    }
  } catch (e) {
    console.log(e);
  }
}
