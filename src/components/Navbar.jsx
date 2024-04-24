const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Logo */}
      {/* <span className="font-bold text-2xl mb-4 md:mb-0">PositiveUs</span> */}
      <img src="./logo.png" alt="logo"/>

      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row font-semibold items-center justify-center md:items-stretch md:gap-4">
        <li className="my-2 md:my-0">
          <a href="#" className="block md:inline-block">About us</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="block md:inline-block">Services</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="block md:inline-block">Use Cases</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="block md:inline-block">Pricing</a>
        </li>
        <li className="my-2 md:my-0">
          <a href="#" className="block md:inline-block">Blog</a>
        </li>
        <li className="my-2 md:my-0">
          <button className="px-4 py-2 rounded-md border-2 border-gray-300 md:ml-4 hover:bg-black hover:text-white">
            Request a quote
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
