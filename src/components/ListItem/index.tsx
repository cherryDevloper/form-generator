import { EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

type ListItemProps = {
  text: string;
  onClick: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ text, onClick }) => {
  return (
    <Box
      as="div"
      p={6}
      shadow={'md'}
      w={'100%'}
      sx={{ textDecoration: 'none' }}
      rounded={'md'}
      bg={'white.50'}
      mb={8}
      cursor={'pointer'}
      onClick={onClick}
    >
      <Flex justifyContent={'space-between'}>
        <Text fontSize={'xl'}>{text}</Text>
        <EditIcon color={'blue.400'} />
      </Flex>
    </Box>
  );
};

export default ListItem;
