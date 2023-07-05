import React, { ChangeEvent, useState } from 'react';
import { Box, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { Element, FormBuilderProps } from './FormBuilder.types';
import { motion } from 'framer-motion';
import { ElementType } from '../../enums';
import Input from '../Input';
import TextArea from '../TextArea';
import Checkbox from '../Checkbox';
import SelectComponent from '../Select';
import CustomDrawer from '../Drawer';
import { SettingsIcon } from '@chakra-ui/icons';
import styles from './FormBuilder.module.css';

const { conditionalInput } = styles;

const FormBuilder: React.FC<FormBuilderProps> = ({
  elements,
  setElements,
  control,
  getValues,
}) => {
  const [customizedElement, setCustomizedElement] = useState<
    Element | undefined
  >(undefined);

  const {
    editableIf: editableValue,
    visibleIf: visibleValue,
    requiredIf: requiredValue,
  } = elements.find((item) => item.name === customizedElement?.name) || {};

  const onChangePageTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev) => [
      { pageTitle: e.target.value } as Element,
      ...prev.slice(1),
    ]);
  };

  const onChangeIfStatement = (
    type: 'requiredIf' | 'visibleIf' | 'editableIf',
    value: any
  ) => {
    setElements((prev) => {
      const newElements = prev.map((item) => {
        if (item.name === customizedElement?.name) {
          return {
            ...item,
            [type]: value,
          };
        } else {
          return item;
        }
      });
      return newElements;
    });
  };

  const checkCondition = (ifStatement: string) => {
    if (!ifStatement) return true;
    const isIfCorrect = ifStatement.split('==').length === 2;
    if (!isIfCorrect) return true;
    if (ifStatement.split('==')[0] === '' || ifStatement.split('==')[0] === '')
      return false;

    const element = ifStatement.split('==')[0];
    const value = ifStatement
      .split('==')[1]
      ?.replace(' ', '')
      .replace('"', '')
      .replace("'", '');

    const isConditionCorrect = elements.some((item) => {
      if (item.name === element && getValues(item?.name) === value) {
        return true;
      }
    });
    return isConditionCorrect;
  };

  const checkRequiredCondition = (ifStatement: any) => {
    if (!ifStatement) return false;
    const isIfCorrect = ifStatement.split('==').length === 2;
    if (!isIfCorrect) return false;
    if (ifStatement.split('==')[0] === '' || ifStatement.split('==')[0] === '')
      return false;

    const element = ifStatement.split('==')[0];
    const value = ifStatement
      .split('==')[1]
      ?.replace(' ', '')
      .replace('"', '')
      .replace("'", '');

    const isConditionCorrect = elements.some((item) => {
      if (item.name === element && getValues(item?.name) === value) {
        return true;
      }
    });
    return isConditionCorrect;
  };

  return (
    <Flex
      direction={'column'}
      bg={'white'}
      minH={'80vh'}
      p={'8'}
      rounded={'xl'}
      shadow={'md'}
      w={'container.md'}
    >
      <Box marginBottom="2rem">
        <Flex
          marginBottom="2rem"
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          borderBottom={'2px dashed blue'}
          p={'2'}
        >
          <input
            value={elements?.[0]?.pageTitle ?? ''}
            onChange={onChangePageTitle}
            style={{ textAlign: 'center', fontSize: 25 }}
          />
        </Flex>
        <form>
          {elements.map((element: Element) => {
            if ('pageTitle' in element) return null;

            return (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  key={element?.name}
                  marginBottom="1rem"
                  border={'2px dashed #e3e1e1'}
                  p={4}
                  shadow={'sd'}
                  rounded={'xl'}
                >
                  <Flex justifyContent={'space-between'}>
                    <Controller
                      name={element?.name}
                      control={control}
                      render={({ field: { onChange, value } }: any) =>
                        element?.type === ElementType.LongText ? (
                          <TextArea
                            onChange={onChange}
                            setElements={setElements}
                            label={element?.label}
                            name={element?.name}
                            value={value}
                            editable={checkCondition(element.editableIf)}
                            isRequired={checkRequiredCondition(
                              element.requiredIf
                            )}
                            isVisible={checkCondition(element.visibleIf)}
                          />
                        ) : element?.type === ElementType.ShortText ? (
                          <Input
                            onChange={onChange}
                            label={element?.label}
                            name={element?.name}
                            value={value}
                            setElements={setElements}
                            editable={checkCondition(element.editableIf)}
                            isRequired={checkRequiredCondition(
                              element.requiredIf
                            )}
                            isVisible={checkCondition(element.visibleIf)}
                          />
                        ) : (element?.type === ElementType.Checkbox ||
                            element?.type === ElementType.Radio) &&
                          element?.choices ? (
                          <Checkbox
                            type={
                              element?.type === ElementType.Checkbox
                                ? 'checkbox'
                                : element?.type === ElementType.Radio
                                ? 'radio'
                                : 'checkbox'
                            }
                            onChange={onChange}
                            label={element?.label}
                            name={element?.name}
                            choices={element?.choices}
                            setElements={setElements}
                            editable={checkCondition(element.editableIf)}
                            isRequired={checkRequiredCondition(
                              element.requiredIf
                            )}
                            isVisible={checkCondition(element.visibleIf)}
                          />
                        ) : element?.type === ElementType.Select ? (
                          <SelectComponent
                            onChange={onChange}
                            label={element.label}
                            name={element?.name}
                            setElements={setElements}
                            value={value}
                            editable={checkCondition(element.editableIf)}
                            isRequired={checkRequiredCondition(
                              element.requiredIf
                            )}
                            isVisible={checkCondition(element.visibleIf)}
                          />
                        ) : (
                          <></>
                        )
                      }
                    />
                    <SettingsIcon
                      onClick={() => setCustomizedElement(element)}
                      cursor={'pointer'}
                    />
                  </Flex>
                </Box>
              </motion.div>
            );
          })}
        </form>
        {customizedElement !== undefined && (
          <CustomDrawer
            isOpen={customizedElement !== undefined}
            onClose={() => setCustomizedElement(undefined)}
          >
            <FormControl>
              <FormLabel htmlFor="requiredIf">Required if:</FormLabel>
              <input
                id="txt1"
                value={requiredValue}
                onChange={(e) =>
                  onChangeIfStatement('requiredIf', e.target.value)
                }
                className={conditionalInput}
              />
              <FormLabel htmlFor="visibleIf">visible if:</FormLabel>
              <input
                value={visibleValue}
                onChange={(e) =>
                  onChangeIfStatement('visibleIf', e.target.value)
                }
                className={conditionalInput}
              />
              <FormLabel htmlFor="editableIf">editable if:</FormLabel>
              <input
                value={editableValue}
                onChange={(e) =>
                  onChangeIfStatement('editableIf', e.target.value)
                }
                className={conditionalInput}
              />
            </FormControl>
          </CustomDrawer>
        )}
      </Box>
    </Flex>
  );
};

export default FormBuilder;
