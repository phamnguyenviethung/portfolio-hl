// import Layout from 'components/common/Layout';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Mobile from './Mobile';
import Destop from './Destop';

const Home = () => {
  const matches = useMediaQuery('(max-width:900px)');
  if (matches) {
    return <Mobile />;
  }
  return <Destop />;
};

export default Home;
