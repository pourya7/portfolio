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
