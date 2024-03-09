import phone1 from '../assets/images/phone1.png'
import { Link } from 'react-router-dom'

export  const Footercondition = () => {
  return (
    <>
    
    <div className=" flex-wrap lg:flex xl:flex-wrap  justify-between mr-10  ml-10 mt-10">

                <div className="">
                    <h1 className="m-10 ml-0 mr-0  flex">Hey ,  <b className="text-green-400 pr-2 pl-1">Condition Explained </b>  by Wisemarket</h1>
                    <p className="w-64 text-start">The mobile phones we offer come in 4 different conditions.
                        These conditions are <b> Brand New, As New, Good, and Fair. </b> Pick your
                        favorite one, depending on your price range</p>

                </div>


                <div className=" flex-wrap lg:flex md:flex   justify-between  sm:gap-10   ">
                    <div className="border-4 w-32  mb-10  h-32  bg-zinc-100 rounded-full hover:border-green-500">

                        <Link className=''>
                            <img src={phone1}  alt="" className=' object-cover items-center ' />
                        </Link>
                        <div className='border-2 rounded-lg hover:bg-green-500 bg-zinc-100 -mt-2'>
                            <i className="ri-briefcase-4-line pl-4">Brand New</i>
                        </div>
                    </div>


                    <div className="border-4 w-32  mb-10   h-32  bg-zinc-100 rounded-full hover:border-green-500">

                        <Link>
                            <img src={phone1}  alt="" className='items-center ' />
                        </Link>
                        <div className='border-2 rounded-lg hover:bg-green-500 bg-zinc-100 -mt-2'>
                            <i className="ri-gift-2-fill pl-4">As New</i>
                        </div>
                    </div>




                    <div className="border-4 w-32  mb-10  h-32  bg-zinc-100 rounded-full hover:border-green-500">

                        <Link>
                            <img src={phone1}  alt="" className='items-center ' />
                        </Link>
                        <div className='border-2 rounded-lg hover:bg-green-500 bg-zinc-100 -mt-2'>
                            <i className="ri-copper-diamond-fill pl-5">Excellent</i>
                        </div>
                    </div>







                    <div className="border-4 w-32  mb-10  h-32  bg-zinc-100 rounded-full hover:border-green-500">

                        <Link>
                            <img src={phone1}  alt="" className='items-center ' />
                        </Link>
                        <div className='border-2 rounded-lg hover:bg-green-500 bg-zinc-100 -mt-2'>
                            <i className="ri-thumb-up-fill pl-7">Good</i>
                        </div>
                    </div>








                    <div className="border-4 w-32  mb-10  h-32  bg-zinc-100 rounded-full hover:border-green-500">

                        <Link>
                            <img src={phone1}   alt="" className='items-center ' />
                        </Link>
                        <div className='border-2 rounded-lg hover:bg-green-500 bg-zinc-100 -mt-2'>
                            <i className="ri-verified-badge-line p-8">Fair</i>
                        </div>
                    </div>








                </div>

            </div>
    
    </>
  )
}


