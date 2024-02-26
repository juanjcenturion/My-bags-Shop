import { Container } from '@mui/material';
import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/Theme';
import Appbar from './components/appbar/appbar';
import Banner from './components/banner/banner';
import Promotions from './components/promotions/promotions';

function App() {
  useEffect (() => {
    document.title = 'React Mui - Home'
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <Appbar/>
        <Banner/>
        <Promotions/>
        {
          /*
          Promotions
          Title
          Footer
          Searchbox
          appdrawer
          */
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
