type Project = {
  company: string;
  companyLogo?: string;
  designation: string;
  productTitle: string;
  productImage?: string;
  cardImage?: string;
};

export const PROJECTS: Project[] = [
  {
    company: 'Strands',
    companyLogo: './img/ocbc-logo-white.png',
    designation: 'Front-end Engineer',
    productTitle: 'OCBC Bank',
    productImage: './img/OCBC.svg',
    cardImage: './img/project-card-ocbc.jpg',
  },
  {
    company: 'Strands',
    companyLogo: './img/huntington-logo-white.png',
    designation: 'Front-end Engineer',
    productTitle: 'Huntington HUB',
    productImage: './img/Huntington.svg',
    cardImage: './img/project-card-huntington.jpg',
  },
  {
    company: 'Strands',
    companyLogo: './img/strands-logo-white.png',
    designation: 'Front-end Engineer',
    productTitle: 'Strands BFM',
    productImage: './img/Strands.png',
    cardImage: './img/project-card-bfm.jpg',
  },
  {
    company: 'Strands',
    companyLogo: './img/teb-logo-white.png',
    designation: 'Front-end Engineer',
    productTitle: 'TEB BFM',
    productImage: './img/TEB.png',
    cardImage: './img/project-card-teb.jpg',
  },
];

type Company = {
  name: string;
  logoDark: string;
  logoLight: string;
  fallback: string;
};

export const COMPANIES: Company[] = [
  {
    name: 'B2B',
    logoDark: './img/b2b-logo.png',
    logoLight: './img/b2b-logo-white.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'Huntington Bank',
    logoDark: './img/huntington-logo.png',
    logoLight: './img/huntington-logo-white.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'OCBC Bank',
    logoDark: './img/ocbc-logo.png',
    logoLight: './img/ocbc-logo-white.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'TEB Bank',
    logoDark: './img/teb-logo.png',
    logoLight: './img/teb-logo-white.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'Strands',
    logoDark: './img/strands-logo.png',
    logoLight: './img/strands-logo-white.png',
    fallback: 'https://via.placeholder.com/80',
  },
  {
    name: 'Plesk',
    logoDark: './img/plesk-logo.svg',
    logoLight: './img/plesk-logo-white.png',
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
    link: 'https://github.com/pourya7',
  },
  {
    name: 'LinkedIn',
    logo: './img/linkedin.svg',
    link: 'https://www.linkedin.com/in/pourya-dashtegolipour-30356b10b/',
  },
];

type Testimonial = {
  name: string;
  image: string;
  title: string;
  company: string;
  testimonial: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dan Abramov',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis, laboriosam magnam!',
    image: 'https://bit.ly/dan-abramov',
    title: 'CEO',
    company: 'Strands',
  },
  {
    name: 'Kent C. Dodds',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis, laboriosam magnam!',
    image: 'https://bit.ly/kent-c-dodds',
    title: 'PM',
    company: 'Huntington Project',
  },
  {
    name: 'Kent C. Dodds',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis, laboriosam magnam!',
    image: 'https://bit.ly/kent-c-dodds',
    title: 'Team Leader',
    company: 'OCBC Project',
  },
  {
    name: 'Kent C. Dodds',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis, laboriosam magnam!',
    image: 'https://bit.ly/kent-c-dodds',
    title: 'CTO',
    company: 'Sitejet',
  },
];

export const CALENDLY_LINK = 'https://calendly.com/pourya7/30min';
export const CV_LINK =
  'https://docs.google.com/document/d/1O1Gb5ex5qZaoJOz-RHR9TOhaZ4I5ZO9cRNx2Ga4eMdY/edit?usp=sharing';

export const YEARS = new Date().getFullYear() - 2014;
