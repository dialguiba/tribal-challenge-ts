import { CrudItem } from "components/molecules/CrudItem";
import React from "react";
import "./card.scoped.scss";

interface Props {
  name: string;
  mutedText: string;
  additional1: any;
  additional2: any;
  id: string;
  handleEdit: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  handleDelete: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  item: any;
  canEdit?: boolean;
  canDelete?: boolean;
  editIconName?: string;
}

export const Card = ({
  name,
  mutedText,
  additional1,
  additional2,
  handleDelete,
  id,
  handleEdit,
  item,
  canEdit = true,
  canDelete = true,
  editIconName,
}: Props) => {
  return (
    <article className="o-card">
      <section className="o-card__header">
        <CrudItem
          withActions
          item={item}
          name={name}
          mutedText={mutedText}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          id={id}
          canEdit={canEdit}
          canDelete={canDelete}
          editIconName={editIconName}
        />
      </section>
      <section className="o-card__body">
        <div className="o-card__body__text1">{additional1}</div>
        <div className="o-card__body__text2">{additional2}</div>
      </section>
    </article>
  );
};
