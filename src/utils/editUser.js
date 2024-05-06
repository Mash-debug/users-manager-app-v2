import axios from "axios";
import { Strings } from "../constants/strings.js";

export default async function editUser(info, user, setUser, setSuccessMessage, setErrorMessage) {

    const payload = { email: user.email, ...info };

    try {
        const res = await axios.patch("http://localhost:5000/edit", payload, {
          withCredentials: true,
        });
  
        if (res.data.success) {
          setUser({ ...user, ...info });
          setSuccessMessage({
            infos: Strings.form.infoSuccessUpdate,
          });
        }
    } catch (e) {
        setErrorMessage({ infos: e.response.data.errorMessage });
    }
}