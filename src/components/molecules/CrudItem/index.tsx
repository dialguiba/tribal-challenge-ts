import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./crud-item.scoped.scss";
import { ConditionalWrapper } from "../../atoms/ConditionalWrapper/index";

interface Props {
  name?: string;
  handleEdit: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  id?: string;
  handleDelete: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  mutedText?: string;
  withLink?: boolean;
  item?: any;
  hoverable?: boolean;
  withActions?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  editIconName?: string;
}

export const CrudItem = ({
  name,
  handleEdit,
  id,
  handleDelete,
  mutedText,
  withLink = false,
  item,
  hoverable,
  withActions,
  canEdit = true,
  canDelete = true,
  editIconName = "pen",
}: Props) => {
  const liClasses = () => {
    if (hoverable) {
      return "m-crudItem --hoverable";
    } else {
      return "m-crudItem";
    }
  };
  return (
    <>
      <ConditionalWrapper condition={withLink} wrapper={(children) => <Link to={`/overview/${id}`}>{children}</Link>}>
        <li className={liClasses()}>
          <div className="m-crudItem__textsContainer">
            <div className="m-crudItem__textsContainer__text">{name}</div>
            {mutedText && (
              <div
                className="
            m-crudItem__textsContainer__text --muted"
              >
                {mutedText}
              </div>
            )}
          </div>
          {withActions && (
            <div className="m-crudItem__buttonsContainer">
              {canEdit && (
                <button onClick={(e) => handleEdit(item, e)} className="m-crudItem__buttonsContainer__button ">
                  <ReactSVG src={`/icons/${editIconName}.svg`} className="m-crudItem__buttonsContainer__button__icon --edit" />
                </button>
              )}
              {canDelete && (
                <button onClick={(e) => handleDelete(item, e)} className="m-crudItem__buttonsContainer__button">
                  <ReactSVG src={`/icons/trash.svg`} className="m-crudItem__buttonsContainer__button__icon --delete" />
                </button>
              )}
            </div>
          )}
        </li>
      </ConditionalWrapper>
    </>
  );
};
