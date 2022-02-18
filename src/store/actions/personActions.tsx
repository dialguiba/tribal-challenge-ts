import { DeleteModalContent } from "@components/organisms/DeleteModalContent";
import { PersonForm } from "@components/organisms/PersonForm";
import { apiInstance } from "services/axios";
import { types } from "@store/types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getBusiness } from "./businessActions";
import { MobileWrapper } from "@components/organisms/MobileWrapper";
import { PersonEntity } from "types/store";
import { staticData } from "./data";
import { t } from "i18next";

const MySwal = withReactContent(Swal);

export const updateCurrentPersons = (businessId: string) => {
  return async (dispatch: any, getState: () => any) => {
    dispatch(updateLoadingPersons(true));
    let business = getState().businesses.data.find((business: Record<string, string>) => business.id === businessId);
    if (!business) {
      business = await dispatch(getBusiness(businessId));
    }
    const persons = await dispatch(getPersons(businessId));
    const sortedPersons = persons.sort((a: Record<string, string>, b: Record<string, string>) => a.name.localeCompare(b.name));

    dispatch(setCurrentPersons(sortedPersons));
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

export const setCurrentPersons = (person: PersonEntity) => ({
  type: types.setCurrentPerson,
  payload: person,
});

export const startDeletePersonProcess = (person: PersonEntity) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const result = (): Promise<Record<string, boolean>> =>
        new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <DeleteModalContent
                cancelButtonText={staticData(t).general.cancel}
                confirmText={staticData(t).general.deleteConfirm}
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
            customClass: { htmlContainer: "--responsive" },
          });
        });

      if ((await result()).isConfirmed) {
        const currentBusinessId = getState().businesses.currentBusiness.id;
        console.log(currentBusinessId);
        await apiInstance(`/business/${currentBusinessId}/persons/${person.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        Swal.fire({
          title: staticData(t).general.deleted,
          html: staticData(t).persons.deleted,
          icon: "success",
          target: ".App",
          customClass: { popup: "--responsiveResponse" },
          showConfirmButton: false,
        });

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

export const startEditPersonProcess = (person: PersonEntity) => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusinessId = getState().businesses.currentBusiness.id;
      const editProcess = async (): Promise<PersonEntity> =>
        await new Promise((resolve, reject) => {
          MySwal.fire({
            html: (
              <MobileWrapper
                onButtonClick={() => {
                  MySwal.close();
                }}
                goBackText={staticData(t).business.back}
              >
                <PersonForm
                  cancelButtonText={staticData(t).general.cancel}
                  deleteButtonText={staticData(t).general.delete}
                  onDelete={() => dispatch(startDeletePersonProcess(person))}
                  canDeleteInMobile
                  initialValues={person}
                  title={staticData(t).persons.edit}
                  submitButtonText={staticData(t).general.save}
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
        title: staticData(t).persons.updated,
        showConfirmButton: false,
        target: ".App",
        timer: 1500,
        customClass: { popup: "--responsiveResponse" },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: true,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    }
  };
};

const updatePerson = (person: PersonEntity) => ({
  type: types.updatePerson,
  payload: person,
});

export const startCreatePersonProcess = () => {
  return async (dispatch: any, getState: () => any) => {
    try {
      const currentBusinessId = getState().businesses.currentBusiness.id;
      const values = await new Promise((resolve, reject) => {
        MySwal.fire({
          html: (
            <MobileWrapper
              goBackText={staticData(t).business.back}
              onButtonClick={() => {
                MySwal.close();
              }}
            >
              <PersonForm
                title={staticData(t).persons.create}
                submitButtonText={staticData(t).persons.create}
                cancelButtonText={staticData(t).business.cancel}
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
        title: staticData(t).persons.created,
        timer: 1500,
        showConfirmButton: false,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "error",
        showConfirmButton: true,
        target: ".App",
        customClass: { popup: "--responsiveResponse" },
      });
    }
  };
};

const updatePersons = (person: Record<string, string>) => ({
  type: types.updatePersons,
  payload: person,
});
