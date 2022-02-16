import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createbusiness, getBusinesses, startEditBusinessProcess, startDeleteBusinessProcess } from "store/actions/businessActions";

import { SimpleCrud } from "templates/SimpleCrud";
import "./business.scoped.scss";

export const Businesses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const { data } = useSelector((state) => state.businesses);
  const isBusinessesLoading = useSelector((state) => state?.businesses?.isLoading);

  const handleEdit = (business, e) => {
    e.preventDefault();
    dispatch(startEditBusinessProcess(business));
  };
  const handleDelete = (business, e) => {
    e.preventDefault();
    dispatch(startDeleteBusinessProcess(business));
  };
  const handleCreate = () => dispatch(createbusiness());
  const handleRefresh = () => dispatch(getBusinesses());

  return (
    <SimpleCrud
      isLoading={isBusinessesLoading}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      data={data}
      handleRefresh={handleRefresh}
    />
  );
};
