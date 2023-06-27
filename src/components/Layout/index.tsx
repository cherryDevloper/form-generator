import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minHeight="100vh">
      <Flex
        flex="1"
        justifyContent="start"
      >
        <Box
          w="250px"
          bg="gray.200"
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
              My Forms
            </Text>
          </Flex>

          <VStack
            spacing={4}
            align="stretch"
          >
            <Box
              py={2}
              px={4}
              bg="gray.300"
              rounded="md"
            >
              sample
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        w={'100%'}
      >
        <Box
          as="header"
          p={4}
          bg="blue.200"
        >
          Form Generator
        </Box>
        <Box
          flex="1"
          p={4}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
