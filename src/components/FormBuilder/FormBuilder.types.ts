import { ElementType } from '../../enums';

export interface Element {
  type: ElementType;
  name: string;
  choices?: string[];
  requiredIf?: string;
  visibleIf?: string;
  editableIf?: string;
}
export interface FormBuilderProps {
  elements: Element[];
}
export type IFormValues = {
  [key: string]: any;
};
