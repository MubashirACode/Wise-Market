import { Link } from "react-router-dom"

export  const Allnavarival = () => {
  return (
    <>
     <div className="flex  m-10 justify-between hidden sm:flex mt-20 ">
                <div>
                    <h1 className="text-2xl font-bold">New Arrivals</h1>
                </div>
                <div className="mt-4 sm:mt-2 ">

                    <ul className="flex   hidden sm:inline-flex">
                        <Link className="pr-4 w-16"><li className="text-center font-semibold border-2 hover:bg-[#1BAB6E] bg-zinc-200 rounded">All</li></Link>
                        <Link className="pr-4"><li className="text-center border-2 w-16 font-semibold hover:bg-[#1BAB6E] bg-zinc-200 rounded">Mobile</li></Link>
                        <Link className="pr-4"><li className="text-center border-2 w-20 font-semibold hover:bg-[#1BAB6E] bg-zinc-200 rounded">Laptops</li></Link>
                        <Link className="pr-4"><li className="text-center border-2 w-20 font-semibold hover:bg-[#1BAB6E] bg-zinc-200 rounded">Tablets</li></Link>
                        <Link className="pr-4"><li className="text-center border-2 w-32 font-semibold hover:bg-[#1BAB6E] bg-zinc-200 rounded">Smart Watches</li></Link>
                        <Link className="pr-4"><li className="text-center border-2 w-32 font-semibold hover:bg-[#1BAB6E] bg-zinc-200 rounded">Accessories</li></Link>
                    </ul>
                </div>

            </div>
    </>
  )
}



