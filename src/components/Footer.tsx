import logo from '../assets/logo.svg';
import { footerLinks, links } from '../utils/constants';

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-gray-400 py-16 px-8 font-sans'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
            <div>
              <div className='flex items-center space-x-3 text-white mb-8'>
                <div className='w-80 h-32 flex items-center justify-center'>
                  <img src={logo} className='p-2' />
                </div>
                <span className='text-3xl font-semibold tracking-tight font-saira'>
                  THE DESIGN HOUSE
                </span>
              </div>
            </div>

            <div className='space-y-4'></div>

            <div className='space-y-4'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-6'>
                Newsletter
              </h4>
              <div className='flex items-center space-x-2'>
                <div className='relative flex-grow'>
                  <span className='absolute inset-y-0 left-3 flex items-center text-gray-500'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      ></path>
                    </svg>
                  </span>
                  <input
                    type='email'
                    placeholder='your@email.com'
                    className='w-full bg-transparent border border-gray-700 rounded py-2 pl-10 pr-4 focus:outline-none focus:border-white transition text-sm'
                  />
                </div>
                <button className='bg-gray-200 hover:bg-white text-black p-2 rounded transition'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className='space-y-4'>
              <h4 className='text-md font-bold uppercase tracking-widest text-gray-600 mb-6'>
                Company
              </h4>
              <ul className='space-y-3 text-sm'>
                {footerLinks.map((link) => (
                  <li>
                    <a
                      href='#'
                      className='hover:text-white transition uppercase'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className='lg:col-span-1'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-6'>
                Newsletter
              </h4>
              <div className='flex items-center space-x-2'>
                <div className='relative flex-grow'>
                  <span className='absolute inset-y-0 left-3 flex items-center text-gray-500'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      ></path>
                    </svg>
                  </span>
                  <input
                    type='email'
                    placeholder='your@email.com'
                    className='w-full bg-transparent border border-gray-700 rounded py-2 pl-10 pr-4 focus:outline-none focus:border-white transition text-sm'
                  />
                </div>
                <button className='bg-gray-200 hover:bg-white text-black p-2 rounded transition'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </button>
              </div>
            </div> */}
          </div>

          <div className='border-t border-gray-600 pt-10 pb-4 overflow-hidden select-none'>
            <h2 className='text-[7vw] font-black leading-none text-[#3d3b3b] whitespace-nowrap tracking-tighter opacity-50 uppercase italic'>
              FOLLOW YOUR DREAMZ
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
