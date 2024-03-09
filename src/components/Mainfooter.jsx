
import wiselogo2 from '../assets/images/wiselogo2.png'
export const Mainfooter = () => {

  return (
    <>
    <div className="bg-[#1F2323] text-white">
                <div className="p-6 md:p-10 flex flex-col md:flex-row justify-center m-6 md:m-10">
                    <div className="pt-20 pr-10">
                        <img src={wiselogo2} className="" width={200} alt="" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 text-start mt-6 md:mt-16 md:w-full">
                        <div className="flex text-white">
                            <ul className="text-start">
                                <p className="mb-3 font-semibold">Quick Links</p>
                                <li>About Us</li>
                                <li>FAQ's</li>
                                <li>Contact Us</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        <div className="text-white">
                            <ul className="text-start">
                                <p className="font-semibold mb-3">Services</p>
                                <li>Return Policy</li>
                                <li>Privacy Policies</li>
                                <li>Refund & Shipping</li>
                                <li>Warranty</li>
                            </ul>
                        </div>

                        <div className="text-white">
                            <ul className="text-start">
                                <p className="font-semibold mb-3">My Account</p>
                                <li>Sign In</li>
                                <li>View Cart</li>
                                <li>My Wishlist</li>
                                <li>Help</li>
                            </ul>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="w-full md:w-56 rounded-lg p-3 mb-2 -mt-10 bg-[#1B9D66] py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                <i className="ri-shopping-cart-line"></i>
                                <span>Become A Vendor</span>
                            </button>

                            <p className="text-white w-full md:w-64 text-start md:text-left">
                                Reach millions of customers nationwide through WiseMarket. A leading smart devices platform in Pakistan
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-white text-center md:text-start justify-center">
                    <div className="flex  md:m-20 ">
                        <i className="ri-map-pin-line"></i>
                        <span>40-L Jhor Town Lahore</span>
                    </div>
                    <div className="flex  md:m-20 mt-0 mb-2">
                        <i className="ri-phone-line"></i>
                        <span className="">+923444980396</span>
                    </div>
                    <div className="flex m-6 md:m-20 mt-0 mb-2">
                        <i className="ri-mail-line"></i>
                        <span>Mubashir@gmail.com</span>
                    </div>
                </div>

                <div className="text-white m-6 md:m-20 mt-0 mb-2 text-center md:text-start">
                    <div className="flex">
                        <p>Stay connected</p>
                    </div>
                    <div className="flex text-2xl">
                        <i className="pr-3 ri-facebook-circle-line"></i>
                        <i className="pr-3 ri-instagram-line"></i>
                        <i className="pr-3 ri-twitter-fill"></i>
                        <i className="pr-3 ri-linkedin-box-line"></i>
                    </div>
                </div>

                <div className="border-t-2 h-32 flex justify-center md:justify-between border-zinc-400">
                    <div className="text-white ml-12 mt-6 md:mt-10">
                        <p>Copyright <i className="ri-copyright-line"></i> 2023 WiseMarket. All Rights Reserved.</p>
                    </div>
                    <div className="text-white flex flex-wrap mt-6 md:mt-10 p-6 md:p-10 pl-0 pt-0 text-center md:text-left">
                        <p className="w-full md:w-auto mb-4 md:mb-0">We are using safe payments:</p>
                        <div className="flex items-center">
                            <i className="text-3xl w-8 md:w-12 pl-3 ri-visa-fill"></i>
                            <i className="pl-3 text-3xl ri-paypal-line"></i>
                            <i className="text-3xl ri-bank-line pl-3"></i>
                            <i className="pl-3 text-3xl ri-truck-line"></i>
                        </div>
                    </div>

                </div>
            </div>
    </>
    
  )
}


