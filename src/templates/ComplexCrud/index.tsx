import { Button } from "components/atoms/Button";
import { CrudList } from "components/organisms/CrudList";
import { HeaderCrud } from "components/organisms/HeaderCrud";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";
import { Crud } from "templates/Crud";
import "./complexCrud.scoped.scss";
import { BusinessEntity, PersonEntity } from "../../types/store";

interface Props {
  title: string;
  persons: PersonEntity[];
  handleUpdateView: (view: number) => void;
  currentView: number;
  handleDelete: (person: PersonEntity) => (dispatch: any, getState: () => any) => Promise<void>;
  handleEditBusiness: (business?: BusinessEntity) => (dispatch: any, getState: () => any) => Promise<void>;
  handleEditPerson: (person: PersonEntity) => (dispatch: any, getState: () => any) => Promise<void>;
  handleCreate: () => void;
  isLoading: boolean;
  handleRefresh: () => void;
}

export const ComplexCrud = ({
  title,
  persons,
  handleUpdateView,
  currentView,
  handleDelete,
  handleEditBusiness,
  handleEditPerson,
  handleCreate,
  isLoading,
  handleRefresh,
}: Props) => {
  const [isMobile] = useMobile();

  const changeView = () => {
    currentView === 0 ? handleUpdateView(1) : handleUpdateView(0);
  };

  return (
    <div className={isMobile ? "t-complexCrud --mobile" : "t-complexCrud"}>
      <Crud>
        <HeaderCrud
          responsive
          title={title}
          actions={
            <>
              {!isMobile && <ReactSVG src="/icons/refresh.svg" style={{ cursor: "pointer" }} onClick={handleRefresh} />}
              {isMobile && <ReactSVG src="/icons/pen2.svg" onClick={() => handleEditBusiness()} />}
              {!isMobile && (
                <ReactSVG src={`${currentView === 0 ? "/icons/squares.svg" : "/icons/list.svg"}`} onClick={changeView} style={{ cursor: "pointer" }} />
              )}
              {!isMobile && <Button onClick={() => handleCreate()}>Create person</Button>}
            </>
          }
        >
          {isMobile && (
            <HeaderCrud
              title="Persons"
              actions={
                <>
                  <ReactSVG src={`${currentView === 0 ? "/icons/squares.svg" : "/icons/list.svg"}`} onClick={changeView} />
                </>
              }
            />
          )}
        </HeaderCrud>
        <CrudList
          canDelete={!isMobile}
          data={persons}
          currentView={currentView}
          handleDelete={handleDelete}
          handleEdit={handleEditPerson}
          isLoading={isLoading}
          editIconName={isMobile ? "pen2" : "pen"}
        />
        {isMobile && (
          <div className="t-complexCrud__button">
            <Button onClick={handleCreate}>Add Person</Button>
          </div>
        )}
      </Crud>
    </div>
  );
};
