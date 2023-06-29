import { Box, Flex, Text } from '@chakra-ui/react';

type ListItemProps = {
  text: string;
  onClick: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ text, onClick }) => {
  return (
    <Box
      as="div"
      p={2}
      shadow={'md'}
      w={'100%'}
      sx={{ textDecoration: 'none' }}
      rounded={'md'}
      bg={'blue.100'}
      mb={2}
      onClick={onClick}
    >
      <Flex>
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default ListItem;
