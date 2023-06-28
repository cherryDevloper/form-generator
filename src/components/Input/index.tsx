import { InputProps } from './Input.types';
import styles from './Input.module.css';
const { inputContainer } = styles;
const Input = ({ onChange, value }: InputProps) => {
  return (
    <div className={inputContainer}>
      <span>Title</span>
      <input
        value={value}
        onChange={onChange}
        placeholder="Text"
      />
    </div>
  );
};

export default Input;
