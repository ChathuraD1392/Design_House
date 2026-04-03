import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { links } from '../utils/constants';

export const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

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
          <ul className='menu menu-horizontal px-3 font-light font-monserret uppercase'>
            {links.map((link) => (
              <li key={link.id} className='mx-3'>
                <Link
                  to={link.href}
                  className={
                    pathname === link.href
                      ? 'hover:bg-transparent font-normal underline underline-offset-8'
                      : 'hover:bg-transparent text-white'
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
