export interface CheckboxProps {
  label?: string;
  defaultValue?: boolean;
  name: string;
  setElements: any;
  onChange: () => void;
  choices: choicesType[];
}
export type choicesType = {
  value: boolean;
  label: string;
  name: string;
};
