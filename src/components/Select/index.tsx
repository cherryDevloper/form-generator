import { Box, Button, Flex } from '@chakra-ui/react';
import { SelectProps } from './Select.types';
import { ChangeEvent, useState } from 'react';
import { Element } from '../FormBuilder/FormBuilder.types';
import { TriangleDownIcon } from '@chakra-ui/icons';
import CustomTitle from '../CustomTitle';

const SelectComponent = ({
  label,
  setElements,
  name,
  onChange,
  value,
}: SelectProps) => {
  //
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);

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
    <Box>
      <CustomTitle
        value={label}
        onChange={(e) => onChangeTitle(e)}
      />
      <Box
        border={'1px solid gray.100'}
        shadow={'md'}
        p={2}
        cursor={'pointer'}
        backgroundColor={'gray.100'}
        onClick={() => setIsDropDownVisible(!isDropDownVisible)}
      >
        <Flex
          alignItems={'center'}
          justify={'space-between'}
        >
          {'Select an option'}
          <TriangleDownIcon />
        </Flex>
      </Box>
      {isDropDownVisible && (
        <Box
          p={2}
          mt={1}
          border={'1px solid gray.100'}
          shadow={'md'}
        >
          <Flex>
            <textarea
              rows={7}
              defaultValue={label}
              value={value}
              onChange={onChange}
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default SelectComponent;
