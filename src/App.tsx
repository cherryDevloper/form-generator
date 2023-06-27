import HomePage from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
