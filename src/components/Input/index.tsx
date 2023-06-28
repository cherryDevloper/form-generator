import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  register,
  required = false,
  error = '',
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name, { required })}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
