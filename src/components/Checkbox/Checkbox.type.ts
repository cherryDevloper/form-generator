import { Dispatch } from 'react';
import { Element } from '../FormBuilder/FormBuilder.types';

export interface CheckboxProps {
  label?: string;
  defaultValue?: boolean;
  name: string;
  setElements: Dispatch<React.SetStateAction<Element[]>>;
  onChange: () => void;
  choices: choicesType[];
  type: 'checkbox' | 'radio';
}
export type choicesType = {
  value: boolean;
  label: string;
  name: string;
  type: 'checkbox' | 'radio';
};
