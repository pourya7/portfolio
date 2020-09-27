type Company = {
  name: string;
  logo: string;
  fallback: string;
};

export const COMPANIES: Company[] = [
  {
    name: 'Huntington Bank',
    logo: './img/huntington-logo.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'OCBC Bank',
    logo: './img/ocbc-logo.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'TEB Bank',
    logo: './img/teb-logo.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'Strands',
    logo: './img/strands-logo.png',
    fallback: 'https://via.placeholder.com/80',
  },
];

type SocialMedia = {
  name: string;
  logo: string;
  link: string;
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Github',
    logo: './img/github.svg',
    link: 'https://github.com/bexic',
  },
  {
    name: 'LinkedIn',
    logo: './img/linkedin.svg',
    link: 'https://www.linkedin.com/in/pourya-dashtegolipour-30356b10b/',
  },
];
