import React from 'react';
import logo from 'img/logo.svg';
import { Container, Stack, Divider } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    navItem: {
      textTransform: 'uppercase',
      color: '#fff',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '23px',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.brand.red,
      },
    },
  })
);

const itemList = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About Me',
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];

const NavItem = props => {
  return <p className={props.class}>{props.text}</p>;
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <Container
      sx={{
        height: '100px',
        background: ' rgba(5, 51, 36, 0.75)',
        backdropFilter: 'blur(30px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 3%',
        // position: 'absolute',
        // top: '0',
        // right: '0',
        // left: '0',
      }}
      maxWidth='xl'
      disableGutters={true}
    >
      <img src={logo} alt='logo' style={{ height: '80px', width: '150px' }} />
      <Stack
        direction='row'
        divider={
          <Divider
            sx={{
              backgroundColor: theme => theme.palette.brand.red,
              width: '2px',
            }}
            orientation='vertical'
            flexItem
          />
        }
        spacing={4}
        sx={{
          alignItems: 'center',
        }}
      >
        {itemList.map((item, key) => (
          <NavItem key={key} class={classes.navItem} text={item.label} />
        ))}
      </Stack>
    </Container>
  );
};

export default Navbar;
