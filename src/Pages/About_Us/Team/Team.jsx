import React from 'react'

import team1 from '../../../assets/images/team-1.jpg'
import team2 from '../../../assets/images/team-2.jpg'
import team3 from '../../../assets/images/team-3.jpg'
import team4 from '../../../assets/images/team-4.jpg'

const Team = () => {
  return (
    <div>
        <h2 className='text-center text-3xl font-bold'>MEET WITH OUR TEAM</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-6'>
            <div className='shadow-lg text-center rounded-lg'>
                <img className='rounded-t-lg' src={team1} alt="" />
                <h3 className='pt-3 text-xl font-semibold'>Jane Cooper</h3>
                <p className='pb-3'>Founder</p>
            </div>
            <div className='shadow-lg text-center rounded-lg'>
                <img className='rounded-t-lg' src={team2} alt="" />
                <h3 className='pt-3 text-xl font-semibold'>Esther Howard</h3>
                <p className='pb-3'>Team Leader</p>
            </div>
            <div className='shadow-lg text-center rounded-lg'>
                <img className='rounded-t-lg' src={team3} alt="" />
                <h3 className='pt-3 text-xl font-semibold'>Arlene McCoy</h3>
                <p className='pb-3'>Marketing Officer</p>
            </div>
            <div className='shadow-lg text-center rounded-lg'>
                <img className='rounded-t-lg' src={team4} alt="" />
                <h3 className='pt-3 text-xl font-semibold'>Kristin Wastson</h3>
                <p className='pb-3'>Senior Officer</p>
            </div>
        </div>
    </div>
  )
}

export default Team