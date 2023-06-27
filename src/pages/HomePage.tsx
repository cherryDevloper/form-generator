import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <Layout>
      <Button
        colorScheme="teal"
        variant="solid"
      >
        <Link to={'/form-generator'}>Create Form</Link>
      </Button>
    </Layout>
  );
};

export default HomePage;
