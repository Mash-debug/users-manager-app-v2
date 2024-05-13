import axios from "axios";
import { Strings } from "../constants/strings.js";
import { Paths } from "../constants/paths.js";


export default async function editPassword(info, user) {
    const payload = { email: user.email, ...info };

    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}${Paths.api.edit}`, payload, {
        withCredentials: true,
      });

      if (res.data.success) {
        return {
          success: true,
          message: Strings.form.password.successUpdate
        }
      }
    } catch (e) {
      return {
        success: false,
        message: e.response.data.errorMessage,
      }
    }
}