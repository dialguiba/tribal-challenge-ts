import { MobileWrapper } from "components/organisms/MobileWrapper";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentBusiness, startEditBusinessProcess, updateCurrentBusiness } from "store/actions/businessActions";
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

export const Business = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrentBusiness(id));
    dispatch(updateCurrentPersons(id));
    return () => {
      dispatch(setCurrentBusiness(null));
      dispatch(setCurrentPersons([]));
    };
  }, [id, dispatch]);

  const name = useSelector((state) => state?.businesses?.currentBusiness?.name);

  const persons = useSelector((state) => state?.persons?.currentPersons);
  const currentView = useSelector((state) => state?.ui?.currentView);
  const isBusinessLoading = useSelector((state) => state?.businesses?.isLoading);
  const isPersonsLoading = useSelector((state) => state?.persons?.isLoading);
  const currentBusinesId = useSelector((state) => state?.businesses?.currentBusiness?.id);

  const handleUpdateView = (id) => dispatch(updateCurrentView(id));
  const handleCreate = () => dispatch(startCreatePersonProcess());
  const handleDelete = (person) => dispatch(startDeletePersonProcess(person));
  const handleEditPerson = (person) => dispatch(startEditPersonProcess(person));
  const handleEditBusiness = (person) => dispatch(startEditBusinessProcess(person));
  const handleRefresh = () => dispatch(updateCurrentPersons(currentBusinesId));
  const navigate = useNavigate();

  return (
    <MobileWrapper onButtonClick={() => navigate("/overview")}>
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
      />
    </MobileWrapper>
  );
};
