
//Importing UseState
import { useState } from 'react';   

//Importing Component Hamburger
import Hamburger from './Hamburger.tsx';
//useState constant variable
const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      {/*Importing Hamburger Menu */}
      <div className="hamburger cursor-pointer pb-4 " onClick={toggleHamburger}>
        <Hamburger />
      </div>
      <section className="navigation">

        {/* Navigation*/}
        <ul className={`flex font-['UnifrakturMaguntia'] justify-center flex-col ${hamburgerOpen ? 'block' : 'hidden'}`}>
          <li className="text-3xl hover:bg-[#b58383] w-[200px] bg-[#71787d] text-white"><a href="#">Home</a></li>
          <li className="text-3xl hover:bg-[#b58383] w-[200px]  bg-[#71787d] text-white"><a href="#">Gallery</a></li>
          <li className="text-3xl hover:bg-[#b58383] w-[200px]  bg-[#71787d] text-white "><a href="#">About us</a></li>
        </ul>
      </section>
    </div>
  );
};

export default NavBar;
