import './App.css';
import Home from './Home/Home';
import ResponsiveAppBar from './components/AppBar'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Container maxWidth="lg">
        <Box sx={{pt: 5, px: 5, bgcolor: 'white'}}>
          <Home/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
