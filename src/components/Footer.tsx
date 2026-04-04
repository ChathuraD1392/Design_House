import logo from '../assets/logo.svg';
import { footerLinks } from '../utils/constants';

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 pt-16 px-8 font-sans border-t border-zinc-600'>
      <div className='max-w-7xl mx-auto'>
        {/* Changed to 6-column grid for precise control */}
        <div className='grid grid-cols-1 md:grid-cols-6 gap-12 mb-10'>
          {/* 1. Logo Section - Occupies 2 Columns */}
          <div className='md:col-span-2 space-y-6'>
            <div className='flex flex-col items-start'>
              <div className='w-48 h-20 mb-4'>
                <img
                  src={logo}
                  alt='Logo'
                  className='w-full h-full object-contain object-left'
                />
              </div>
              <span className='text-2xl font-semibold tracking-tight font-saira text-white uppercase'>
                The Design House DDS (pvt) Ltd
              </span>
            </div>
            <p className='text-xs leading-relaxed max-w-sm'>
              Crafting modern spaces with timeless elegance. Join our journey in
              architectural excellence.
            </p>
          </div>

          {/* 2. Company Links - Occupies 1 Column */}
          <div className='md:col-span-1 space-y-4'>
            <h4 className='text-sm font-bold uppercase tracking-widest text-white mb-6'>
              Company
            </h4>
            <ul className='space-y-3 text-xs'>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href='#'
                    className='hover:text-white transition uppercase text-slate-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Section - Occupies 1 Column */}
          <div className='md:col-span-1 space-y-4'>
            <ul className='space-y-3 text-xs text-slate-300'>
              <li className='mb-5'>
                <h4 className='text-sm font-bold uppercase tracking-widest text-white'>
                  Email
                </h4>
                <span className='lowercase block text-slate-300 mt-1'>
                  contact@designhouse.com
                </span>
              </li>
              <li className='mt-4 mb-4'>
                <h4 className='text-sm font-bold uppercase tracking-widest text-white'>
                  Address
                </h4>
                <span className='block ext-slate-300 mt-1'>
                  1562/A, Kottawa-Malabe Rd, Katukurunda, Pannipitiya
                </span>
              </li>
              <li className='mt-4 mb-4'>
                <h4 className='text-sm font-bold uppercase tracking-widest text-white'>
                  Contact
                </h4>
                <span className='block ext-slate-300 mt-1'>
                  +94 77 240 1227
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Section - Occupies 2 Columns */}
          <div className='md:col-span-2 space-y-4'>
            <h4 className='text-sm font-bold uppercase tracking-widest text-white mb-6'>
              Join a Newsletter
            </h4>
            <p className='text-xs mb-4'>
              Subscribe to get the latest interior design tips and updates.
            </p>
            <div className='flex items-center space-x-2'>
              <div className='relative grow'>
                <span className='absolute inset-y-0 left-3 flex items-center text-gray-500'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </span>
                <input
                  type='email'
                  placeholder='your@email.com'
                  className='w-full bg-zinc-900 border border-gray-700 rounded py-2.5 pl-10 pr-4 focus:outline-none focus:border-white transition text-sm text-white'
                />
              </div>
              <button className='bg-white hover:bg-gray-200 text-black px-4 py-2.5 rounded font-bold transition flex items-center justify-center'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center'>
          <h2 className='text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase'>
            © {new Date().getFullYear()} THE DESIGN HOUSE. All Rights Reserved
          </h2>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a href='#' className='text-[10px] hover:text-white transition'>
              PRIVACY POLICY
            </a>
            <a href='#' className='text-[10px] hover:text-white transition'>
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
