import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GodDragonSvg from 'components/GodDragonSvg';

function Destop() {
  const move = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/img/bgLogoDestop.png), #0D8059',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          mixBlendMode: 'multiply',
          zIndex: -3,

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
      <Box
        sx={{
          width: '40%',
          marginTop: '100px',
          img: {
            height: '80%',
          },
        }}
      >
        <CardMedia component='img' src='img/cover.svg' />
      </Box>
      <Box sx={{ width: '60%' }}>right</Box>
    </Box>
  );
}

export default Destop;
