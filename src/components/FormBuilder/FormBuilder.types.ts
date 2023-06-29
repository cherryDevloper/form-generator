import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { ElementType } from '../../enums';
import { choicesType } from '../Checkbox/Checkbox.type';

export interface Element {
  type: ElementType;
  name: string;
  choices?: choicesType[];
  requiredIf?: string;
  visibleIf?: string;
  editableIf?: string;
  label?: string;
  value?: string;
  pageTitle?: string;
}
export interface FormBuilderProps {
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
  handleSubmit?: UseFormHandleSubmit<IFormValues, undefined>;
  control: Control<IFormValues, any>;
}
export type IFormValues = {
  [key: string]: any;
};
