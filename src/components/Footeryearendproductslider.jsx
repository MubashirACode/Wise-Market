import mobile1 from '../assets/images/mobilrproducts/mobile1.webp'
import mobile2 from '../assets/images/mobilrproducts/mobile2.webp'
import mobile3 from '../assets/images/mobilrproducts/mobile3.webp'
import mobile4 from '../assets/images/mobilrproducts/mobile4.webp'
import mobile5 from '../assets/images/mobilrproducts/mobile5.webp'
import mobile6 from '../assets/images/mobilrproducts/mobile6.webp'
import portal from '../assets/images/mobilrproducts/portal.webp'
import ac1 from '../assets/images/mobilrproducts/ac1.webp'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import shiping from '../assets/images/shiping.png'

export const Footeryearendproductslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div>
                <div class='flex justify-between m-10   text-lg md:text-2xl'>

                    <div class='font-bold'>
                        <h1>12.12 Year End Sale</h1>
                    </div>

                    <div class='md:ml-0 md:mr-0'>
                        See All <i class="ri-arrow-right-line"></i>
                    </div>

                </div>

                <Slider {...settings}>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile1}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile2}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile3}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile4}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile5}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={mobile6}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={ac1}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="m-10">
                        <div className="w-[250px]  rounded-md border">
                            <Link>
                                <img

                                    src={portal}
                                    alt="Laptop"
                                    className="h-[200px] ml-5 w-[200px] rounded-t-md object-cover"
                                />
                            </Link>

                            <div className="p-4 text-start ">
                                <p className='flex'>-L-Marron</p>
                                <h1 className='flex'>Dynafit Embroidered Pullove...</h1>
                                <h1 className="inline-flex items-center text-lg font-semibold">

                                </h1>
                                <p className=" text-start   text-sm text-gray-600" >
                                    <span className='flex '><i className="ri-star-s-fill pr-2"></i> (0)  <img src={shiping} className='ml-2 mr-2' width={20} alt="" />Free Shiping </span>


                                </p>
                                <div className=" -ml-2">
                                    <span className="mb-2 mr-2 inline-block items-start   px-3 py-1 text-[10px] font-semibold ">
                                        <h1 className='text-2xl -ml-1 '>PKR 4999</h1>
                                    </span>

                                </div>
                                <button
                                    type="button"
                                    className=" w-full rounded-lg bg-[#1B9D66]  py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Add to Chart</span>
                                </button>
                            </div>



                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}



