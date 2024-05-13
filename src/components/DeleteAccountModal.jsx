import { Modal, Typography } from "antd";
import { useState } from "react";
import Button from "./Button";
import { Colors } from "../constants/colors.js";
import { Fonts } from "../constants/fonts.js";
import { Strings } from "../constants/strings.js";


// eslint-disable-next-line react/prop-types
export default function DeleteAccountModal({onDeleteAccount}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  }

  const handleDispatch = (action) => {
    switch(action) {
      case 'delete':
        toggle();
        onDeleteAccount();
      break;
      default:
        toggle();
      break;
    }
  }

  return (
    <>
      <Button
        onClick={() => handleDispatch()}
        style={{ minWidth: 300, backgroundColor: Colors.white, color: Colors.primary }}
      >
        {Strings.buttons.deleteAccount}
      </Button>
      <Modal
        title={
          <Typography.Title level={4} style={{fontWeight: Fonts.weights.bold, color: Colors.primary}}>{Strings.buttons.deleteAccount}</Typography.Title>
        }
        open={isOpen}
        footer={[
            <Button key="cancel" onClick={() => handleDispatch()}>{Strings.buttons.cancel}</Button>,
            <Button key="confirm" onClick={() => handleDispatch('delete')}>{Strings.buttons.deleteAccount}</Button>
        ]}
        onCancel={() => handleDispatch()}
      >
        <p style={{ fontWeight: Fonts.weights.bold }}>
          {Strings.buttons.deleteAccountConfirm}
        </p>
      </Modal>
    </>
  );
}
