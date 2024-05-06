import axios from "axios";

export default async function logout(navigate, setUser) {
    const res = await axios.get("http://localhost:5000/logout", {
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