import { DeleteModalContent } from "components/organisms/DeleteModalContent";
import { PersonForm } from "components/organisms/PersonForm";
import { apiInstance } from "services/axios";
import { types } from "store/types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getBusiness } from "./businessActions";
import { MobileWrapper } from "components/organisms/MobileWrapper";

const MySwal = withReactContent(Swal);

export const updateCurrentPersons = (businessId: string) => {
  return async (dispatch: any, getState: () => any) => {
    dispatch(updateLoadingPersons(true));
    let business = getState().businesses.data.find((business: Record<string, string>) => business.id === businessId);
    if (!business) {
      business = await dispatch(getBusiness(businessId));
    }
    const persons = await dispatch(getPersons(businessId));

    dispatch(setCurrentPersons(persons));
    dispatch(updateLoadingPersons(false));
  };
};

export const updateLoadingPersons = (state: boolean) => ({
  type: types.updateLoadingPersons,
  payload: state,
});

export const updateWithErrorBusinesses = (state: boolean) => ({
  type: types.updateWithErrorBusinesses,
  payload: state,
});

const getPersons = (businessId: string) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const { persons } = (await apiInstance.get(`business/${businessId}/persons`)).data;
      const personsFormatted = persons.map((person: Record<string, string>) => {
        const id = person.personId;
        delete person.personId;
        return { id, ...person };
      });

      return personsFormatted;
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCurrentPersons = (person: Record<string, string>) => ({
  type: types.setCurrentPerson,
  payload: person,
});

export const startDeletePersonProcess = (person: Record<string, string>) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const result = (): Promise<Record<string, boolean>> =>
        new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <DeleteModalContent
                elementName={person.name}
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
          });
        });

      if ((await result()).isConfirmed) {
        console.log(getState);
        const currentBusinessId = getState().businesses.currentBusiness.id;
        console.log(currentBusinessId);
        await apiInstance(`/business/${currentBusinessId}/persons/${person.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(removePerson(person.id));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

const removePerson = (personId: string) => ({
  type: types.removePerson,
  payload: personId,
});

export const startEditPersonProcess = (person: Record<string, string>) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusinessId = getState().businesses.currentBusiness.id;
      /* dispatch(updateLoadingBusinesses(true)); */
      const editProcess = async (): Promise<Record<string, string>> =>
        await new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <MobileWrapper
                onButtonClick={() => {
                  MySwal.close();
                }}
              >
                <PersonForm
                  onDelete={() => dispatch(startDeletePersonProcess(person))}
                  canDeleteInMobile
                  initialValues={person}
                  title="Edit Person"
                  submitButtonText="Save"
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
      const updatedValues = await editProcess();
      await apiInstance(`/business/${currentBusinessId}/persons/${person.id}`, {
        method: "PUT",
        data: JSON.stringify(updatedValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(updatePerson(updatedValues));
      MySwal.close();
      Swal.fire({
        icon: "success",
        title: "Business Updated",
        showConfirmButton: false,
        target: ".App",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: true,
        target: ".App",
        timer: 1500,
      });
    }
  };
};

const updatePerson = (person: Record<string, string>) => ({
  type: types.updatePerson,
  payload: person,
});

export const startCreatePersonProcess = () => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusinessId = getState().businesses.currentBusiness.id;
      /* dispatch(updateLoadingBusinesses(true)); */
      const values = await new Promise((resolve, reject) => {
        MySwal.fire({
          html: (
            <MobileWrapper
              onButtonClick={() => {
                MySwal.close();
              }}
            >
              <PersonForm
                title="Create Person"
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
      await apiInstance(`/business/${currentBusinessId}/persons`, {
        method: "POST",
        data: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const persons = await dispatch(getPersons(currentBusinessId));
      dispatch(updatePersons(persons));
      MySwal.close();
      Swal.fire({
        icon: "success",
        title: "Person Updated",
        showConfirmButton: false,
        timer: 1500,
        target: ".App",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: true,
        timer: 1500,
        target: ".App",
      });
    }
  };
};

const updatePersons = (person: Record<string, string>) => ({
  type: types.updatePersons,
  payload: person,
});
