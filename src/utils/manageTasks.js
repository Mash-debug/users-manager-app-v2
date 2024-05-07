import axios from "axios";

export default async function manageTasks(action, item) {

    const payload = {action, payload: item}

    try {
        const res = await axios.post("http://localhost:5000/task", payload, {
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