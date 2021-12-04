import Layout from 'components/common/Layout';
import Intro from 'components/Intro';
import React from 'react';
import background from 'img/background.svg';

const Home = () => {
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
};

export default Home;
