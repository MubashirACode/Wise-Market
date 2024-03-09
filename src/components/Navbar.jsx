import logo from '../assets/images/wiselogo.png'
import { Navlinks } from './Navlinks'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import bbrand from '../assets/images/bbrand.png'
export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isopen, setIsOpen] = useState(true)
    return (
        <>


<div>
            <marquee behavior="" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white text-sm" direction="">Your Order delivery may exprience delays due to the election . We apprecicate your patience during this time </marquee>
        </div>

            <div className="flex items-center mt-10 font-medium justify-between border-b-2">
                <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                    <Link to="/">  <img src={logo} alt="" className=' w-36 md:w-36' /></Link>


                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        {open ? (
                            <i class="ri-close-line"></i>
                        ) : (
                            <i className="ri-menu-line text-3xl"></i>
                        )


                        }
                    </div>
                </div>

                <div className='relative  md:flex hidden'>
                    <input
                        type="search"
                        size={26}
                        className='p-3 text-white rounded-md  bg-[rgb(242,242,242)]'
                        name="search"
                        id=""
                        placeholder='Search by Brand, Model, Color'
                    />
                    <button className='absolute right-0 top-0 mt-2 mr-2'>
                        <i className="ri-search-line text-[20px]"></i>
                    </button>
                </div>

                <div className='flex items-center md:flex hidden  gap-4'>
                    <div className='p-2'>
                        <i className="ri-account-circle-line text-2xl"></i>
                    </div>

                    <div className='flex items-center gap-2 '>
                        <Link to="login" className='text-md'>
                            Login
                        </Link>
                        <b className='text-md font-semibold'>/</b>
                        <Link to='registerion' className='text-md'>Register</Link>
                    </div>

                    <div className='p-2 '>
                     <Link to="compare"><i className="ri-scales-3-line text-3xl"></i></Link>   
                    </div>
                    <div className='text-3xl '>
                      
                      <Link to='wishlist' ><i className="ri-heart-3-line"></i></Link>  
                    </div>

                    <div className='text-3xl flex '>
                        

                        {!isopen ?
                            (
                                <button type="button" onClick={() => setIsOpen(!isopen)} className=' '  ><i className="ri-shopping-cart-line"> </i>
                                
                                <sup className='text-white text-sm bg-red-500 rounded-full p-2  right-5 -top-4   pt-0 pb-0 ' >0</sup>
                                </button>
                            ) : (


                                <button onClick={() => setIsOpen(!isopen)} className='              mt-4 text-xl  flex  text-black fobt-bold fixed top-0 right-4     z-20 '>Shopping Cards <i className=" pl-40  ri-xrp-fill"> </i></button>

                            )
                        }





                        <div className={` top-0 z-50  right-0 fixed bg-zinc-100 shadow-inner shadow-2xl h-[99%] w-auto  p-10  ${isopen ? 'translate-x-0' : 'translate-x-full   '}   ease-in-out duration-300  `}>



                            <div className='mt-10 text-center border-t-2 border-black pt-5   items-center'>
                                <img src={bbrand} alt="" srcset="" className='ml-[100px]' />
                                <p className='text-sm pt-5  font-bold ' >No item found in your Cart.</p>

                                <p className="text-sm">Continue shopping and add items in your Cart.</p>
                            </div>
                            <div className="text-lg flex     justify-center   mt-10   ">
                                <button className=' bg-green-500 w-60 h-20  rounded-xl '>Shop Now <i class="ri-arrow-right-line"></i> </button>
                            </div>

                            <div className="border-t-2 flex justify-between border-zinc-700 shadow-none mt-10 w-auto  ">

                                <div className="mt-4">
                                    <p className='text-2xl'>Subtotal </p>
                                </div>
                                <div className="mt-4">
                                    <p className='text-2xl'>PKR0</p>
                                </div>

                            </div>




                            <div className="flex justify-between border-t-2 border-zinc-700 mt-5">
                                <div className="mt-4">
                                    <button className=' bg-black  text-white w-32 h-14  rounded-xl  text-lg'> <i class="ri-shopping-cart-2-line"></i>View Chart</button>
                                </div>
                                <div className=" mt-4  ">
                                    <button className='bg-green-500 text-lg  text-white w-32 h-14  rounded-xl'>Check Out</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>





            </div>
            <div className=' '>
                <ul className={`md:hidden    bg-white absolute w-full h-full  z-50 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>Home</Link>

                    </li>
                    <Navlinks />
                </ul>
            </div>

            <Outlet />
        </>
    )
}


