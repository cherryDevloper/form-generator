import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@chakra-ui/react';
const HomePage = () => {
  return (
    <Layout>
      <Button
        colorScheme="teal"
        variant="solid"
      >
        Create Form
      </Button>
    </Layout>
  );
};

export default HomePage;
