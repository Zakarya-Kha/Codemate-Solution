import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Solution", path: "/solution" },
    { text: "About us", path: "/about" },
    { text: "Contact", path: "/contact" }
  ];


  return (
    <div className='flex flex-wrap justify-between gap-6 mx-2 md:mx-9 p-6'>
      <div className='mb-6 md:mb-0'>
        <h1 className='text-xl md:text-3xl font-bold'>Codemate Solution</h1>
      </div>
      <div className='mb-6 md:mb-0'>
        <h1 className='text-lg md:text-xl font-bold mb-3'>Quick Links</h1>
        <ul>
          <li>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} className={({isActive}) =>
              `block py-2 ${isActive ? "text-orange-700" : "text-gray-700" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }>
              {link.text}
            </NavLink>
          ))}
            
            </li>
          
        </ul>
      </div>
      <div className='mb-6 md:mb-0'>
        <h1 className='text-lg md:text-xl font-bold  mb-3'>Contact Us</h1>
        <p className='text-sm'>+966 (0)11 236 5881</p>
        <p className='text-sm my-2'>RIYADH, SAUDI ARABIA</p>
        <p className='text-sm'>SOLUTIONS@JMMINNOVATIONS.COM</p>
      </div>
      <div>
        <h1 className='text-lg md:text-xl font-bold mb-6'>Follow Us</h1>
        <ul className='flex gap-6'>
          <li className='border-2 rounded-full h-[35px] bg-blue-300 px-2 py-2 hover:bg-blue-800 hover:text-white'>
            <Link className='underline' to="https://www.facebook.com"><FaFacebookF /></Link>
          </li>
          <li className='border-2 rounded-full h-[35px] bg-blue-300 px-2 py-2 hover:bg-blue-800 hover:text-white'>
            <Link className='underline' to="https://twitter.com"><FaTwitter /></Link>
          </li>
          <li className='border-2 rounded-full h-[35px] bg-blue-300 px-2 py-2 hover:bg-blue-800 hover:text-white'>
            <Link className='underline' to="https://www.linkedin.com"><FaLinkedinIn /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
