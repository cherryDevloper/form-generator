import { Dispatch, InputHTMLAttributes } from 'react';
import { Element } from '../FormBuilder/FormBuilder.types';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
  value: string;
  label?: string;
  setElements: Dispatch<React.SetStateAction<Element[]>>;
  editable: any;
  isVisible: any;
  isRequired: any;
}
