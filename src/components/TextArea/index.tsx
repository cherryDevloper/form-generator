import React, { ChangeEvent } from 'react';
import { TextAreaProps } from './TextArea.types';
import styles from './TextArea.module.css';
const { textAreaContainer } = styles;
const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  rows = 4,
  cols = 40,
  value,
  label,
  name,
  setElements,
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
    <div className={textAreaContainer}>
      <input
        value={label}
        onChange={onChangeTitle}
      />
      <textarea
        onChange={onChange}
        value={value}
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

export default TextArea;
