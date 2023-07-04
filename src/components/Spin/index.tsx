import React from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react';

const Spin = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems="center"
      height={'100vh'}
    >
      <CircularProgress />
    </Flex>
  );
};

export default Spin;
