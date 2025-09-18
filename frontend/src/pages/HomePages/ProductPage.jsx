import React from 'react'


import { Link } from 'react-router-dom'

import FilterProduct from '../../components/ProShopComponent/FilterProduct'
import ProductCard from '../../components/ProShopComponent/ProductCard'
import ProductVideo from '../../components/ProShopComponent/ProductVideo'

function ProductPage() {
  return (
    <div className=''>
      <ProductVideo/>
      <div className='py-12 mt-12 px-4 md:px-20'>

      <FilterProduct/>
      <Link to="/product_detail">
        <ProductCard/>
      </Link>
      </div>
    </div>
  )
}

export default ProductPage
