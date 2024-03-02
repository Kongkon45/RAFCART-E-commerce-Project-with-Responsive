import React from 'react'
import Products from '../../../Data/TopProducts.json'
import Cart from '../../../Components/Common/Cart'

const TopProduct = () => {
    // console.log(Products)
  return (
    <div>
        <h2 className=' text-3xl font-semibold pb-6'>TOP NEW ARRIVAL</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                Products?.map((product)=><Cart products={product}/>)
            }
        </div>
    </div>
  )
}

export default TopProduct