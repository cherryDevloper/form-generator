import React, { ChangeEvent } from 'react';
import { TextAreaProps } from './TextArea.types';
import styles from './TextArea.module.css';
import CustomTitle from '../CustomTitle';
const { textAreaContainer, required } = styles;
const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  rows = 4,
  cols = 40,
  value,
  label,
  name,
  setElements,
  editable = true,
  isVisible = true,
  isRequired = false,
}) => {
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            label: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      {isVisible && (
        <div className={`${textAreaContainer} ${!isRequired ? '' : required} `}>
          <CustomTitle
            value={label}
            onChange={onChangeTitle}
          />
          <textarea
            readOnly={!editable}
            onChange={onChange}
            value={value}
            rows={rows}
            cols={cols}
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

export default TextArea;
