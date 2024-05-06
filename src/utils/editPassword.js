import axios from "axios";
import { Strings } from "../constants/strings.js";

export default async function editPassword(info, user, setSuccessMessage, setErrorMessage) {
    const payload = { email: user.email, ...info };

    try {
      const res = await axios.patch("http://localhost:5000/edit", payload, {
        withCredentials: true,
      });

      if (res.data.success) {
        setSuccessMessage({
          password: Strings.form.password.successUpdate,
        });
      }
    } catch (e) {
      setErrorMessage({
        password: e.response.data.errorMessage,
      });
    }
}