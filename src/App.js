import { Container } from '@mui/material';
import './App.css';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/Theme';
import Appbar from './components/appbar/appbar';
import Banner from './components/banner/banner';

function App() {
  useEffect (() => {
    document.title = 'React Mui - Home'
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <Appbar/>
        <Banner/>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
