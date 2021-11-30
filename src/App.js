import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import background from 'img/background.svg';
import Navbar from 'components/common/Navbar';
import theme from 'app/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          backgroundImage: `url(${background})`,
          height: '100vh',
          width: '100%',
        }}
        maxWidth='xl'
        disableGutters
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
