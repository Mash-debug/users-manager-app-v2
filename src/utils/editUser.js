import axios from "axios";
import { Strings } from "../constants/strings.js";
import { Paths } from "../constants/paths.js";

export default async function editUser(info, user, setUser) {
    const payload = { email: user.email, ...info };

    try {
        const res = await axios.patch(`${import.meta.env.VITE_API_URL}${Paths.api.edit}`, payload, {
          withCredentials: true,
        });
  
        if (res.data.success) {
          setUser({ ...user, ...info });
          return {
            success: true,
            message: Strings.form.infoSuccessUpdate
          }
        }
    } catch (e) {
        return {
          success: false,
          message: e.response.data.errorMessage
        }
    }
}