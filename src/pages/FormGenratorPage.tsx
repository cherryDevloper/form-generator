import { useEffect, useState } from 'react';
import { Flex, Text, VStack, Button, Box } from '@chakra-ui/react';
import { ElementType } from '../enums';
import FormBuilder from '../components/FormBuilder';
import {
  Element,
  IFormValues,
} from '../components/FormBuilder/FormBuilder.types';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { basicElements } from '../constants';
import { choicesType } from '../components/Checkbox/Checkbox.type';

const FormGenratorPage = () => {
  const navigate = useNavigate();
  const {
    state: { form: editingForm, editingIndex },
  } = useLocation();
  // Retrieve forms data from localStorage
  const localData = localStorage.getItem('forms');
  const forms = localData ? JSON.parse(localData) : [];
  // Initialize the elements state with a default value based on editingForm or a new element
  const [elements, setElements] = useState<Element[]>(
    editingForm || [{ pageTitle: 'Title of the form' }]
  );
  // Initialize the useForm hook with explicit type annotations
  const { handleSubmit, control, getValues, setValue } = useForm<IFormValues>();

  const handleAddElement = (type: ElementType) => {
    const filteredElements = elements.filter((value) => value.type === type);

    const createCheckboxChoices = (
      type: 'radio' | 'checkbox'
    ): choicesType[] => [
      { value: false, label: `${type} 1`, name: `${type} 1`, type: type },
      { value: false, label: `${type} 2`, name: `${type} 2`, type: type },
      { value: false, label: `${type} 3`, name: `${type} 3`, type: type },
    ];

    const createNewElement = (): Element => {
      const name = `${type} ${filteredElements.length + 1}`;
      const label = type === ElementType.Checkbox ? `${type} ` : 'Title';
      const choices =
        type === ElementType.Checkbox
          ? createCheckboxChoices('checkbox')
          : type === ElementType.Radio
          ? createCheckboxChoices('radio')
          : undefined;
      //  saveDataMutation.mutate([...elements, newElement]);
      return { type, choices, name, label };
    };

    const newElement = createNewElement();
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const editForm = (newElements: any): void => {
    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    const newForms = [...savedForms];
    newForms[editingIndex] = newElements;
    const savedElements = JSON.stringify(newForms);
    localStorage.setItem('forms', savedElements);
    navigate('/');
  };

  const saveForm = () => {
    // Map over the elements array and update the values of LongText and ShortText types
    const updatedElements = elements.map((item) => {
      if (
        item.type === ElementType.LongText ||
        item.type === ElementType.ShortText ||
        item.type === ElementType.Select
      ) {
        return {
          ...item,
          value: getValues(item?.name),
        };
      }
      return item;
    });
    // If editingIndex is defined, call the editForm function with updatedElements and return
    if (editingIndex !== undefined) {
      editForm(updatedElements);
      return;
    }
    // Serialize the updatedElements array and add it to the forms array, then save to localStorage
    const savedElements = JSON.stringify([...forms, updatedElements]);
    localStorage.setItem('forms', savedElements);
    navigate('/');
  };

  const setInputsValue = () => {
    for (let element of elements) {
      if (element.type !== ElementType.Checkbox) {
        setValue(element?.name, element?.value);
      }
    }
  };

  useEffect(() => {
    if (editingIndex !== undefined && elements.length > 1) {
      setInputsValue();
    }
  }, []);

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
            align="flex-start"
          >
            {basicElements.map((element) => (
              <Button
                p={4}
                size="md"
                height={'8vh'}
                rounded="md"
                key={element.id}
                w={'100%'}
                shadow="md"
                onClick={() => handleAddElement(element.type)}
              >
                {element.label}
              </Button>
            ))}
          </VStack>
        </Box>
      </Flex>
      <Box
        w={'100%'}
        bg={'gray.200'}
        textAlign={'right'}
      >
        <Button
          onClick={saveForm}
          size={'lg'}
          background={'green.300'}
          margin={'1.2rem 3rem 0.1rem'}
          color={'white'}
        >
          {'Save'}
        </Button>
        <Flex
          flexDirection="column"
          w={'100%'}
          justifyItems={'center'}
          alignItems={'center'}
          p={'6'}
        >
          <FormBuilder
            elements={elements}
            setElements={setElements}
            handleSubmit={handleSubmit}
            control={control}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default FormGenratorPage;
