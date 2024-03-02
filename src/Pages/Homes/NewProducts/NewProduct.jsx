import React from 'react'
import Products from '../../../Data/NewProduct.json'
import Cart from '../../../Components/Common/Cart.jsx'

const NewProduct = () => {
  return (
    <div className='py-6'>
      <h2 className='text-3xl font-semibold pb-8'>RECOMENDED FOR YOU</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          Products?.map((product)=> <Cart products={product}/>)
        }
      </div>
    </div>
  )
}

export default NewProduct