import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navitems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "Vegetable", link: "/Vegetable" },
  { id: 4, name: "About", link: "/About" },
  { id: 5, name: "ContactUs", link: "/contactus" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container relative'>
      <div className='flex justify-between items-center h-[70px] px-4'>
        {/* Logo */}
        <div>
          <img src={logo} alt="" className='w-[75px] md:w-auto' />
        </div>

        {/* Menu */}
        <div className='hidden md:block'>
          <ul className='flex gap-6 items-center'>
            {navitems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className='hover:text-secondary group relative'>
                  <div className='absolute group-hover:bg-secondary top-5 left-1/2 w-1 h-1 rounded-full'></div>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className='flex items-center gap-3'>
          <div
            className="relative py-2 mr-3 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <div className="absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 sm:p-3 text-xs text-white">
                {items.length}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="sm:mt-3 sm:h-7 sm:w-7 mt-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          {/* Hamburger */}
          <div className='block md:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-10'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {navitems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className='hover:text-secondary'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
