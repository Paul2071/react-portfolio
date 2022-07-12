import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo2.png";

const Navbar = () => {

    const [navState, setNavState] = useState(false)
    const handleClick = () => setNavState(!navState)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px=4 bg-slate-600 text-gray-300">
      <div>
        <img src={Logo} alt="Personalised Logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      
        <ul className='hidden md:flex'>
          <li> Home </li>
          <li> About me </li>
          <li> Projects </li>
          <li> Skills </li>
          <li> Contact </li>
        </ul>
     

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navState ? <FaBars /> : <FaTimes />}
      </div>


      {/* mobile menu */}
      <ul className={!navState ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl"> Home </li>
        <li className="py-6 text-4xl"> About me </li>
        <li className="py-6 text-4xl"> Projects </li>
        <li className="py-6 text-4xl"> Skills </li>
        <li className="py-6 text-4xl"> Contact </li>
      </ul>


      {/* social icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
