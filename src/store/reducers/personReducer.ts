import { types } from "@store/types";
import { Action, PersonEntity } from "types/store";

const initialState = {
  isLoading: false,
  withError: false,
  currentPersons: [],
};

export const personReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.setCurrentPerson:
      return {
        ...state,
        currentPersons: action.payload,
      };

    case types.updateLoadingPersons:
      return {
        ...state,
        isLoading: action.payload,
      };

    case types.removePerson:
      return {
        ...state,
        currentPersons: state.currentPersons.filter((person: PersonEntity) => person.id !== action.payload),
      };

    case types.updatePerson:
      return {
        ...state,
        currentPersons: [...state.currentPersons.filter((person: PersonEntity) => person.id !== action.payload.id), action.payload].sort(
          (a: Record<string, string>, b: Record<string, string>) => a.name.localeCompare(b.name)
        ),
      };

    case types.addPerson:
      return {
        ...state,
        currentPersons: [...state.currentPersons, action.payload],
      };

    case types.updatePersons:
      return {
        ...state,
        currentPersons: action.payload,
      };

    default:
      return state;
  }
};
