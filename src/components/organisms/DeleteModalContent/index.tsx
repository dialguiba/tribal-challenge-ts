import { Button } from "components/atoms/Button";
import React from "react";
import "./delete-modal-content.scoped.scss";

interface Props {
  elementName: string;
  onCancel: () => void;
  onConfirmClick: () => void;
}

export const DeleteModalContent = ({ elementName, onCancel, onConfirmClick }: Props) => {
  return (
    <div className="o-deleteModalContent">
      <p className="o-deleteModalContent__title">Are you sure to delete {elementName}?</p>
      <div className="o-deleteModalContent__buttons">
        <Button type="button" backgroundColor="#F8F8F8" textColor="Black" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" backgroundColor="#FFD5D5" textColor="#9A0000" onClick={onConfirmClick}>
          Remove
        </Button>
      </div>
    </div>
  );
};
