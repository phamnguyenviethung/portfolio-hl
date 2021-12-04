import Layout from 'components/common/Layout';
import Me from 'components/Me';
import Experience from 'components/Experience';
import React from 'react';
import background from 'img/background.svg';

const About = () => {
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
