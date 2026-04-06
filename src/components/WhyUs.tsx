import design_1 from '../assets/app_1.jpg';
import design_2 from '../assets/app_2.jpg';

const WhyUs = () => {
  return (
    <>
      <div className='bg-black pb-10 px-6'>
        <div className='text-center'>
          <h6 className='uppercase text-md pt-10 text-gray-400'>
            Why choose us
          </h6>
          <h2 className='text-5xl md:text-7xl font-light leading-tight uppercase font-sans text-slate-200 mt-2'>
            Crafted for Quality & <br className='hidden md:block' /> Creativity
          </h2>
        </div>

        {/* Changed 'flex' to 'flex-col' for mobile and 'md:flex-row' for desktop */}
        <div className='flex flex-col md:flex-row justify-around items-center md:items-start mt-4 font-sans gap-10 text-slate-200 '>
          {/* Design Approach Section */}
          <div className='text-center max-w-2xl font-monserret'>
            <h3 className='font-normal text-2xl my-5'>Design Approach</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              distinctio esse id adipisci totam possimus repellat consequuntur
              minima provident itaque.
            </p>
            <div className='w-full max-w-2xl my-5'>
              <img
                src={design_1}
                alt=''
                className='rounded-2xl w-full object-cover'
              />
            </div>
          </div>

          {/* Development Section */}
          <div className='text-center max-w-2xl font-monserret'>
            <h3 className='font-normal text-2xl my-5'>Development</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              distinctio esse id adipisci totam possimus repellat consequuntur
              minima provident itaque.
            </p>
            <div className='w-full max-w-2xl my-5'>
              <img
                src={design_2}
                alt=''
                className='rounded-2xl w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
