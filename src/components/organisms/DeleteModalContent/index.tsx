import { Button } from "@components/atoms/Button";
import "./delete-modal-content.scoped.scss";

interface Props {
  elementName: string;
  onCancel: () => void;
  onConfirmClick: () => void;
  cancelButtonText?: string;
  submitButtonText?: string;
  confirmText?: string;
}

export const DeleteModalContent = ({
  elementName,
  onCancel,
  onConfirmClick,
  cancelButtonText = "Cancel",
  submitButtonText = "Remove",
  confirmText = "Are you sure to delete",
}: Props) => {
  return (
    <div className="o-deleteModalContent">
      <p className="o-deleteModalContent__title">
        {confirmText} {elementName}?
      </p>
      <div className="o-deleteModalContent__buttons">
        <Button type="button" backgroundColor="#F8F8F8" textColor="Black" onClick={onCancel}>
          {cancelButtonText}
        </Button>
        <Button type="submit" backgroundColor="#FFD5D5" textColor="#9A0000" onClick={onConfirmClick}>
          {submitButtonText}
        </Button>
      </div>
    </div>
  );
};
