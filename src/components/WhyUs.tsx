import { FaBrush } from 'react-icons/fa';
import design_1 from '../assets/app_1.jpg';
import design_2 from '../assets/app_2.jpg';

const WhyUs = () => {
  return (
    <>
      <div className='bg-black pb-10'>
        <div className='text-center'>
          <h6 className='uppercase text-md pt-10'>Why choose us</h6>
          <h2 className='uppercase text-5xl font-monserret pt-5 pb-10'>
            Crafted for Quality & <br />
            Creativity
          </h2>
        </div>
        <div className='flex justify-around align-middle mt-4 font-sans'>
          <div>
            <div className='text-center max-w-2xl'>
              <h3 className='font-normal text-2xl my-5'>Design Approch</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                distinctio esse id adipisci totam possimus repellat consequuntur
                minima provident itaque.
              </p>
              <div className='w-2xl my-5'>
                <img src={design_1} alt='' className='rounded-2xl' />
              </div>
            </div>
          </div>
          <div>
            <div className='text-center max-w-2xl'>
              <h3 className='font-normal text-2xl my-5'>Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                distinctio esse id adipisci totam possimus repellat consequuntur
                minima provident itaque.
              </p>
              <div className='w-2xl my-5'>
                <img src={design_2} alt='' className='w-2xl rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
