import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { IFormValues } from '../components/FormBuilder/FormBuilder.types';
import {
  updateFormMutation,
  saveFormMutation,
} from '../mutations/formsMutations';

export const useFormHook = () => {
  const { handleSubmit, control, getValues, setValue } = useForm<IFormValues>();

  const saveForm = useMutation(saveFormMutation);
  const updateForm: any = useMutation(updateFormMutation);

  return {
    handleSubmit,
    control,
    getValues,
    setValue,
    saveForm,
    updateForm,
  };
};
