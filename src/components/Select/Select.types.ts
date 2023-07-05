import { Dispatch } from 'react';
import { Element } from '../FormBuilder/FormBuilder.types';

export interface selectOptionType {
  label: string;
  value: string;
  name: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  value?: string;
  setElements: Dispatch<React.SetStateAction<Element[]>>;
  onChange: () => void;
  editable: any;
  isVisible: any;
  isRequired: any;
}
