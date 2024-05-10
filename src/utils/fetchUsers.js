import axios from "axios";
import { Paths } from "../constants/paths";

export default async function fetchUsers(setUsers) {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}${Paths.api.users}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (res.status === 200) {
      setUsers(res.data.users);
    }
  } catch {
    setUsers([]);
  }
}
