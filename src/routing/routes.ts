import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import { Contact } from '../Contact';
import Gallery from '../Gallery';
import Layout from './Layout';
import FAQ from '../FAQ';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'gallery', Component: Gallery },
      { path: 'contact', Component: Contact },
      { path: 'faqs', Component: FAQ },
    ],
  },
]);

export default router;
