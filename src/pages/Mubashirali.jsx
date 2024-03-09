

export const Mubashirali = (props) => {
    return (
     <>
     
     <div className='flex justify-between m-10   text-lg md:text-2xl'>
                      <div className='font-bold  '  onClick={()=>props.handleShow(false)} >
                      <i className="ri-arrow-left-line cursor-pointer "></i>
                      </div>
                          <p className="pr-[65%]  ">12.12 Year End Sale</p>
                      <div>
                      
                      </div>
                      <div className='md:ml-0 md:mr-0' onClick={()=>props.handleShow(true)}>
  
                      <i className="ri-shopping-cart-line"> </i>
                        <sup className="text-white text-sm bg-red-500 rounded-full p-2  right-5 -top-4   pt-0 pb-0  "  > {props.count}</sup>     See All <i className="ri-arrow-right-line"></i>
                      </div>
  
                  </div>
     </>
    )
  }
  
  
  