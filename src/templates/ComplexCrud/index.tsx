import { Button } from "@components/atoms/Button";
import { CrudList } from "@components/organisms/CrudList";
import { HeaderCrud } from "@components/organisms/HeaderCrud";
import { useMobile } from "hooks/useMobile";
import { ReactSVG } from "react-svg";
import { Crud } from "templates/Crud";
import "./complexCrud.scoped.scss";
import { BusinessEntity, PersonEntity } from "@typing/store";
import { useState, useEffect } from "react";

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
  staticData: any;
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
  staticData,
}: Props) => {
  const [isMobile] = useMobile();

  const changeView = () => {
    currentView === 0 ? handleUpdateView(1) : handleUpdateView(0);
  };

  const [animate, setAnimate] = useState(false);

  const onClickRefresh = () => {
    setAnimate(true);
    handleRefresh();
  };

  useEffect(() => {
    if (!isLoading) setAnimate(false);
  }, [isLoading]);

  return (
    <div className={isMobile ? "t-complexCrud --mobile" : "t-complexCrud"}>
      <Crud>
        <HeaderCrud
          responsive
          title={title}
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
              {isMobile && <ReactSVG src="/icons/pen2.svg" onClick={() => handleEditBusiness()} />}
              {!isMobile && (
                <ReactSVG src={`${currentView === 0 ? "/icons/squares.svg" : "/icons/list.svg"}`} onClick={changeView} style={{ cursor: "pointer" }} />
              )}
              {!isMobile && <Button onClick={() => handleCreate()}>{staticData.persons.actions.create}</Button>}
            </>
          }
        >
          {isMobile && (
            <HeaderCrud
              title={staticData.persons.title}
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
            <Button onClick={handleCreate}>{staticData.persons.actions.create}</Button>
          </div>
        )}
      </Crud>
    </div>
  );
};
