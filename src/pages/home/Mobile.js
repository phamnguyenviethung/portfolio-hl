import {
  AppBar,
  CardMedia,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import GodDragonSvg from 'components/GodDragonSvg';
import Logo from 'components/Logo';
import { Fragment } from 'react';

function Mobile() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/img/bg_Logo.svg), #0D8059',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          mixBlendMode: 'multiply',
          zIndex: -2,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          background: 'url(/img/Blue_Wall_BG.svg), #0D8059',
          backgroundSize: 'cover',
          opacity: 0.5,
          mixBlendMode: 'multiply',
          zIndex: -1,
        },
      }}
    >
      <AppBar position='static' color='transparent' sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <GodDragonSvg style={{ height: 34.66 }} />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          position: 'relative',
          '#c_cover': {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            img: {
              height: '100%',
              width: 'auto',
            },
          },
        }}
      >
        <div id='c_cover'>
          <CardMedia component='img' src='img/cover.svg' />
        </div>
      </Box>
      <Typography
        paragraph
        sx={{
          color: '#E8E8E8',
          fontFamily: 'Be Vietnam Pro',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        (+84) 937 874 992
      </Typography>
      <Typography
        paragraph
        sx={{
          color: '#E8E8E8',
          fontFamily: 'Be Vietnam Pro',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        hoanglong511989@gmail.com
      </Typography>
    </Box>
  );
}

export default Mobile;
