import axios from "axios";
import { Paths } from "../constants/paths";

export default async function manageTasks(action, item) {

    const payload = {action, payload: item}

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}${Paths.api.task}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
    
        if (res.status === 200) {
          console.log("Saved");
        }
      } catch (e) {
        console.log(e)
    }
}