import { HeaderCrud } from "components/organisms/HeaderCrud";
import "./simple-crud.scoped.scss";
import { CrudList } from "components/organisms/CrudList";
import { Crud } from "templates/Crud";
import { Button } from "components/atoms/Button";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";
import { BusinessEntity } from "types/store";
import { useEffect, useState } from "react";

interface Props {
  handleCreate: () => void;
  handleDelete: any;
  handleEditBusiness: any;
  businesses: BusinessEntity[];
  isLoading: boolean;
  handleRefresh: () => void;
  staticData: any;
}

export const SimpleCrud = ({ handleCreate, handleDelete, handleEditBusiness, businesses, isLoading, handleRefresh, staticData }: Props) => {
  const [isMobile] = useMobile();
  const [animate, setAnimate] = useState(false);
  const onClickRefresh = () => {
    setAnimate(true);
    handleRefresh();
  };
  useEffect(() => {
    if (!isLoading) setAnimate(false);
  }, [isLoading]);

  const crudListProps = {
    data: businesses,
    handleEdit: handleEditBusiness,
    handleDelete,
    withLink: true,
    isLoading,
    withActions: !isMobile,
  };

  return (
    <section className={isMobile ? "t-simpleCrud --mobile" : "t-simpleCrud"}>
      <Crud>
        <HeaderCrud
          responsive
          title={staticData.businesses.title}
          actions={
            <>
              {!isMobile && (
                <ReactSVG
                  src="/icons/refresh.svg"
                  style={{ cursor: "pointer" }}
                  onClick={onClickRefresh}
                  className={animate ? "animate__animated animate__rotateIn" : ""}
                />
              )}
              {!isMobile && <Button onClick={() => handleCreate()}>{staticData.businesses.actions.create}</Button>}
            </>
          }
        />

        <CrudList {...crudListProps} />

        {isMobile && (
          <div className="t-simpleCrud__button">
            <Button onClick={handleCreate}>{staticData.businesses.actions.create}</Button>
          </div>
        )}
      </Crud>
    </section>
  );
};
