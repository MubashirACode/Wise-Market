import React from 'react'
import { Link } from 'react-router-dom'
// import  from '../'/
export const Compare = () => {
    return (
        <>

<div className="flex mt-5 ">
        <Link to="/wishlist/home" className="m-10 mr-0  mt-0  -mt-8 mb-0 text-sm underline text-blue-700">
                Home
            </Link>
            <Link to="/wishlist/linkroute" className="m-10  -mt-8  mr-0 mt-0 mb-0 text-sm underline text-blue-700">
                Categories
            </Link>
            
            </div>
     <header className='flex flex-col md:flex-row'>
    <aside className="m-5 md:w-1/4">
        <h1>Compare through the devices .</h1>
        <ul className='text-start' >
                        <li className='pb-2' ><i className=" pr-2 text-green-500 text-2xl ri-shield-check-fill"></i> 12 Months Brand Warranty </li>
                        <li className='pb-2'><i className="  pr-2 text-green-500 text-2xl ri-shield-check-fill"></i> 3-6-Months brand warranty <br />  (accessories & other  brands) </li>
                        <li className='pb-2'> <i className=" pr-2  text-green-500 text-2xl ri-calendar-schedule-line"></i> 14 Days Check  Warranty  </li>
                        <li className='pb-2'><i className="  pr-2 ri-medal-line text-2xl text-green-500"></i> Best Price Guarantee</li>
                        <li className='pb-2'><i className="  pr-2 text-green-500 text-2xl ri-inbox-fill"></i> Free Express Shipping</li>
                        <li className='pb-2'><i className="  pr-2 text-green-500 text-2xl  ri-gift-fill"></i> Cashback as gift on evey purchase </li>
                        <li className='pb-2'> <i className=" pr-2  text-green-500 text-2xl ri-user-3-fill"></i> 24/7 Customer support  </li>
                    </ul>
    </aside>
    <div className="flex flex-col md:flex-row items-center justify-evenly md:w-3/4">
       
        <div className="md:pl-5 mb-4 md:mb-0">
            <h1 className='text-lg font-bold pb-4'>Compare With </h1>
            <p className='pb-4'>Enter model to compare </p>
            <input
                type="search"
                size={26}
                className='p-3 text-white rounded-md bg-[rgb(242,242,242)]'
                name="Search"
                id=""
                placeholder='Search '
            />
        </div>

       
        <div className="md:pl-5 mb-4 md:mb-0">
            <h1 className='text-lg font-bold pb-4'>Compare With </h1>
            <p className='pb-4'>Enter model to compare </p>
            <input
                type="search"
                size={26}
                className='p-3 text-white rounded-md bg-[rgb(242,242,242)]'
                name="Search"
                id=""
                placeholder='Search '
            />
        </div>

       
        <div className="md:pl-5">
            <h1 className='text-lg font-bold pb-4'>Compare With </h1>
            <p className='pb-4'>Enter model to compare </p>
            <input
                type="search"
                size={26}
                className='p-3 text-white rounded-md bg-[rgb(242,242,242)]'
                name="Search"
                id=""
                placeholder='Search '
            />
        </div>
    </div>
</header>


        </>
    )
}


