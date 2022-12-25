import { useContext } from 'react';
import { FormContext } from 'contexts/FormContext';

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
      throw new Error("useFormContext needs to be used inside FormProvider");
    }
    return context;
  };
  