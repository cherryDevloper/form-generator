import React, { useState } from 'react';
import FormBuilder from '../components/FormBuilder';
import { Flex, Text, VStack, Button, Box } from '@chakra-ui/react';
import { ElementType } from '../enums';
interface Element {
  type: ElementType;
  name: string;
  choices?: string[];
  requiredIf?: string;
  visibleIf?: string;
  editableIf?: string;
}
const FormGenratorPage = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const handleAddElement = (type: ElementType) => {
    const filteredElements = elements.filter((value) => value.type == type);
    const newElement: Element = {
      type,
      name: `${type} ${filteredElements.length + 1}`,
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const basicElements = [
    {
      id: 'input',
      label: ' Short Text',
      type: ElementType.ShortText,
    },
    {
      id: 'textArea',
      label: 'Long Text',
      type: ElementType.LongText,
    },
    {
      id: 'checkbox',
      label: 'Checkbox',
      type: ElementType.Checkbox,
    },
    {
      id: 'select',
      label: 'Dropdown',
      type: ElementType.Select,
    },
  ];
  return (
    <Flex minHeight="100vh">
      <Flex
        flex="1"
        justifyContent="start"
      >
        <Box
          w="250px"
          bg="blue.100"
          p={4}
        >
          <Flex
            alignItems="center"
            mb={4}
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              ml={2}
            >
              Basic Elements
            </Text>
          </Flex>

          <VStack
            spacing={4}
            align="stretch"
          >
            {basicElements.map((element) => (
              <Box
                key={element.id}
                py={2}
                px={4}
                bg="blue.300"
                rounded="sm"
              >
                <Button
                  w={'100%'}
                  onClick={() => handleAddElement(element.type)}
                >
                  {element.label}
                </Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        w={'100%'}
        bg={'gray.200'}
        justifyItems={'center'}
        alignItems={'center'}
        p={'6'}
      >
        <FormBuilder elements={elements} />
      </Flex>
    </Flex>
  );
};

export default FormGenratorPage;
