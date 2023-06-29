import { InputProps } from './Input.types';
import styles from './Input.module.css';
import { ChangeEvent } from 'react';
import CustomTitle from '../CustomTitle';
const { inputContainer } = styles;

const Input = ({ onChange, value, setElements, name, label }: InputProps) => {
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, label: e.target.value } : item
      )
    );
  };

  return (
    <div className={inputContainer}>
      <CustomTitle
        onChange={(e) => onChangeTitle(e)}
        value={label}
      />
      <input
        value={value}
        onChange={onChange}
        placeholder="Text"
        type="text"
      />
    </div>
  );
};

export default Input;
