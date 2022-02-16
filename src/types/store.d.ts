export interface Action {
  type: string;
  payload: any;
}

export interface Businesses {
  data: Business[];
  isLoading: boolean;
  withError: boolean;
}

export interface Business {
  id: string;
  name: string;
}

export interface Ui {
  currentView: number;
}
export interface Persons {
  isLoading: boolean;
  withError: boolean;
  data: Person[];
}

export interface Person {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  join_date: string;
}
