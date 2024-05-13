import { Flex, Typography, Divider, Form } from "antd";
import CustomForm from "../components/CustomForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useMediaQuery } from "usehooks-ts";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Strings } from "../constants/strings.js";
import getAccount from "../utils/getAccount.js";
import editUser from "../utils/editUser.js";
import editPassword from "../utils/editPassword.js";
import deleteUser from "../utils/deleteUser.js";
import { useCustomFormFields } from "../hooks/useCustomFormFields.js";

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
  const { name, firstname, password, passwordConfirm } = useCustomFormFields();

  useEffect(() => {
    getAccount(navigate, setUser);
  }, [navigate, setUser]);

  const handleInfoChange = async (info) => {
    setErrorMessage({});
    setSuccessMessage({});
    setIsLoadingInfo(true);

    await editUser(info, user, setUser, setSuccessMessage, setErrorMessage);

    setIsLoadingInfo(false);
  };

  const handlePasswordChange = async (info) => {
    setErrorMessage({});
    setSuccessMessage({});
    setIsLoadingPassword(true);

    await editPassword(info, user, setSuccessMessage, setErrorMessage);
    setIsLoadingPassword(false);
  };

  const handleDeleteAccount = async () => {
    setErrorMessage({});
    setSuccessMessage({});

    await deleteUser(navigate, setUser, user);
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
                fields={[name, firstname]}
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
                fields={[
                  password,
                  passwordConfirm
                ]}
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
