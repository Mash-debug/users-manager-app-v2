import axios from "axios";
import { Strings } from "../constants/strings.js";
import { Paths } from "../constants/paths.js";

export default async function editPassword(info, user, setSuccessMessage, setErrorMessage) {
    const payload = { email: user.email, ...info };

    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}${Paths.api.edit}`, payload, {
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