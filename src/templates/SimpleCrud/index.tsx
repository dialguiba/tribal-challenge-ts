import { HeaderCrud } from "components/organisms/HeaderCrud";
import "./simple-crud.scoped.scss";
import { CrudList } from "components/organisms/CrudList";
import { Crud } from "templates/Crud";
import { Button } from "components/atoms/Button";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";
import { BusinessEntity } from "types/store";

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
  return (
    <div className={isMobile ? "t-simpleCrud --mobile" : "t-simpleCrud"}>
      <Crud>
        <HeaderCrud
          responsive
          title={staticData.businesses.title}
          actions={
            <>
              {!isMobile && <ReactSVG src="/icons/refresh.svg" style={{ cursor: "pointer" }} onClick={handleRefresh} />}
              {!isMobile && <Button onClick={() => handleCreate()}>{staticData.businesses.actions.create}</Button>}
            </>
          }
        />

        <CrudList data={businesses} handleEdit={handleEditBusiness} handleDelete={handleDelete} withLink isLoading={isLoading} withActions={!isMobile} />

        {isMobile && (
          <div className="t-simpleCrud__button">
            <Button onClick={handleCreate}>{staticData.businesses.actions.create}</Button>
          </div>
        )}
      </Crud>
    </div>
  );
};
