import { useEffect, useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import { Form } from './types/Home.types';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const HomePage = () => {
  const [forms, setForms] = useState<Form[]>([]);

  const navigate = useNavigate();

  const localData = localStorage.getItem('forms');
  const data: Form[] = JSON.parse(localData ?? '[]');
  useEffect(() => {
    if (data) {
      setForms(data);
    }
  }, []);

  return (
    <Layout>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => {
          navigate('/form-generator', {
            state: {
              forms,
            },
          });
        }}
        mb={'4'}
        w={150}
        display={'flex'}
        justifyContent={'space-between'}
      >
        Create Form <ArrowForwardIcon />
      </Button>
      {forms?.length > 0 &&
        forms.map((form: any, index: number) => (
          <ListItem
            text={form[0].pageTitle}
            onClick={() => {
              navigate('/form-generator', {
                state: {
                  form,
                  editingIndex: index,
                },
              });
            }}
          />
        ))}
    </Layout>
  );
};

export default HomePage;
