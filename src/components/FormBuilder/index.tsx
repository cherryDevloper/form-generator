import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ElementType } from '../../enums';

interface Element {
  type: ElementType;
  name: string;
  choices?: string[];
  requiredIf?: string;
  visibleIf?: string;
  editableIf?: string;
}
interface Page {
  name: string;
  elements: Element[];
}
const FormBuilder: React.FC = () => {
  const [page, setPage] = useState<Page>({ name: '', elements: [] });

  const addElement = () => {
    setPage((prevPage) => ({
      ...prevPage,
      elements: [...prevPage.elements, { name: '', type: ElementType.Text }],
    }));
  };

  const removeElement = (elementIndex: number) => {
    setPage((prevPage) => ({
      ...prevPage,
      elements: prevPage.elements.filter((_, index) => index !== elementIndex),
    }));
  };

  return (
    <Flex
      direction={'column'}
      bg={'white'}
      h={'80vh'}
      p={'10'}
      rounded={'xl'}
      shadow={'md'}
      w={'container.md'}
    >
      <Box marginBottom="2rem">
        <Flex marginBottom="1rem">
          <Input
            placeholder="Page Name"
            value={page.name}
            onChange={(e) => {
              setPage((prevPage) => ({ ...prevPage, name: e.target.value }));
            }}
          />
        </Flex>
        {page.elements.map((element: any, elementIndex: number) => (
          <Box
            key={elementIndex}
            marginBottom="1rem"
          >
            <Flex>
              <FormControl>
                <FormLabel>Element Name</FormLabel>
                <Input
                  placeholder="Element Name"
                  value={element.name}
                  onChange={(e) => {
                    setPage((prevPage) => ({
                      ...prevPage,
                      elements: prevPage.elements.map((el, index) =>
                        index === elementIndex
                          ? { ...el, name: e.target.value }
                          : el
                      ),
                    }));
                  }}
                />
              </FormControl>

              <Button
                marginLeft="1rem"
                onClick={() => removeElement(elementIndex)}
              >
                Remove Element
              </Button>
            </Flex>
          </Box>
        ))}

        <Button onClick={() => addElement()}>Add Element</Button>
      </Box>

      {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}
    </Flex>
  );
};

export default FormBuilder;
