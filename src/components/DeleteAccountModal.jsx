import { Modal, Typography } from "antd";
import { useState } from "react";
import Button from "./Button";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";


// eslint-disable-next-line react/prop-types
export default function DeleteAccountModal({onDeleteAccount}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOk = () => {
    setIsOpen(false);
    onDeleteAccount();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        style={{ minWidth: 300, backgroundColor: "white", color: Colors.primary }}
      >
        Supprimer le compte
      </Button>
      <Modal
        title={
          <Typography.Title level={4} style={{fontWeight: Fonts.weights.bold, color: Colors.primary}}>Supprimer le compte</Typography.Title>
        }
        open={isOpen}
        footer={[
            <Button key="cancel" onClick={handleCancel}>Annuler</Button>,
            <Button key="confirm" onClick={handleOk}>Supprimer le compte</Button>
        ]}
        onCancel={handleCancel}
      >
        <p style={{ fontWeight: Fonts.weights.bold }}>
          Etes-vous certain de supprimer votre compte ?
        </p>
      </Modal>
    </>
  );
}
