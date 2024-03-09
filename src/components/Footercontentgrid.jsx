

export const Footercontentgrid = () => {
  return (
   <>
      <div className="grid grid-cols-1 md:grid-cols-2 mr-16 lg:grid-cols-3 gap-6">
    <div className="text-center">
        <i className="ri-shield-check-fill text-3xl text-green-500"></i>
        <h3 className="font-semibold text-lg md:text-xl">12 Months Free Warranty</h3>
        <p className="text-sm md:text-base">Only for brand new mobile phones</p>
    </div>

    <div className="text-center">
        <i className="ri-medal-line text-3xl text-green-500"></i>
        <h3 className="font-semibold text-lg md:text-xl">Best Price Guarantee</h3>
        <p className="text-sm md:text-base">Some of the lowest prices that you'll find</p>
    </div>

    <div className="text-center">
        <i className="ri-calendar-2-line text-3xl text-green-500"></i>
        <h3 className="font-semibold text-lg md:text-xl">14 Day Check Warranty</h3>
        <p className="text-sm md:text-base">Piece of mind & money back guarantee</p>
    </div>
</div>
   
   </>
  )
}


