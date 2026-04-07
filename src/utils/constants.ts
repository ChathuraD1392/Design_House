import image_1 from '../assets/image4.jpg';
import image_2 from '../assets/image2.avif';
import image_3 from '../assets/image5.jpg';
import image_4 from '../assets/image3.jpg';

export const links = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Gallery', href: '/gallery' },
  { id: 4, name: 'Contact', href: '/contact' },
  { id: 5, name: 'FAQS', href: '/faqs' },
];

export const footerLinks = [
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Gallery', href: '/gallery' },
  { id: 4, name: 'Contact', href: '/contact' },
  { id: 5, name: 'FAQS', href: '/faqs' },
];

export const slides = [
  {
    id: 'slide1',
    img: image_1,
    title: 'WE CREATE YOUR SPACE WITH A SMILE...',
    prev: 'slide4',
    next: 'slide2',
  },
  {
    id: 'slide2',
    img: image_2,
    title: 'Innovative Design',
    prev: 'slide1',
    next: 'slide3',
  },
  {
    id: 'slide3',
    img: image_3,
    title: 'Ultimate Comfort',
    prev: 'slide2',
    next: 'slide4',
  },
  {
    id: 'slide4',
    img: image_4,
    title: 'Premium Quality',
    prev: 'slide3',
    next: 'slide1',
  },
];
