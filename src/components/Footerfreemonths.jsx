

export const Footerfreemonths = () => {
  return (
    <>
  <div className="m-5 md:mt-20">
    <div className="m-10">
        <h1 className="text-2xl md:text-3xl">Wisemarket Assured <b>(Want to know more?)</b></h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <div className="border-2 flex h-20 rounded p-3 bg-[#D4F4E6] text-start">
            <i className="ri-shield-check-fill text-3xl text-green-500"></i>
            <span className="ml-3">
                <h2 className="text-base md:text-lg">12 Month Free Warranty</h2>
                <p className="w-full md:w-72 underline text-green-600 text-xs md:text-sm">Only for brand new mobile</p>
            </span>
        </div>

        <div className="border-2 flex h-20 rounded p-2 bg-[#D4F4E6] text-start">
            <i className="ri-medal-line text-3xl text-green-500"></i>
            <span className="ml-3">
                <h2 className="text-base md:text-lg">Best Price Guarantee</h2>
                <p className="w-full md:w-72 underline text-green-600 text-xs md:text-sm">Some of the lowest prices</p>
            </span>
        </div>

        <div className="border-2 h-20 flex rounded p-2 bg-[#D4F4E6] text-start">
            <i className="ri-calendar-2-line text-3xl text-green-500 "></i>
            <span className="ml-3">
                <h2 className="text-base md:text-lg">14 Day Check Warranty</h2>
                <p className="w-full md:w-72 underline text-green-600 text-xs md:text-sm">Piece of mind & money back</p>
            </span>
        </div>

        <div className="border-2 h-20 flex rounded p-2 bg-[#D4F4E6] text-start">
            <i className="ri-truck-fill text-3xl text-green-500 *:"></i>
            <span className="pl-2">
                <h2 className="text-base md:text-lg">Free Express Shipping</h2>
                <p className="w-full md:w-72 underline text-green-600 text-xs md:text-sm">Country Free Shipping</p>
            </span>
        </div>
    </div>
</div>
    </>
  )
}


