import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormGenratorPage from './pages/FormGenratorPage';
function App() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/form-generator"
            element={<FormGenratorPage />}
          />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
