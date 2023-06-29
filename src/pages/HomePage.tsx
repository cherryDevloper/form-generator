import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import { Form } from './types/Home.types';

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
      >
        Create Form
      </Button>
    </Layout>
  );
};

export default HomePage;
