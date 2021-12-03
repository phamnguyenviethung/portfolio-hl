// import Layout from 'components/common/Layout';
import Intro from 'components/Intro';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Mobile from './Mobile';

const Home = () => {
  const matches = useMediaQuery('(max-width:900px)');
  if (matches) {
    return <Mobile />;
  }
  return <Intro />;
};

export default Home;
