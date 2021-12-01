import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import avatar from 'img/avatar.svg';
import bgLogo from 'img/bgLogo.svg';
import React from 'react';
import { contactItemList, navbarHeight, navbarHeightMobile } from 'app/data';

const ContactItem = ({ image, text, type }) => {
  return (
    <Stack spacing={4} direction='text' sx={{ width: '100%' }}>
      <img
        src={image}
        alt={text}
        style={{ opacity: '0.8', marginRight: '10px' }}
      />
      {type === 'link' ? (
        <Link
          href={'https://' + text}
          underline='always'
          sx={{ color: '#e8e8e8', opacity: '0.5', whiteSpace: 'nowrap' }}
        >
          {text}
        </Link>
      ) : (
        <p style={{ color: '#e8e8e8', opacity: '0.5', whiteSpace: 'nowrap' }}>
          {text}
        </p>
      )}
    </Stack>
  );
};

const Intro = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Grid
        container
        sx={{
          height: `calc(100% - ${matches ? navbarHeight : navbarHeightMobile})`,
        }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          sx={{ width: '100%', height: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <img src={avatar} alt='avatar' />
          </Box>
        </Grid>
        <Grid
          item
          md={12}
          lg={8}
          sx={{
            position: 'relative',
            zIndex: 3,
            display: matches ? 'flex' : 'none',
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${bgLogo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: '0.12',
              height: '100%',
              width: '100%',
              zIndex: 2,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <Box
            px='20px'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
              flexDirection: 'column',
            }}
          >
            <Stack direction='column' spacing={12}>
              <Stack direction='column' spacing={2}>
                <Typography
                  component='h3'
                  align='left'
                  sx={{
                    WebkitTextStroke: '1px #E8E8E8',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '72px',
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    backgroundColor: 'none',
                    color: 'none',
                  }}
                >
                  Hello
                </Typography>
                <Typography
                  align='left'
                  component='h3'
                  sx={{
                    fontWeight: '800',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    color: 'brand.yellow',
                    fontSize: '28px',
                    lineHeight: '33.6px',
                  }}
                >
                  I'm Đinh Hoàng Long
                </Typography>
                <Typography
                  component='h3'
                  align='right'
                  sx={{
                    color: 'brand.white',
                  }}
                >
                  Graphic Designer
                </Typography>
              </Stack>
              <Button
                variant='text'
                sx={{
                  backgroundColor: 'brand.btn',
                  color: 'white',
                  width: '160px',
                  height: '42px',
                  padding: '9px 24px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: '500',
                  ':hover': {
                    backgroundColor: 'white',
                    color: 'brand.btn',
                  },
                }}
              >
                More about me
              </Button>
            </Stack>
            <Stack
              zIndex='4'
              spacing={10}
              direction='row'
              justifyContent='center'
              sx={{
                position: 'absolute',
                bottom: '10px',
                minWidth: '84%',
              }}
            >
              {contactItemList.map((item, key) => {
                return <ContactItem {...item} key={key} />;
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
