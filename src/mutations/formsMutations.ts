import { Element } from '../components/FormBuilder/FormBuilder.types';
import { fetchForms } from '../utils/localStorage';

export const saveFormMutation = async (data: Element[]) => {
  localStorage.setItem('forms', JSON.stringify(data));
};

export const updateFormMutation: any = async (
  data: Element[],
  editingIndex: number
) => {
  const savedForms = await fetchForms();
  const newForms = [...savedForms];
  newForms[editingIndex] = data;
  await saveFormMutation(newForms);
};
