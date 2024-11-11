import Image from "next/image";

const Home = () => {
  return (
    <div className='relative md:py-28 py-16 h-[140vh] md:h-[130vh] overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-[url("/download.jpeg")] bg-cover bg-top opacity-20'></div>
      <div className='max-w-[90%] mx-auto relative z-10'>
        <div className='flex md:flex-row flex-col justify-between items-center'>
          <div className='md:w-[50%] w-full relative z-50 text-center md:text-left'>
            <h1 className='md:text-5xl text-3xl text-[#044E83] mb-6'>
              <span className='font-extrabold md:text-[62px] text-4xl'>Governor Sindh</span> Kamran Khan Tessori
            </h1>
            <h2 className='text-[#2EB6E8] text-2xl md:text-3xl font-extrabold mb-6'>
              Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
            </h2>
            <h4 className='text-[#044E83] text-lg md:text-xl font-extrabold mb-4'>Earn up to $5,000 / month</h4>
            <h3 className='text-[#044E83] text-lg md:text-xl font-extrabold'>Now admissions are open in Hyderabad</h3>
            <div className="md:mt-4 flex gap-4 md:gap-10 flex-col md:flex-row items-center md:items-start">
              <button className='bg-[#044E83] text-white font-bold px-8 py-2 md:px-16 md:py-4 rounded-lg mt-6 transition-transform duration-300 transform hover:translate-y-1'>
                Apply Now
              </button>
              <div className="flex flex-col gap-1 mt-4 items-center">
                <span className="text-[#044E83] text-2xl md:text-3xl font-extrabold">562,143</span>
                <span className="text-[#044E83]">Accepted Application</span>
              </div>
            </div>
          </div>
          <div className='md:w-[50%] w-full mt-6 md:mt-0 flex justify-center md:justify-end'>
            <Image src='/kamran.png' alt='Governor' width={450} height={450} className="w-auto h-auto max-w-full max-h-full md:absolute md:-top-20 md:-right-[200px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
