import Layout from 'components/common/Layout';
<<<<<<< HEAD
import Me from 'components/Me';
import Experience from 'components/Experience';
import React from 'react';
import background from 'img/background.svg';

const About = () => {
=======
import React from 'react';
import background from 'img/background.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const About = () => {
  const matches = useMediaQuery('(max-width:900px)');
  if (matches) {
    return <div>TODO mobile</div>;
  }
>>>>>>> origin/develop
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
<<<<<<< HEAD
      <Me />
      <Experience />
=======
      TODO AboutS
>>>>>>> origin/develop
    </Layout>
  );
};

export default About;
