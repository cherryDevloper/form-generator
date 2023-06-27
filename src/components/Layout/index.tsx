import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box
        as="header"
        p={4}
        bg="gray.200"
      >
        {/* Add your header content here */}
      </Box>

      <Box
        flex="1"
        p={4}
      >
        {children}
      </Box>

      <Box
        as="footer"
        p={4}
        bg="gray.200"
      >
        {/* Add your footer content here */}
      </Box>
    </Box>
  );
};

export default Layout;
