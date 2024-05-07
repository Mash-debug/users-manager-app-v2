import axios from "axios";

export default async function fetchTasks(setTasks) {
    try {
        const res = await axios.get("http://localhost:5000/task", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
    
        if (res.status === 200) {
          setTasks(res.data);
        }
      } catch {
        setTasks({});
    }
}