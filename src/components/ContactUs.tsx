import { BsTelephone } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { MdOutlineLocationOn } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div
      className='relative text-white min-h-screen flex items-center justify-center p-6 md:p-10 bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/image3.jpg')`,
      }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 max-w-7xl w-full'>
        {/* LEFT SIDE: Form Container */}

        <div className='flex flex-col justify-between py-4'>
          <div className='space-y-6'>
            <h6 className='uppercase tracking-widest text-sm text-gray-400 font-medium'>
              Contact Us
            </h6>
            <h2 className='text-5xl md:text-7xl font-light leading-tight uppercase font-sans'>
              Let's start your <br /> project
            </h2>
          </div>

          <div className='mt-16 lg:mt-0 space-y-12'>
            {/* Phone Info */}
            <div>
              <p className='flex items-center gap-2 uppercase tracking-widest text-sm font-semibold mb-3'>
                <BsTelephone />
                Phone
              </p>
              <p className='text-gray-400 text-lg'>+94 77 240 1227</p>
            </div>

            {/* Address Info */}
            <div className='relative'>
              <p className='flex items-center gap-2 uppercase tracking-widest text-sm font-semibold mb-3'>
                <MdOutlineLocationOn />
                Address
              </p>
              <p className='text-gray-400 text-lg'>
                1562/A, Kottawa-Malabe Rd, Katukurunda, Pannipitiya
              </p>

              {/* Bottom Decoration: Image and Number */}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className=' font-light border border-white/10 p-8 md:p-12 rounded-sm'>
          <form className='space-y-6'>
            {/* Name Row */}
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='firstname'>First Name</label>
                <input
                  type='text'
                  placeholder='Amal'
                  className='input input-bordered bg-transparent border-white/20 w-full rounded-md focus:border-white h-14'
                />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='lastname' className=''>
                  Last Name
                </label>
                <input
                  type='text'
                  placeholder='Perera'
                  className='input input-bordered bg-transparent border-white/20 w-full rounded-md focus:border-white h-14'
                />
              </div>
            </div>

            {/* Address Input */}
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor='address'>Address</label>

              <input
                type='text'
                placeholder='No. 123 Kottawa Rd, Pannipitiya'
                className='input input-bordered bg-transparent border-white/20 w-full rounded-md focus:border-white h-14'
              />
            </div>

            {/* Email Input */}
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='example@email.com'
                className='input input-bordered bg-transparent border-white/20 w-full rounded-md focus:border-white h-14'
              />
            </div>

            {/* Phone Input */}
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor='mobile'>Contact No</label>
              <input
                type='tel'
                placeholder='077 123 4567'
                className='input input-bordered bg-transparent border-white/20 w-full rounded-md focus:border-white h-14'
              />
            </div>

            {/* Submit Button */}
            <div className='text-right'>
              <button className='btn uppercase font-monserret border-0 bg-black mt-4 md:mt-6 font-bold md:text-md tracking-wider hover:bg-slate-300 hover:text-black px-8 md:px-12 py-3 md:pt-4 md:pb-4'>
                <IoMail />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
