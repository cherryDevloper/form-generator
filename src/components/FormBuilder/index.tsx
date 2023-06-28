import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Input from '../Input';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Element, FormBuilderProps, IFormValues } from './FormBuilder.types';
import { ElementType } from '../../enums';
import TextArea from '../TextArea';

const FormBuilder: React.FC<FormBuilderProps> = ({ elements }) => {
  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: {
      // name: '',
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log('data', data);
    // alert(JSON.stringify(data));
  };
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
        <Flex marginBottom="1rem"></Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          {elements.map((element: Element, elementIndex: number) => (
            <Box
              key={elementIndex}
              marginBottom="1rem"
            >
              <Flex>
                <Controller
                  name={element.name}
                  control={control}
                  render={({ field: { onChange, value } }: any) =>
                    element.type === ElementType.LongText ? (
                      <TextArea
                        onChange={onChange}
                        value={value}
                      />
                    ) : element.type === ElementType.ShortText ? (
                      <Input
                        onChange={onChange}
                        value={value}
                      />
                    ) : element.type === ElementType.Checkbox ? (
                      <>'checkbox'</>
                    ) : (
                      <> 'dropdown'</>
                    )
                  }
                />
              </Flex>
            </Box>
          ))}
        </form>
      </Box>
      <button onClick={handleSubmit(onSubmit)}>mm</button>
      {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}
    </Flex>
  );
};

export default FormBuilder;
