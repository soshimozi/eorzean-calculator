import './App.css';
import { Container } from '@mui/material';
import Appbar from './components/Appbar';
import EorzeanCalculator from './pages/EorzeanCalculator';

const App = () => {
   
  return (
    <Container>
      <Appbar />
      <EorzeanCalculator />
    </Container>
  );
}

export default App;
