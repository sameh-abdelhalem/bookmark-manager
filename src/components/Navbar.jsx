import bookmarkLogo from "../assets/logo-bookmark.svg";
const Navbar = () => {
  return (
    <nav className="container relative mx-auto p-6">
      {/* Flex Container for Nav items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo */}
        <div className="z-30">
          <img src={bookmarkLogo} alt="" />
        </div>
        {/* Menu Items */}
        <div className="items-center hidden space-x-10 uppercase text-grayishBlue md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>
          <a
            href="#"
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
