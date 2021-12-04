// import Layout from 'components/common/Layout';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Mobile from './Mobile';
import Destop from './Destop';

const Home = () => {
<<<<<<< HEAD
  return (
    <Layout
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${background})`,
        mixBlendMode: 'multiply',
      }}
      disableGutters
      maxWidth='xl'
    >
      <Intro />
    </Layout>
  );
=======
  const matches = useMediaQuery('(max-width:900px)');
  if (matches) {
    return <Mobile />;
  }
  return <Destop />;
>>>>>>> origin/develop
};

export default Home;
