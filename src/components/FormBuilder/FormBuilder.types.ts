import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { ElementType } from '../../enums';
import { choicesType } from '../Checkbox/Checkbox.type';
import { selectOptionType } from '../Select/Select.types';

export interface Element {
  type: ElementType;
  name: string;
  choices?: choicesType[];
  // isRequired?: boolean;
  // isReadOnly?: boolean;
  editableIf?: any;
  requiredIf?: any;
  visibleIf?: any;
  label?: string;
  value?: string;
  pageTitle?: string;
  options?: selectOptionType[];
  radio?: any;
  getValues?: any;
}

export interface FormBuilderProps {
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
  handleSubmit?: UseFormHandleSubmit<IFormValues, undefined>;
  control: Control<IFormValues, any>;
  getValues?: any;
}
export type IFormValues = {
  [key: string]: any;
};
export type switchedValueType = 'isRequired' | 'isReadOnly' | '';
