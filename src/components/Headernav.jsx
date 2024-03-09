import stove from '../assets/images/flame.png';
import { Navlinks } from './Navlinks';
import React, { useState } from 'react';
export const Headernav = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>



<div className=" justify-start z-50 lg:flex hidden    ">


<div className="mt-10 z-50">
  <div className="relative">
    <button
      onClick={toggleMenu}
      className="peer px-5 py-2 w-32 md:w-auto text-black"
    >
      All Categories
    </button>

    <div
      className={`${isOpen ? 'flex' : 'hidden'
        } peer-hover:flex hover:flex w-32 md:w-[12rem] flex-col bg-white drop-shadow-lg absolute z-auto top-full`}
    >
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Mobile
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Laptop
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Tablets
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Smart Watches
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Accessories
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Wireless Earbuds
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Home and Lifestyle
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Gaming
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Kids
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        Health & Beauty
      </a>
    </div>
  </div>
</div>



<div className='border-r-4 h-5 m-12  mr-0 ml-3'></div>
<div className='w-7  mt-10 ml-2 mr-0 sm:w-7'>
  <img src={stove} alt="" srcset="" />
</div>
<div className="mt-10 z-50">

  <div className="relative right-4 ">

    <button
      onClick={toggleMenu}
      className="peer px-5 flex   py-2 w-full md:w-auto  text-black"
    >
      Hot Offer
    </button>

    <div
      className={`${isOpen ? 'flex' : 'hidden'
        } peer-hover:flex hover:flex w-full md:w-[20rem] flex-col bg-white drop-shadow-lg absolute z-auto top-full`}
    >
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        14 Feb Offer 60% Off For Cloths
      </a>
      <a className="px-5 py-3 hover:bg-gray-200" href="#">
        New Year Sale 50% Off for All Products
      </a>

    </div>
  </div>
</div>



<div className='flex-wrap lg:flex gap-5  mt-5 justify-between        '>
  <Navlinks />
</div>
</div>  
        </>
    )
}


