
import gift from '../assets/images/giftbox.png'
import bag1 from '../assets/images/bag1.png'
import gaming2 from '../assets/images/gaming2.png'
import mobilegame from '../assets/images/mobilegame.png'
import iphone from '../assets/images/iphone.png'


export  const Disscountgift = () => {
  return (
<>
<div className="flex flex-col md:flex-row justify-between m-4 md:m-10">
                <div className='flex flex-col md:flex-row'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-2 md:mb-0'>Special Offers</h1>
                    <span className='m-2 p-3 pt-0'>Wisemarket Find Best Of The Best Phones For You Only</span>
                </div>

                <div className='flex flex-col md:flex-row items-center md:items-start'>
                    <div className='m-2 md:mr-0 md:mb-0'>
                        <p>ON EVERY PURCHASE
                            <br />
                            + EARN REWARD POINTS
                        </p>
                    </div>
                    <div>
                        <img src={gift} width={100} className='rotate-6 transform -mt-4' alt="" />
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 ml-0 relative z-10 -m-10'>

                <img src={bag1} alt="" className='w-80' />
                <img src={gaming2} alt="" className='w-80' />
                <img src={mobilegame} alt="" className='w-80' />
                <img src={iphone} alt="" className='w-80' />

            </div>

</>
  )
}


