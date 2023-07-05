import { InputProps } from './Input.types';
import styles from './Input.module.css';
import { ChangeEvent } from 'react';
import CustomTitle from '../CustomTitle';
const { inputContainer, required } = styles;

const Input = ({
  onChange,
  value,
  setElements,
  name,
  label,
  editable = true,
  isVisible = true,
  isRequired = false,
}: InputProps) => {
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, label: e.target.value } : item
      )
    );
  };
  return (
    <>
      {isVisible && (
        <div className={`${inputContainer} ${!isRequired ? '' : required} `}>
          <CustomTitle
            onChange={(e) => onChangeTitle(e)}
            value={label}
          />
          <input
            value={value}
            readOnly={!editable}
            onChange={onChange}
            placeholder="Text"
            type="text"
            style={
              isRequired
                ? { border: '1px solid red' }
                : { border: '1px solid grey' }
            }
          />
        </div>
      )}
    </>
  );
};

export default Input;
