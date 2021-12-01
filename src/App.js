import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'app/theme';
import About from 'pages/about';
import Home from 'pages/home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// const Home = React.lazy(() => import('pages/home'));
// const About = React.lazy(() => import('pages/about'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      {/* </Suspense> */}
    </ThemeProvider>
  );
}

export default App;
