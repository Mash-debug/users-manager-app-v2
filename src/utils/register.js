import axios from "axios";
import { Paths } from "../constants/paths";

export default async function register(navigate, setErrorMessage, user) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}${Paths.api.register}`, user, {
      withCredentials: true,
    });

    if (res.data.success && res.data.isAuth) {
      navigate(res.data.redirect);
    }
  } catch (e) {
    setErrorMessage(e.response.data.errorMessage);
  }
}
