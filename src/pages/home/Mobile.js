import { Box } from '@mui/system';
import Logo from 'components/Logo';

function Mobile() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        '#bg': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0D8059',
          zIndex: -3,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '#logo': { width: '150vw', height: '150vw' },
        },
      }}
    >
      <div id='bg'>
        <Logo id='logo' />
      </div>
    </Box>
  );
}

export default Mobile;
