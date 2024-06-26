import axios from "axios";
import { Paths } from "../constants/paths";

export default async function login(navigate, login) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}${Paths.api.login}`, login, {
      withCredentials: true,
    });

    if (res.data.success && res.data.isAuth) {
      navigate(res.data.redirect);
    }
  } catch (e) {
    return e.response.data.errorMessage;
  }
}
