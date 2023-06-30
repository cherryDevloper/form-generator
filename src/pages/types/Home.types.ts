import { Element } from '../../components/FormBuilder/FormBuilder.types';

export interface FormElement {
  type: string;
  name: string;
  label: string;
}
export interface Form {
  pageTitle: string;
  elements?: Element[];
}
