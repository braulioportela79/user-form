import { createContext, ReactNode, useReducer } from "react";

export type User = {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: string;
  address: {
    zipCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    reference: string;
  };
  about: string;
};

type State = {
  currentStep: number;
  user: User;
};

export type Action =
  | { type: FormActions.setCurrentStep; payload: number }
  | { type: FormActions.setUser; payload: User };

export type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialState: State = {
  currentStep: 0,
  user: {
    name: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    email: "",
    address: {
      zipCode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      reference: "",
    },
    about: ""
  },
};

// Context
export const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setUser,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};