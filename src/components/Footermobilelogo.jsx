import apple from '../assets/images/apple.png'
import samsung from '../assets/images/samsung.png'
import huawi from '../assets/images/huawei.png'
import oppo from '../assets/images/oppo.png'
import nokia from '../assets/images/nokia.png'
import lenovo from '../assets/images/lenovo.png'

export const Footermobilelogo = () => {
  return (
<>
<div className="grid grid-cols-2 m-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 md:gap-8 w-full">
                <img src={apple} width={90} alt="" />
                <img src={samsung} width={130} alt="" />
                <img src={huawi} alt="" width={90} />
                <img src={oppo} alt="" width={100} />
                <img src={nokia} alt="" width={100} />
                <img src={lenovo} alt="" width={100} />
            </div>

</>
  )
}


