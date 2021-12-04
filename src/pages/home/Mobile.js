import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GodDragonSvg from 'components/GodDragonSvg';

function Mobile() {
  const move = useNavigate();
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
              marginRight: 6,
            },
          },
          '#c_more_about_me': {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <div id='c_cover'>
          <CardMedia component='img' src='img/cover_info.png' />
        </div>

        <div id='c_more_about_me'>
          <Button
            sx={{
              textTransform: 'capitalize',
              color: '#FFFFFF',
              background: '#A32541',
              boxShadow: '0px 4px 4px rgb(0 0 0 / 35%)',
              borderRadius: '30px',
              px: 4,
              marginTop: 10,
              '&:active, &:hover': {
                background: '#A32541',
              },
            }}
            onClick={() => move('about')}
          >
            More About Me
          </Button>
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
