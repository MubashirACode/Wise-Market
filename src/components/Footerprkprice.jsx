

export const Footerprkprice = () => {
  return (
    <>
    <div className="flex m-10">
                <h1 className="text-3xl font-bold">Shop By Price</h1>
            </div>

            <div className="grid m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 ">
                <div className="border-2 w-full sm:w-48 h-14 hover:text-white font-semibold rounded bg-zinc-200 hover:bg-[#1BAB6E]">
                    <p className="m-3">PKR0-PKR25000</p>
                </div>
                <div className="border-2 w-full sm:w-48 h-14 hover:text-white font-semibold rounded bg-zinc-200 hover:bg-[#1BAB6E]">
                    <p className="m-3">PKR25000-PKR50000</p>
                </div>
                <div className="border-2 w-full sm:w-52 h-14 hover:text-white font-semibold rounded bg-zinc-200 hover:bg-[#1BAB6E]">
                    <p className="m-3">PKR50000-PKR100000</p>
                </div>
                <div className="border-2 w-full sm:w-60 h-14 hover:text-white font-semibold rounded bg-zinc-200 hover:bg-[#1BAB6E]">
                    <p className="m-3">PKR100000-PKR-200000</p>
                </div>
                <div className="border-2 w-full sm:w-56 md:ml-10 h-14 rounded hover:text-white font-semibold bg-zinc-200 hover:bg-[#1BAB6E]">
                    <p className="m-3">PKR-200000-PKR-300000</p>
                </div>
            </div>
    
    </>
  )
}


