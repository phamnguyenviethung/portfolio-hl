import Layout from 'components/common/Layout';
import React from 'react';
import background from 'img/background.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = () => {
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
      TODO Contact
    </Layout>
  );
};

export default Contact;
