
import { Link } from 'react-router-dom'
import delivey from '../assets/images/deliverimg.png'
export  const Midimage = () => {
  return (
    <>
     <div className='m-10 mr-0 ml-0 '>
      <Link className='text-center  items-center m-10' >
      <img src={delivey} className='m-2' alt="" />
      </Link>
       
    </div>
    
    </>
  )
}


