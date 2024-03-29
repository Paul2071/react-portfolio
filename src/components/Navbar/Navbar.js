import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const handleClick = () => setNavState(!navState);

  return (
    <div className="fixed w-full h-[80px] flex flex-col justify-between items-center p-7 bg-[#4F646F] text-gray-300">
    
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
           <Link to="about" smooth={true} duration={500}>
            About me
           </Link>
        </li>
        <li> 
           <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
           <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>        
          
        </li>
        <li> 
            <Link to="contact" smooth={true} duration={500}>
            Contact
           </Link> 
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 m-[30px]">
        {!navState ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !navState
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">  <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>  </li>
        <li className="py-6 text-4xl">  <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About me
          </Link>  </li>
        <li className="py-6 text-4xl">  <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>  </li>
        <li className="py-6 text-4xl">  <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>  </li>
        <li className="py-6 text-4xl">  <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>  </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between border-2  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/paul-chamberlain-0609b4244/"  target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between border-2  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.facebook.com/paul.chamberlain.961" target="_blank" rel="noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
        
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between border-2  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://twitter.com/pchamberlain12" target="_blank" rel="noreferrer"
            >
             Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
