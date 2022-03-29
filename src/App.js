import './App.css';
import Home from './Home/Home';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Box sx={{pt: 5, px: 5, bgcolor: 'white'}}>
          <Home/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
