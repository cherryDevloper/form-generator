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
interface FormBuilderProps {
  elements: Element[];
}
const FormBuilder: React.FC<FormBuilderProps> = ({ elements }) => {
  const [page, setPage] = useState<Page>({ name: '', elements: [] });

  console.log('elements', elements);

  return (
    <Flex
      direction={'column'}
      bg={'white'}
      min-h={'80vh'}
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
        {elements.map((element: Element, elementIndex: number) => (
          <Box
            key={elementIndex}
            marginBottom="1rem"
          >
            <Flex>
              <FormControl>
                <FormLabel>
                  {element.name !== '' ? element.name : 'Label'}
                </FormLabel>
                {element.type === ElementType.ShortText ? (
                  <Input
                    placeholder="text"
                    value={element.name}
                    onChange={(e) => {
                      const updatedElements = [...elements];
                      updatedElements[elementIndex].name = e.target.value;
                      // setElements(updatedElements);
                    }}
                  />
                ) : null}
              </FormControl>

              {/* <Button
                marginLeft="1rem"
                // onClick={() => removeElement(elementIndex)}
              >
                Remove Element
              </Button> */}
            </Flex>
          </Box>
        ))}
      </Box>

      {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}
    </Flex>
  );
};

export default FormBuilder;
