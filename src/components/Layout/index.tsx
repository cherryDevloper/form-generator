import { Flex, Text, Box } from '@chakra-ui/react';
import { LayoutProps } from './Layout.types';

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
