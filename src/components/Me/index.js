import { useTheme } from '@emotion/react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { navbarHeight, navbarHeightMobile, NAME, JOB_TITLE } from 'app/data';
import React from 'react';
import avatar from 'img/avatar2.svg';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import bgLogo from 'img/bgLogo.svg';

const useStyles = makeStyles(theme => ({
  paragraph: {
    color: theme.palette.brand.white,
    fontSize: '16px',
    lineHeight: '27.2px',
    fontWeight: '400',
    marginBottom: '24px',
    fontFamily: 'Be VietNam',
    zIndex: 3,
  },
  hightlight: {
    backgroundColor: theme.palette.brand.red,
    color: theme.palette.brand.white,
    display: 'inline',
    fontFamily: 'Be VietNam',
    zIndex: 3,
  },
}));

const Me = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Grid
      container
      sx={{
        height: `calc(100vh - ${matches ? navbarHeight : navbarHeightMobile})`,
        marginTop: 0,
        overflow: 'hidden',
      }}
      spacing={2}
    >
      <Grid
        item
        md={12}
        lg={6}
        sx={{
          width: '100%',
          height: '100%',
          display: matches ? 'flex' : 'none',
          zIndex: 2,
        }}
      >
        <img src={avatar} alt='avatar' />
      </Grid>{' '}
      <Grid
        item
        direction='column'
        xs={12}
        md={12}
        lg={6}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${bgLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.2',
            height: '100%',
            width: '100%',
            zIndex: 4,
            position: 'absolute',
            top: 0,
            left: '-14%',
            right: 0,
            bottom: 0,
            transform: 'scale(1.4)',
          }}
        />
        <Typography className={classes.paragraph} variant='h4' component='p'>
          My name is <p className={classes.hightlight}>{NAME}</p> , live in Ho
          Chi Minh city in Vietnam. Although I do not come from an artistic
          family, since I was a child I have been very interested in art. So I
          determined that I would choose art as my career in the future. I chose{' '}
          <p className={classes.hightlight}>{JOB_TITLE}</p> to start my career.
        </Typography>
        <Typography className={classes.paragraph} variant='h4' component='p'>
          In 2011, I graduated with a bachelor's degree in {JOB_TITLE} from the
          Saigon College for Art Culture and Tourism. And working in the field
          of {JOB_TITLE} until now.
        </Typography>
        <Typography className={classes.paragraph} variant='h4' component='p'>
          Because I love art, I am{' '}
          <p className={classes.hightlight}>
            always looking for opportunities to develop myself
          </p>{' '}
          in this field. In the process of working with 2D static
          {JOB_TITLE} I also learn more about motion and 3D graphics, and also
          the field of UX/UI to match the needs of the market. This made me very
          excited to do it.
        </Typography>{' '}
        <Typography className={classes.paragraph} variant='h4' component='p'>
          However, art is limitless and with the continuous development of
          today's society, I am constantly learning and learning more to show
          all my products better in the future.
        </Typography>
        ;
      </Grid>
    </Grid>
  );
};

export default Me;
