import axios from "axios";
import { Paths } from "../constants/paths.js";

export default async function fetchTasks(setTasks) {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}${Paths.api.task}`, {
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