import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
export const Registration = () => {
    const [regis, setRegis] = useState({
        Username: "",
        Password: "",
        Email: "",
        Address: "",
    })
    const navigate = useNavigate()
    const handleUserNameInput = (event) => {
        setRegis({ ...regis, Username: event.target.value });
        // console.log(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setRegis({ ...regis, Password: event.target.value });
        // console.log(event.target.value);
    };
    const handleEmailInput = (event) => {
        setRegis({ ...regis, Email: event.target.value });
        // console.log(event.target.value);
    };
    const handleAddressInput = (event) => {
        setRegis({ ...regis, Address: event.target.value });
        // console.log(event.target.value);
    };


    const handleSubmitRegisterForm = () => {


        setTimeout(() => {
            navigate('/')
        }, 2000);

        toast.success("Registration  successful.");
    };



    return (
        <>
        <div className="flex ">
        <Link to="/wishlist/home" className="m-10 mr-0 mt-0  -mt-8 mb-0 text-sm underline text-blue-700">
                Home
            </Link>
            <Link to="/wishlist/linkroute" className="m-10  -mt-8  mr-0 mt-0 mb-0 text-sm underline text-blue-700">
                Categories
            </Link>
            
            </div>

            <div className="mt-10 gap-x-6 gap-y-8 container mx-auto w-96">
                <div className="sm:col-span-3">
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Full name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            onChange={handleUserNameInput}
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            onChange={handleEmailInput}
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            onChange={handlePasswordInput}
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"

                    >
                        Address
                    </label>
                    <div className="mt-2">
                        <input


                            type="text"
                            name="first-name"
                            onChange={handleAddressInput}
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleSubmitRegisterForm}
                        className="bg-purple-700 w-full rounded-md px-4 mt-4 py-2  text-white"
                    >
                        Submit
                    </button>
                    < Toaster />
                </div>

            </div>
        </>
    )
}


