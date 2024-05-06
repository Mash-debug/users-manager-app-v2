import { Flex, Typography, Divider } from "antd";
import CustomForm from "../components/CustomForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useMediaQuery } from "usehooks-ts";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Paths } from "../constants/paths.js";
import { Strings } from "../constants/strings.js";

export default function AccountPage() {
  const navigate = useNavigate();
  const matchesMd = useMediaQuery("(max-width: 850px)");
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState({
    infos: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    infos: "",
    password: "",
  });
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  useEffect(() => {
    async function getAccount() {
      try {
        const res = await axios.get("http://localhost:5000/account", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.status === 200) {
          setUser({ ...res.data.user });
        }
      } catch {
        setUser(null);
        navigate(Paths.login);
      }
    }
    getAccount();
  }, [navigate, setUser]);

  const handleInfoChange = async (info) => {
    setErrorMessage({});
    setSuccessMessage({});
    setIsLoadingInfo(true);

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

    setIsLoadingInfo(false);
  };

  const handlePasswordChange = async (info) => {
    setErrorMessage({});
    setSuccessMessage({});
    setIsLoadingPassword(true);

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

    setIsLoadingPassword(false);
  };

  const handleDeleteAccount = async () => {
    setErrorMessage({});
    setSuccessMessage({});

    try {
      const res = await axios.delete("http://localhost:5000/users", {
        withCredentials: true,
        data: { email: user.email },
      });

      if (res.data.success) {
        setUser(null);
        navigate(res.data.redirect);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ padding: 16, width: "100%" }}>
      <Flex justify="center" vertical align="center">
        <Divider orientation="left">
          <Typography.Title
            level={2}
            style={{ fontWeight: Fonts.weights.bold, color: Colors.primary }}
          >
            {Strings.menu.items.account.label}
          </Typography.Title>
        </Divider>
      </Flex>
      <Flex justify="space-evenly" vertical={matchesMd}>
        {user && user.name && user.firstname ? (
          <>
            <Flex vertical>
              <CustomForm
                onFinish={handleInfoChange}
                fields={["name", "firstname"]}
                btnMessage={Strings.buttons.infoUpdate}
                initialValues={{ name: user.name, firstname: user.firstname }}
                isLoading={isLoadingInfo}
                centerBtn={true}
              />
              {successMessage.infos && (
                <span style={{ color: Colors.success, marginTop: 8 }}>
                  {successMessage.infos}
                </span>
              )}
              {errorMessage.infos && (
                <span style={{ color: Colors.error, marginTop: 8 }}>
                  {errorMessage.infos}
                </span>
              )}
            </Flex>
            <br />
            <br />
            <Flex vertical>
              <CustomForm
                onFinish={handlePasswordChange}
                fields={["password", "confirmPassword"]}
                btnMessage={Strings.buttons.passwordUpdate}
                isLoading={isLoadingPassword}
                centerBtn={true}
              />
              {successMessage.password && (
                <span style={{ color: Colors.success, marginTop: 8 }}>
                  {successMessage.password}
                </span>
              )}
              {errorMessage.password && (
                <span style={{ color: Colors.error, marginTop: 8 }}>
                  {errorMessage.password}
                </span>
              )}
            </Flex>
          </>
        ) : null}
      </Flex>
      <Flex justify="center" style={{ marginTop: 64 }}>
        <DeleteAccountModal onDeleteAccount={handleDeleteAccount} />
      </Flex>
    </div>
  );
}
