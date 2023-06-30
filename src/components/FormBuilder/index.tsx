import React, { ChangeEvent, useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import {
  Element,
  FormBuilderProps,
  switchedValueType,
} from './FormBuilder.types';
import { ElementType } from '../../enums';
import Input from '../Input';
import TextArea from '../TextArea';
import Checkbox from '../Checkbox';
import SelectComponent from '../Select';
import CustomDrawer from '../Drawer';
import { SettingsIcon } from '@chakra-ui/icons';

const FormBuilder: React.FC<FormBuilderProps> = ({
  elements,
  setElements,
  control,
}) => {
  const [customizedElement, setCustomizedElement] = useState<
    Element | undefined
  >(undefined);

  const onChangePageTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prev) => [
      { pageTitle: e.target.value } as Element,
      ...prev.slice(1),
    ]);
  };

  const onChangeSwitch = (
    e: ChangeEvent<HTMLInputElement>,
    type: switchedValueType
  ) => {
    setElements((prev: Element[]) =>
      prev.map((item) => {
        if (item?.name === customizedElement?.name) {
          return {
            ...item,
            [type]: e.target.checked,
          };
        } else {
          return item;
        }
      })
    );
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
                        />
                      ) : element?.type === ElementType.ShortText ? (
                        <Input
                          onChange={onChange}
                          label={element?.label}
                          name={element?.name}
                          value={value}
                          setElements={setElements}
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
                        />
                      ) : element?.type === ElementType.Select ? (
                        <SelectComponent
                          onChange={onChange}
                          label={element.label}
                          name={element?.name}
                          setElements={setElements}
                          value={value}
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
            );
          })}
        </form>
        {customizedElement !== undefined && (
          <CustomDrawer
            isOpen={customizedElement !== undefined}
            onClose={() => setCustomizedElement(undefined)}
          >
            <FormControl>
              <FormLabel htmlFor="isRequired">isRequired:</FormLabel>

              <Switch
                onChange={(e) => onChangeSwitch(e, 'isRequired')}
                id="isRequired"
                checked={Boolean(customizedElement?.isRequired)}
                defaultChecked={Boolean(customizedElement?.isRequired)}
              />
              <FormLabel htmlFor="isReadOnly">isReadOnly:</FormLabel>
              <Switch
                onChange={(e) => onChangeSwitch(e, 'isReadOnly')}
                id="isReadOnly"
                checked={Boolean(customizedElement?.isReadOnly)}
                defaultChecked={Boolean(customizedElement?.isReadOnly)}
              />
            </FormControl>
          </CustomDrawer>
        )}
      </Box>
    </Flex>
  );
};

export default FormBuilder;
