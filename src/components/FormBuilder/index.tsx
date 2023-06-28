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
  const [pages, setPages] = useState<Page[]>([{ name: '', elements: [] }]);

  const addElement = (pageIndex: number, element: any) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].elements.push(element);
    setPages(updatedPages);
  };

  const removeElement = (pageIndex: number, elementIndex: number) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].elements.splice(elementIndex, 1);
    setPages(updatedPages);
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
      {pages.map((page, pageIndex) => (
        <Box
          key={pageIndex}
          marginBottom="2rem"
        >
          <Flex marginBottom="1rem">
            <Input
              placeholder="Page Name"
              value={page.name}
              onChange={(e) => {
                const updatedPages = [...pages];
                updatedPages[pageIndex].name = e.target.value;
                setPages(updatedPages);
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
                      const updatedPages = [...pages];
                      updatedPages[pageIndex].elements[elementIndex].name =
                        e.target.value;
                      setPages(updatedPages);
                    }}
                  />
                </FormControl>

                <Button
                  marginLeft="1rem"
                  onClick={() => removeElement(pageIndex, elementIndex)}
                >
                  Remove Element
                </Button>
              </Flex>
            </Box>
          ))}

          <Button
            onClick={() =>
              addElement(pageIndex, { name: '', type: ElementType.Text })
            }
          >
            Add Element
          </Button>
        </Box>
      ))}

      {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}
    </Flex>
  );
};

export default FormBuilder;
