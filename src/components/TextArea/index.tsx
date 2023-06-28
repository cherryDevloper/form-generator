import React from 'react';
import { TextAreaProps } from './TextArea.types';
import styles from './TextArea.module.css';
const { textAreaContainer } = styles;
const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  rows = 4,
  cols = 40,
  value,
}) => {
  return (
    <div className={textAreaContainer}>
      <span>title</span>
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
