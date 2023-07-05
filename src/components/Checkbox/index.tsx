/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from 'react';
import { CheckboxProps } from './Checkbox.type';
import { Element } from '../FormBuilder/FormBuilder.types';
import { checkboxContainerStyles, required } from './checkboxStyles';
import CustomTitle from '../CustomTitle';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  setElements,
  name,
  choices,
  type,
  editable = true,
  isVisible = true,
  isRequired = false,
}) => {
  const onChangeCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    checkboxName: string,
    type: 'value' | 'label'
  ) => {
    setElements((prev: Element[]) => {
      let newElements = [...prev];
      newElements = newElements.map((item: Element) => {
        if (item.name === name) {
          let newChoices: any = item.choices && [...item.choices];
          newChoices = newChoices.map((item: any) => {
            if (item.name === checkboxName) {
              return {
                ...item,
                value: type === 'value' ? e.target.checked : item.value,
                label: type === 'label' ? e.target.value : item.value,
              };
            } else {
              return item;
            }
          });

          return {
            ...item,
            choices: newChoices,
          };
        } else {
          return item;
        }
      });

      return newElements;
    });
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev: Element[]) =>
      prev.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            label: e.target.value,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      {isVisible && (
        <div css={checkboxContainerStyles}>
          <CustomTitle
            value={label}
            onChange={onChangeTitle}
          />
          {choices.map((item) => {
            return (
              <label>
                <input
                  type={type}
                  onChange={(value) =>
                    onChangeCheckbox(value, item.name, 'value')
                  }
                  defaultChecked={item.value}
                  readOnly={!editable}
                />
                <input
                  type="text"
                  onChange={(e) => onChangeCheckbox(e, item.name, 'label')}
                  defaultValue={item.label}
                  style={{ border: 'none' }}
                />
              </label>
            );
          })}
          {isRequired && <p css={required}></p>}
        </div>
      )}
    </>
  );
};

export default Checkbox;
