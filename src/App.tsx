import HomePage from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormGenratorPage from './pages/FormGenratorPage';
function App() {
  return (
    <ChakraProvider>
      <Router>
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
      </Router>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
