const FAQ = () => {
  return (
    <>
      <div className='bg-black text-white min-h-screen p-10 md:p-20 font-sans'>
        {/* Header Section */}
        <div className='text-center mb-24'>
          <h6 className='uppercase tracking-[0.3em] text-sm text-gray-500 mb-4'>
            Faqs
          </h6>
          <h2 className='text-3xl md:text-6xl font-light uppercase tracking-tight'>
            Frequently Asked <br /> Questions
          </h2>
        </div>

        <div className='max-w-6xl mx-auto grid lg:col-span-8'>
          <div className='divide-y divide-white/20'>
            {/* Accordion Item 1 */}
            <div className='collapse collapse-plus rounded-none border-b border-white/20'>
              <input type='radio' name='my-accordion' defaultChecked />
              <div className='collapse-title text-lg font-medium uppercase py-6 px-0'>
                What interior design services?
              </div>
              <div className='collapse-content px-0'>
                <p className='text-gray-400 leading-relaxed text-sm max-w-2xl'>
                  We offer a full range of interior design services, including
                  residential and commercial design, space planning, concept
                  development, furniture selection, lighting design, and project
                  supervision.
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className='collapse collapse-plus rounded-none border-b border-white/20'>
              <input type='radio' name='my-accordion' />
              <div className='collapse-title text-lg font-medium uppercase py-6 px-0'>
                Do you manage the project?
              </div>
              <div className='collapse-content px-0'>
                <p className='text-gray-400 text-sm'>
                  Yes, we provide end-to-end project management.
                </p>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className='collapse collapse-plus rounded-none border-b border-white/20'>
              <input type='radio' name='my-accordion' />
              <div className='collapse-title text-lg font-medium uppercase py-6 px-0'>
                Do you provide design consultations?
              </div>
              <div className='collapse-content px-0'>
                <p className='text-gray-400 text-sm'>
                  Consultations are available both in-person and virtually.
                </p>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className='collapse collapse-plus rounded-none border-b border-white/20'>
              <input type='radio' name='my-accordion' />
              <div className='collapse-title text-lg font-medium uppercase py-6 px-0'>
                How can I schedule an appointment?
              </div>
              <div className='collapse-content px-0'>
                <p className='text-gray-400 text-sm'>
                  You can schedule via our contact form or by calling us
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
