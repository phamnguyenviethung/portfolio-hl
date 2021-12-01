import { Container, Divider, Stack } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { navItemList } from 'app/data';
import logo from 'img/logo.svg';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const useStyles = makeStyles(theme =>
  createStyles({
    navItem: {
      textTransform: 'uppercase',
      color: '#fff',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '23px',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.brand.red,
      },
    },
    navItemActive: {
      textTransform: 'uppercase',
      color: theme.palette.brand.red,
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '23px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  })
);

const NavItem = props => {
  return (
    <NavLink
      to={props.path}
      className={path =>
        path.isActive ? props.class.navItemActive : props.class.navItem
      }
    >
      {props.text}
    </NavLink>
  );
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
      <Link
        to='/'
        style={{
          padding: 0,
          margin: 0,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt='logo' />
      </Link>
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
        {navItemList.map((item, key) => (
          <NavItem
            key={key}
            class={classes}
            text={item.label}
            path={item.path}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Navbar;
