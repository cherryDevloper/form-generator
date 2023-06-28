import React from 'react';
import FormBuilder from '../components/FormBuilder';
import { Flex, Text, VStack, Button, Box } from '@chakra-ui/react';
const FormGenratorPage = () => {
  const basicElements = [
    {
      id: 'input',
      label: ' Short Text',
    },
    {
      id: 'textArea',
      label: 'Long Text',
    },
    {
      id: 'checkbox',
      label: 'Checkbox',
    },
    {
      id: 'select',
      label: 'Dropdown',
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
                rounded="md"
              >
                <Button w={'100%'}>{element.label}</Button>
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
        <FormBuilder />
      </Flex>
    </Flex>
  );
};

export default FormGenratorPage;
