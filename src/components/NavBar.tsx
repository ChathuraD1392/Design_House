import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

export const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const links = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Gallery', href: '/gallery' },
    { id: 4, name: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <div className='navbar bg-black'>
        <div className='navbar-start'>
          <Link to={'/'}>
            <div className='align-middle flex'>
              <img src={logo} alt='logo' className='w-24 pl-5' />
              {/* <span className='font-saira text-justify'>THE DESIGN HOUSE</span> */}
            </div>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-3 font-light font-monserret'>
            {links.map((link) => (
              <li key={link.id} className='mx-3'>
                <Link
                  to={link.href}
                  className={
                    pathname === link.href
                      ? 'hover:bg-transparent font-normal text-amber-500'
                      : 'hover:bg-transparent'
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'></div>
      </div>
    </>
  );
};
