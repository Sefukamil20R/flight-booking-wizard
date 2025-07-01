import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormData = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  type: string;
};

const defaultFormData: FormData = {
  from: '',
  to: '',
  departDate: '',
  returnDate: '',
  type: '',
};

const FormContext = createContext<{
  form: FormData;
  setForm: (data: Partial<FormData>) => void;
}>({
  form: defaultFormData,
  setForm: () => {},
});

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setFormState] = useState<FormData>(defaultFormData);

  const setForm = (data: Partial<FormData>) => {
    setFormState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}