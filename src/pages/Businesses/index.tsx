import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createbusiness, getBusinesses, startEditBusinessProcess, startDeleteBusinessProcess } from "@store/actions/businessActions";

import { SimpleCrud } from "templates/SimpleCrud";
import { BusinessEntity, State } from "types/store";
import "./business.scoped.scss";
import { staticData } from "./data";
import { useTranslation } from "react-i18next";

const Businesses = () => {
  const { t } = useTranslation(["translation"]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const businesses = useSelector((state: State) => state.businesses.data);
  const isBusinessesLoading = useSelector((state: State) => state?.businesses?.isLoading);

  const handleEdit = (business: BusinessEntity, e: Event) => {
    e.preventDefault();
    return dispatch(startEditBusinessProcess(business));
  };
  const handleDelete = (business: BusinessEntity, e: Event) => {
    e.preventDefault();
    return dispatch(startDeleteBusinessProcess(business));
  };
  const handleCreate = () => dispatch(createbusiness());
  const handleRefresh = () => dispatch(getBusinesses());

  const simpleCrudProps = {
    isLoading: isBusinessesLoading,
    handleCreate,
    handleDelete,
    handleEditBusiness: handleEdit,
    businesses,
    handleRefresh,
    staticData: staticData(t),
  };

  return <SimpleCrud {...simpleCrudProps} />;
};

export default Businesses;
