import { Flex, Text, Box, VStack } from '@chakra-ui/react';
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
          border="1px solid #90cdf4"
        >
          <Flex
            alignItems="center"
            mb={4}
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              bg="blue.200"
              w={'full'}
              p={3}
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
          bg="blue.100"
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
