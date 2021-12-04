import Layout from 'components/common/Layout';
import React from 'react';
import background from 'img/background.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import Me from 'components/Me';
import Experience from 'components/Experience';

const About = () => {
  const matches = useMediaQuery('(max-width:900px)');
  if (matches) {
    return <div>TODO mobile</div>;
  }
  return (
    <Layout
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${background})`,
      }}
      disableGutters
      maxWidth='xl'
    >
      <Me />
      <Experience />
    </Layout>
  );
};

export default About;
