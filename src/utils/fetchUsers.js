import axios from "axios";

export default async function fetchUsers(setUsers) {
  try {
    const res = await axios.get("http://localhost:5000/users", {
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
