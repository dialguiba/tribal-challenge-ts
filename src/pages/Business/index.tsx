import { MobileWrapper } from "@components/organisms/MobileWrapper";
import { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentBusiness, startEditBusinessProcess, updateCurrentBusiness } from "@store/actions/businessActions";
import {
  startCreatePersonProcess,
  startEditPersonProcess,
  setCurrentPersons,
  updateCurrentPersons,
  startDeletePersonProcess,
} from "store/actions/personActions";
import { updateCurrentView } from "store/actions/uiActions";
import { ComplexCrud } from "templates/ComplexCrud";
import { useNavigate } from "react-router-dom";
import { BusinessEntity, PersonEntity, State } from "types/store";
import { staticData } from "./data";
import { useTranslation } from "react-i18next";

const Business = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation(["translation"]);
  useEffect(() => {
    if (id) {
      dispatch(updateCurrentBusiness(id));
      dispatch(updateCurrentPersons(id));
    }
    return () => {
      dispatch(setCurrentBusiness(null));
      dispatch(setCurrentPersons([] as unknown as PersonEntity));
    };
  }, [id, dispatch]);

  const currentBusiness = useSelector((state: State) => state?.businesses?.currentBusiness);
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      if (Object.entries(currentBusiness).length === 0) {
        /* console.log("Ya no hay nada. redirigr"); */
        navigate("/");
      }
    }
  }, [currentBusiness, navigate]);

  const name = useSelector((state: State) => state?.businesses?.currentBusiness?.name);
  const persons = useSelector((state: State) => state?.persons?.currentPersons);
  const currentView = useSelector((state: State) => state?.ui?.currentView);
  const isBusinessLoading = useSelector((state: State) => state?.businesses?.isLoading);
  const isPersonsLoading = useSelector((state: State) => state?.persons?.isLoading);
  const currentBusinesId = useSelector((state: State) => state?.businesses?.currentBusiness?.id);
  const handleUpdateView = (view: number) => dispatch(updateCurrentView(view));
  const handleCreate = () => dispatch(startCreatePersonProcess());
  const handleDelete = (person: PersonEntity) => dispatch(startDeletePersonProcess(person));
  const handleEditPerson = (person: PersonEntity) => dispatch(startEditPersonProcess(person));
  const handleEditBusiness = (business?: BusinessEntity) => dispatch(startEditBusinessProcess(business));
  const handleRefresh = () => dispatch(updateCurrentPersons(currentBusinesId));

  return (
    <MobileWrapper onButtonClick={() => navigate("/overview")} goBackText={staticData(t).business.actions.back}>
      <ComplexCrud
        title={name}
        persons={persons}
        handleUpdateView={handleUpdateView}
        currentView={currentView}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
        handleEditBusiness={handleEditBusiness}
        isLoading={isBusinessLoading || isPersonsLoading}
        handleEditPerson={handleEditPerson}
        handleRefresh={handleRefresh}
        staticData={staticData(t)}
      />
    </MobileWrapper>
  );
};

export default Business;
