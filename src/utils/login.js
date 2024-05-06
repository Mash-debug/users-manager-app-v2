import axios from "axios";

export default async function login(navigate, setErrorMessage, login) {
  try {
    const res = await axios.post("http://localhost:5000/login", login, {
      withCredentials: true,
    });

    if (res.data.success && res.data.isAuth) {
      navigate(res.data.redirect);
    }
  } catch (e) {
    setErrorMessage(e.response.data.errorMessage);
  }
}
