import { Modal, Typography } from "antd";
import { useState } from "react";
import Button from "./Button";


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
        style={{ minWidth: 300, backgroundColor: "white", color: "#f857a6" }}
      >
        Supprimer le compte
      </Button>
      <Modal
        title={
          <Typography.Title level={4} style={{fontWeight: 1000, color: "#f857a6"}}>Supprimer le compte</Typography.Title>
        }
        open={isOpen}
        footer={[
            <Button key="cancel" onClick={handleCancel}>Annuler</Button>,
            <Button key="confirm" onClick={handleOk}>Supprimer le compte</Button>
        ]}
        onCancel={handleCancel}
      >
        <p style={{ fontWeight: 1000 }}>
          Etes-vous certain de supprimer votre compte ?
        </p>
      </Modal>
    </>
  );
}
