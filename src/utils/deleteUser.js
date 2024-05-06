import axios from "axios";

export default async function deleteUser(navigate, setUser, user) {
  try {
    const res = await axios.delete("http://localhost:5000/users", {
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
