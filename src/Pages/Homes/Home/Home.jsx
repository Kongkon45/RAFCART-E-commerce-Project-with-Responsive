import React from 'react'
import Banner from '../Banner/Banner'
import Support from '../Support/Support'
import Discount from '../Discounts/Discount'
import TopProduct from '../TopProducts/TopProduct'
import Offer from '../Offer/Offer'
import NewProduct from '../NewProducts/NewProduct'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Support/>
        <div className="container md:px-0 lg:px-10">
            <Discount/>
            <TopProduct/>
            <Offer/>
            <NewProduct/>
        </div>
    </div>
  )
}

export default Home