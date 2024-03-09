import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import shiping from '../assets/images/shiping.png'
import Slider from "react-slick";



import wisemobile from '../assets/images/wisemobile.webp'
import wisewatch from '../assets/images/wisewatch.webp'
import wisewatch2 from '../assets/images/wisewatch2.webp'
import wisrmmob from '../assets/images/wisrmmob.webp'
import wisealtra from '../assets/images/wisealtra.webp'
import wiseiphone from '../assets/images/wiseiphone.webp'
import wisehjor from '../assets/images/wisehjor.webp'
import wisesnap from '../assets/images/wisesnap.webp'

export const Moreproductslider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                        <h1>Recent Products</h1>
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

                                    src={wisemobile}
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

                                    src={wisewatch}
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

                                    src={wisewatch2}
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

                                    src={wisrmmob}
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

                                    src={wisealtra}
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

                                    src={wiseiphone}
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

                                    src={wisehjor }
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

                                    src={wisesnap }
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




