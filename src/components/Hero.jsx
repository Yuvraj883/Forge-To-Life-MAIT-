const Hero = () => {
  return (
    <div className="px-4 md:px-16 mt-6 flex flex-col md:flex-row md:justify-between items-center">
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 w-[80%]">
          Navigating the digital landscape for success
        </h1>
        <p className="text-sm md:text-base w-[80%]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="bg-black text-white px-4 py-2 mt-4 md:mt-6 rounded-sm w-full md:w-auto">
          Book a consultation
        </button>
      </div>
      <div className="md:w-1/2">
        <img className="w-full" src="./Illustration.png" alt="icon" />
      </div>
    </div>
  );
};

export default Hero;
