import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createbusiness, getBusinesses, startEditBusinessProcess, startDeleteBusinessProcess } from "store/actions/businessActions";

import { SimpleCrud } from "templates/SimpleCrud";
import { BusinessEntity, State } from "types/store";
import "./business.scoped.scss";

export const Businesses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const { data } = useSelector((state: State) => state.businesses);
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

  return (
    <SimpleCrud
      isLoading={isBusinessesLoading}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleEditBusiness={handleEdit}
      data={data}
      handleRefresh={handleRefresh}
    />
  );
};
