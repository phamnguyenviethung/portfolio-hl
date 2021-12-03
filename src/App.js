import React, { Fragment, useMemo, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// comps
import GodDragonSvg from 'components/GodDragonSvg';
import PhoneCallSvg from 'components/PhoneCallSvg';
import MenuSvg from 'components/MenuSvg';
import LineSvg from 'components/LineSvg';

// pages
import About from 'pages/about';
import Contact from 'pages/contact';
import Home from 'pages/home';
import Portfolio from 'pages/portfolio';

const navD = [
  { key: 1, to: '/', lb: 'HOME' },
  { key: 2, to: 'about', lb: 'ABOUT ME' },
  { key: 3, to: 'portfolio', lb: 'PORTFOLIO' },
  { key: 4, to: 'contact', lb: 'CONTACT' },
];

const Btn = props => (
  <Button component={NavLink} to='/' className='btn' {...props} />
);

function App() {
  const [o, setO] = useState(false);
  const matches = useMediaQuery('(max-width:900px)');


  const btnList = useMemo(
    () =>
      navD.map(({ key, to, lb }) => (
        <Btn
          key={key}
          to={to}
          style={({ isActive }) =>
            isActive ? { color: '#CC3D55' } : undefined
          }
        >
          {lb}
        </Btn>
      )),
    []
  );

  const btnListM = useMemo(
    () =>
      navD.map(({ key, to, lb }, ix) => (
        <Fragment key={key}>
          <Btn to={to} onClick={() => setO(false)}>
            {lb}
          </Btn>
          {ix < navD.length - 1 && <LineSvg />}
        </Fragment>
      )),
    []
  );

  return (
    <>
      {/* For Destop Navigation */}
      {!(matches && window.location.pathname === '/') && (
        <AppBar>
          <Toolbar
            sx={{
              height: { sx: '64px', md: '100px' },
              backgroundColor: '#053324',
              justifyContent: matches ? 'space-between' : 'unset',
            }}
          >
            {matches && (
              <IconButton size='large'>
                <PhoneCallSvg />
              </IconButton>
            )}
            <GodDragonSvg style={matches ? { height: 34.66 } : undefined} />

            {matches && (
              <IconButton size='large' onClick={() => setO(true)}>
                <MenuSvg />
              </IconButton>
            )}

            {!matches && (
              <ButtonGroup
                variant='text'
                aria-label='btn navigation'
                color='inherit'
                sx={{
                  marginLeft: 'auto',
                  '.btn': {
                    borderColor: '#CC3D55 !important',
                    borderWidth: '2px !important',
                    paddingX: 2,
                    fontFamily: 'Be Vietnam Pro',
                    fontSize: '16px',
                    fontWeight: 800,
                    lineHeight: '23px',
                  },
                }}
              >
                {btnList}
              </ButtonGroup>
            )}
          </Toolbar>
        </AppBar>
      )}
      {/* for Mobile Navigation */}
      {matches && (
        <SwipeableDrawer
          anchor='right'
          open={o}
          onClose={() => setO(false)}
          onOpen={() => setO(true)}
          PaperProps={{
            sx: {
              width: '100%',
              backgroundColor: 'transparent',
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              alignContent: 'center',
              boxShadow: 'none',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              alignContent: 'center',
              paddingX: 4,
              backgroundColor: '#0D8059',
              flexDirection: 'column',
              '.btn': {
                borderColor: '#CC3D55 !important',
                borderWidth: '2px !important',
                paddingX: 2,
                fontFamily: 'Be Vietnam Pro',
                fontSize: '16px',
                fontWeight: 800,
                lineHeight: '43px',
                color: '#FFB21A',
              },
            }}
          >
            {btnListM}
          </Box>
        </SwipeableDrawer>
      )}

      {/* Main Route */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
