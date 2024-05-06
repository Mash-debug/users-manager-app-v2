import axios from "axios";

export default async function register(navigate, setErrorMessage, user) {
  try {
    const res = await axios.post("http://localhost:5000/register", user, {
      withCredentials: true,
    });

    if (res.data.success && res.data.isAuth) {
      navigate(res.data.redirect);
    }
  } catch (e) {
    setErrorMessage(e.response.data.errorMessage);
  }
}
