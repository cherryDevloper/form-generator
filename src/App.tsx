import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Suspense } from 'react';
import { routes } from './constants/routes';
import queryClient from './api/queryClient';
import Spin from './components/Spin';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider>
          <Suspense fallback={<Spin />}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
