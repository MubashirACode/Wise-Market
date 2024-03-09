import iphone13 from '../assets/images/iphone13.png'
import ear from '../assets/images/earbugs.png'
import watch from '../assets/images/watch.png'
import laptop from '../assets/images/laptop2.png'
import head from '../assets/images/head.png'
import w1 from '../assets/images/w1.png'
import { Link } from 'react-router-dom'

export const Roundedproducts = () => {
    return (

        <>

            <div className="m-10 flex sm:w-full   ">
                <h1 className='text-3xl' >Explore Popular Categories</h1>
            </div>



            <div className="grid grid-cols-2 m-10 sm:grid-cols-4 md:grid-cols-4 gap-10 lg:grid-cols-6  ">
                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">
                    <Link>
                        <img src={iphone13} width={100} className=' m-2' alt="" />
                    </Link>

                    <p className='ml-8 mt-6 mr-0'>Mobile</p>
                </div>


                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">
                    <Link>
                        <img src={ear} width={100} className=' m-2' alt="" />
                    </Link>
                    <p className='mt-6 '>Wireless Earbuds</p>
                </div>


                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">

                    <Link>
                        <img src={watch} width={100} className=' m-2' alt="" />
                    </Link>
                    <p className='mt-6'>Samart Watches</p>
                </div>


                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">
                    <Link>
                        <img src={laptop} width={100} className=' m-2' alt="" />
                    </Link>

                    <p className='ml-8 mt-6'>
                        Laptop
                    </p>
                </div>


                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">
                    <Link>
                        <img src={head} width={100} className=' m-2 mt-5 ' alt="" />

                    </Link>
                    <p className='ml-5 mt-11'>HeadPhone</p>
                </div>



                <div className="border-4 w-32  h-32  bg-zinc-200 rounded-full hover:border-green-500">
                    <Link>
                        <img src={w1} width={100} className=' m-2' alt="" />
                    </Link>
                    <p className='ml-6 mt-6'>MacWatch</p>
                </div>


            </div>
        </>

    )
}


