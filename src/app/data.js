import globe from 'img/globe.svg';
import mail from 'img/mail.svg';
import phone from 'img/phone.svg';

export const EMAIL = 'hoanglong511989@gmail.com';
export const PHONE_NUMBER = '(+84) 937 874 992';
export const FACEBOOK_LINK = 'facebook.com/hoanglong5189/';
export const NAME = 'Dinh Hoang Long';
export const JOB_TITLE = 'graphics design';

export const navbarHeight = '100px';
export const navbarHeightMobile = '70px';

export const contactItemList = [
  {
    type: 'text',
    image: phone,
    text: PHONE_NUMBER,
  },
  {
    type: 'text',
    image: mail,
    text: EMAIL,
  },
  {
    type: 'link',
    image: globe,
    text: FACEBOOK_LINK,
  },
];

export const navItemList = [
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
