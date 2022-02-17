import { LoadingSpinner } from "@components/atoms/LoadingSpinner";
import { CrudItem } from "@components/molecules/CrudItem";
import React from "react";
import { Card } from "@components/organisms/Card";
import "./crud-list.scoped.scss";

interface Props {
  isLoading?: boolean;
  withError?: boolean;
  data?: any;
  handleCreate?: () => void;
  handleEdit: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  handleDelete: (item: any, e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  currentView?: number;
  withLink?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  withActions?: boolean;
  editIconName?: string;
}

export const CrudList = ({
  isLoading,
  withError,
  data,
  handleEdit,
  handleDelete,
  currentView = 0,
  withLink,
  canEdit = true,
  canDelete = true,
  withActions = true,
  editIconName,
}: Props) => {
  const UlClassName = currentView === 0 ? "o-crudList " : "o-crudList --gallery";

  return (
    <>
      {!isLoading && !withError && (
        <ul className={UlClassName}>
          {React.Children.toArray(
            data.map((item: Record<string, string>, index: number) => (
              <>
                {currentView === 0 ? (
                  <CrudItem
                    hoverable
                    id={item.id}
                    name={item.name}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    withLink={withLink}
                    item={item}
                    withActions={withActions}
                    canEdit={canEdit}
                    canDelete={canDelete}
                    editIconName={editIconName}
                  />
                ) : (
                  <Card
                    id={item.id}
                    name={item.name}
                    mutedText={item.role}
                    additional1={item.phone}
                    additional2={item.email}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    item={item}
                    canEdit={canEdit}
                    canDelete={canDelete}
                    editIconName={editIconName}
                  />
                )}
                {index + 1 < data.length && currentView === 0 ? <hr className="o-crudList__separator" /> : null}
              </>
            ))
          )}
        </ul>
      )}
      {isLoading && <LoadingSpinner />}
    </>
  );
};
