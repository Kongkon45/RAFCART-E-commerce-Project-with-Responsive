import React from 'react'
import brand1 from '../../../assets/images/brand1.png'
import brand2 from '../../../assets/images/brand2.png'
import brand3 from '../../../assets/images/brand3.png'
import brand4 from '../../../assets/images/brand4.png'

const Partner = () => {
  return (
    <div className='py-10'>
        <h2 className='text-center text-3xl font-bold'>OUR PARTNERS</h2>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 mt-10'>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand1} alt="" />
        </div>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand2} alt="" />
        </div>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand3} alt="" />
        </div>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand4} alt="" />
        </div>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand1} alt="" />
        </div>
        <div className='lg: w-2/10 border-2'>
            <img className='w-full h-full ' src={brand2} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Partner