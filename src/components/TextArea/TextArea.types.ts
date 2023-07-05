import { Dispatch } from 'react';
import { Element } from '../FormBuilder/FormBuilder.types';

export type TextAreaProps = {
  onChange: () => void;
  value: string;
  rows?: number;
  cols?: number;
  setElements: Dispatch<React.SetStateAction<Element[]>>;
  label?: string;
  name?: string;
  editable: any;
  isVisible: any;
  isRequired: any;
};
