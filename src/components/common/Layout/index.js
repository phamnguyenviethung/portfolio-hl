import React from 'react';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import { Container } from '@mui/material';

const Layout = props => {
  return (
    <Container {...props}>
      <Navbar />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;
