export interface Action {
  type: string;
  payload: any;
}

export interface BusinessesEntity {
  data: Business[];
  isLoading: boolean;
  withError: boolean;
  currentBusiness: Business;
}

export interface BusinessEntity {
  id: string;
  name: string;
}

export interface UiEntity {
  currentView: number;
}
export interface PersonsEntity {
  isLoading: boolean;
  withError: boolean;
  currentPersons: Person[];
}

export interface PersonEntity {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  join_date: string;
}

export interface State {
  businesses: Businesses;
  persons: Persons;
  ui: Ui;
}
