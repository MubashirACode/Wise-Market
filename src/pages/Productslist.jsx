import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { Footerproducts } from '../components/Footerproducts'

import { Mubashirali } from './Mubashirali'
import { Addtocard } from './Addcard'

export const Productslist = () => {
    const [prod, setprod] = useState([])




    useEffect(() => {
        fetch("http://localhost:5000/getproducts").then((res) => res.json())
            .then((data) => setprod(data))
    }, [])

    const [showCarts, setShowCarts] = useState(false)

    const handleShow = (value) => {
        setShowCarts(value)
    }

    const [carts, setCards] = useState([])
    console.log(carts)



    const addcarts = (data) => {




        setCards([...carts, { ...data, quantity: 1 }])

    }
    return (
        <>
            <div className='p-10 pl-0 pr-0 pb-0'>
                <Mubashirali count={carts.length} handleShow={handleShow}  ></Mubashirali>

                {
                    showCarts ?
                        <Addtocard catrs={carts} ></Addtocard> :
                        <Footerproducts products={prod} addtocards={addcarts} />



                }
            </div>

        </>
    )
}


