import { useState } from "react"
import logo12 from '../assets/images/login.png'
import { Link } from "react-router-dom"

export const Wishlist = () => {
    const [option, setOption] = useState('phone', 'email')
    const [value, setValue] = useState('')



    const handleopitonchange = (option) => {
        setOption(option);
        setValue('');
    };


    const handleinputchange = (e) => {
        setValue(e.target.value)
    };


    const handlesubmint = (e) => {
        e.preventDefault();
    }

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

            <section className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 ml-10">
                    <h1 className="text-3xl font-bold">Login to your wisemarket account</h1>
                    <p className="pl-10 m-2">Get access to your Orders, Wishlist, Recommendations</p>

                    <div className="">
                        <form className="" onSubmit={handlesubmint}>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => handleopitonchange('phone')}
                                    className={`mr-2 w-56 text-2xl h-16 rounded-xl ${option === 'phone' ? 'text-white bg-green-500' : 'text-black bg-gray-300'}`}
                                >
                                    <i className={`text-2xl ri-phone-line ${option === 'email' ? 'text-BLACK' : 'text-white'}`}></i> Phone
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleopitonchange('email')}
                                    className={`ml-2 w-52 text-2xl h-16 rounded-xl ${option === 'email' ? 'text-white bg-green-500' : 'text-black bg-gray-300'}`}
                                >
                                    <i className={`text-2xl pr-3 text-black ri-mail-fill ${option === 'email' ? 'text-white bg-green-500' : 'text-black bg-gray-300'}`}></i> Email
                                </button>
                            </div>

                            <div className="mt-10">
                                <input
                                    type={option === 'number' ? 'number' : 'email'}
                                    value={value}
                                    onChange={handleinputchange}
                                    placeholder={`Enter ${option === 'phone' ? 'Your Number' : 'Your Email'}`}
                                    className="p-2 w-[88%] border rounded"
                                />
                            </div>

                            <div className="flex flex-wrap mt-10">
                                <div class="flex items-center me-4">
                                    <input
                                        id="red-radio"
                                        type="radio"
                                        value=""
                                        name="colored-radio"
                                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <p className="ml-3">By continuing, you confirm that you have read and agreed to our <br /> <b className="text-green-700"> Terms & conditions</b> and <b className="text-green-700"> Privacy Policy.</b></p>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-6">
                                <div class="flex items-center me-4">
                                    <input
                                        id="red-radio"
                                        type="radio"
                                        value=""
                                        name="colored-radio"
                                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <p className="ml-3">Subscribe to our newsletter for exclusive content and early access <br />  to promotions.</p>
                                </div>
                            </div>

                            <div className="mt-3">
                                <button type="submit" className="w-[88%] bg-green-500 text-white p-2 rounded">Generate OTP</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <img src={logo12} alt="" className="w-[80%]" />
                </div>
            </section>

            <div className="flex flex-col md:flex-row m-8 justify-between border-2 bg-green-100 rounded-lg md:w-[46%]">
                <div className="">
                    <i className="text-green-500 text-5xl ri-exchange-dollar-line"></i>
                </div>
                <div className="pl-3">
                    <p className="font-bold">Register with us & get PKR 100 extra discount</p>
                    <p className="font-semibold">Enjoy PKR 100 reward on registration which is available to redeem on the checkout page</p>
                </div>
            </div>

            <div className="ml-[22%] items-start">
                <p>- or -</p>
            </div>

            <div className="flex m-8 justify-items-start border-2 bg-blue-600 rounded-lg pt-5 pl-0 pb-5 md:w-[46%]">
                <i className="ml-[22%] text-3xl text-white ri-phone-line"></i>
                <p className="text-2xl text-white font-bold pt-1 pl-3">03444980396</p>
            </div>

        </>
    )
}


