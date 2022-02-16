import { DeleteModalContent } from "components/organisms/DeleteModalContent";
import { BusinessForm } from "components/organisms/BusinessForm";
import { apiInstance } from "services/axios";
import { types } from "store/types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MobileWrapper } from "components/organisms/MobileWrapper";
import { BusinessEntity } from "types/store";

const MySwal = withReactContent(Swal);

// This loading is because is annoying the loading spinner when i am just adding a value.
export const getBusinesses = (withLoading = true) => {
  return async (dispatch: any) => {
    try {
      withLoading && dispatch(updateLoadingBusinesses(true));
      const { businesses } = (await apiInstance("/business")).data;
      const businessFormatted = businesses.map((business: Record<string, string>) => {
        const id = business.businessId;
        delete business.businessId;
        return { id, ...business };
      });

      dispatch(loadBusinesses(businessFormatted));
      withLoading && dispatch(updateLoadingBusinesses(false));
    } catch (e) {
      dispatch(updateWithErrorBusinesses(true));
    }
  };
};

export const getBusiness = (businessId: string) => {
  return async (dispatch: any) => {
    try {
      const { businessId: id, name } = (await apiInstance(`/business/${businessId}`)).data;
      return { id, name };
    } catch (e) {
      console.log(e);
    }
  };
};

export const loadBusinesses = (businesses: Record<string, string>[]) => ({
  type: types.loadBusinesses,
  payload: businesses,
});

export const updateLoadingBusinesses = (state: boolean) => ({
  type: types.updateLoadingBusinesses,
  payload: state,
});

export const updateWithErrorBusinesses = (state: boolean) => ({
  type: types.updateWithErrorBusinesses,
  payload: state,
});

export const createbusiness = () => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const values = await new Promise((resolve, reject) => {
        MySwal.fire({
          html: (
            <MobileWrapper
              onButtonClick={() => {
                MySwal.close();
              }}
            >
              <BusinessForm
                title="Create Business"
                submitButtonText="Create"
                onSubmit={(values) => {
                  resolve(values);
                }}
                onCancel={() => {
                  MySwal.close();
                }}
              />
            </MobileWrapper>
          ),
          showConfirmButton: false,
          target: ".App",
          showClass: {
            popup: "animate__animated animate__fadeInRight animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutLeft animate__faster",
          },
        });
      });
      await apiInstance(`/business`, {
        method: "POST",
        data: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(getBusinesses(false));
      MySwal.close();
      Swal.fire({
        icon: "success",
        title: "Business Created",
        showConfirmButton: false,
        timer: 1500,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: true,
        timer: 1500,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    }
  };
};

export const startEditBusinessProcess = (business: BusinessEntity = {} as BusinessEntity) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusiness = getState().businesses.currentBusiness;
      const initialValues = currentBusiness || business;
      const businessId = currentBusiness.id || business.id;

      const editProcess = async (): Promise<BusinessEntity> =>
        await new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <MobileWrapper
                onButtonClick={() => {
                  MySwal.close();
                }}
              >
                <BusinessForm
                  onDelete={() => dispatch(startDeleteBusinessProcess(business))}
                  canDeleteInMobile
                  initialValues={initialValues}
                  title="Update Business"
                  submitButtonText="Update"
                  id={business.id}
                  currentName={business.name}
                  onSubmit={(values: BusinessEntity) => {
                    resolve(values);
                  }}
                  onCancel={() => {
                    MySwal.close();
                  }}
                />
              </MobileWrapper>
            ),
            showConfirmButton: false,
            target: ".App",
            showClass: {
              popup: "animate__animated animate__fadeInRight animate__faster",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutLeft animate__faster",
            },
          });
        });
      const updatedValues = await editProcess();
      await apiInstance(`/business/${businessId}`, {
        method: "PUT",
        data: JSON.stringify(updatedValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      /* dispatch(getBusinesses()); */
      dispatch(updateBusiness(updatedValues));
      if (currentBusiness.id) {
        dispatch(setCurrentBusiness(updatedValues));
      }

      MySwal.close();
      Swal.fire({
        icon: "success",
        title: "Business Updated",
        showConfirmButton: false,
        timer: 1500,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: false,
        timer: 1500,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    }
  };
};

const updateBusiness = (business: BusinessEntity) => ({
  type: types.updateBusiness,
  payload: business,
});

export const startDeleteBusinessProcess = (business: BusinessEntity) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusinessId = getState().businesses?.currentBusiness?.id;

      const businessId = currentBusinessId || business.id;
      const processDelete = async (): Promise<Record<string, boolean>> =>
        await new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <DeleteModalContent
                elementName={business.name}
                onConfirmClick={() => {
                  resolve({
                    isConfirmed: true,
                  });
                }}
                onCancel={() => {
                  MySwal.close();
                }}
              />
            ),
            showConfirmButton: false,
            target: ".App",
            showClass: {
              popup: "animate__animated animate__fadeInRight animate__faster",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutLeft animate__faster",
            },
            customClass: { htmlContainer: "--responsive" },
          });
        });
      const result = await processDelete();
      if (result.isConfirmed) {
        await apiInstance(`/business/${businessId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(removeBusiness(businessId));
        if (currentBusinessId) {
          dispatch(setCurrentBusiness({} as BusinessEntity));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

const removeBusiness = (businessId: string) => ({
  type: types.removeBusiness,
  payload: businessId,
});

export const updateCurrentBusiness = (businessId: string) => {
  return async (dispatch: any, getState: () => any) => {
    let business = getState().businesses.data.find((business: Record<string, string>) => business.id === businessId);

    if (!business) {
      business = await dispatch(getBusiness(businessId));
    }
    /* const persons = await dispatch(getPersons(businessId)); */

    dispatch(setCurrentBusiness(business));
  };
};

export const setCurrentBusiness = (business: BusinessEntity | null) => ({
  type: types.setCurrentBusiness,
  payload: business,
});
