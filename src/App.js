import { Button, Container } from '@mui/material';
import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/Theme';
import Appbar from './components/appbar/appbar';

function App() {
  useEffect (() => {
    document.title = 'React Mui - Home'
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <Appbar/>
        {
          /*
          Appbar
          Banner
          Promotions
          Title
          Footer
          Searchbox
          appdrawer
          */
        }
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
