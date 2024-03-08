import { useState } from "react";
import bookmarkLogo from "../assets/logo-bookmark.svg";
import bookmarkFooterLogo from "../assets/logo-bookmark-footer.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="container relative mx-auto p-6">
      {/* Flex Container for Nav items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo */}
        <div className="z-30">
          {isOpen ? (
            <img src={bookmarkFooterLogo} alt="" />
          ) : (
            <img src={bookmarkLogo} alt="" />
          )}
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
            className="duration-200 px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </a>
        </div>
        {/* Hamburger Button */}
        <div className={`lg:hidden `}>
          <button
            id="menu-btn"
            type="button"
            className={`block hamburger lg:hidden focus:outline-none z-40 ${
              isOpen && "open"
            }`}
            onClick={openMenuHandler}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className={`  ${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 z-20  flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center ">
          <a
            href="#features"
            className="block hover:text-softRed "
            onClick={openMenuHandler}
          >
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center ">
          <a
            href="#download"
            className="block hover:text-softRed"
            onClick={openMenuHandler}
          >
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center ">
          <a
            href="#faq"
            className="block hover:text-softRed"
            onClick={openMenuHandler}
          >
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center ">
          <a
            href="#"
            className="block hover:text-softRed"
            onClick={openMenuHandler}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
