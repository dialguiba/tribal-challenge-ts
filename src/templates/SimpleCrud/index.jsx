import { HeaderCrud } from "components/organisms/HeaderCrud";
import "./simple-crud.scoped.scss";
import React from "react";
import { CrudList } from "components/organisms/CrudList";
import { Crud } from "templates/Crud";
import { Button } from "components/atoms/Button";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";

export const SimpleCrud = ({ handleCreate, handleDelete, handleEdit, data, isLoading, handleRefresh }) => {
  const [isMobile] = useMobile();
  return (
    <div className={isMobile ? "t-simpleCrud --mobile" : "t-simpleCrud"}>
      <Crud>
        <HeaderCrud
          responsive
          title="Business"
          canCreate={!isMobile}
          handleCreate={handleCreate}
          actions={
            <>
              {!isMobile && <ReactSVG src="/icons/refresh.svg" style={{ cursor: "pointer" }} onClick={handleRefresh} />}
              {!isMobile && <Button onClick={() => handleCreate()}>Create Business</Button>}
            </>
          }
        />

        <CrudList data={data} handleEdit={handleEdit} handleDelete={handleDelete} withLink isLoading={isLoading} withActions={!isMobile} />

        {isMobile && (
          <div className="t-simpleCrud__button">
            <Button onClick={handleCreate}>Create Business</Button>
          </div>
        )}
      </Crud>
    </div>
  );
};
