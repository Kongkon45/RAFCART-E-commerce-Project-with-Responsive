import React from 'react'

import { LiaShippingFastSolid } from "react-icons/lia";

const Support = () => {
  return (
    <div className='lg:flex justify-center items-center gap-6 py-8'>
      <div className='lg:w-1/4 w-full flex justify-center items-center gap-5 py-4 px-10 rounded-md border-2 border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <LiaShippingFastSolid />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>Free Shipping</h3>
              <p className='text-md'>Order over $200</p>
          </div>
      </div>

      <div className='lg:w-1/4 w-full my-6 flex justify-center items-center gap-5 py-4 px-10 rounded-md border-2 border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <LiaShippingFastSolid />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>Free Shipping</h3>
              <p className='text-md'>Order over $200</p>
          </div>
      </div>

      <div className='lg:w-1/4 w-full flex justify-center items-center gap-5 py-4 px-10 rounded-md border-2 border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <LiaShippingFastSolid />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>Free Shipping</h3>
              <p className='text-md'>Order over $200</p>
          </div>
      </div>
    </div>
  )
}

export default Support