import React from 'react'
import ProductCard from '../ProductCard'
import RecentlyViewed from './RecentlyViewed'

function RelatedProduct() {

    
  return (
    <div className='mt-32 space-y-6'>
      <h1 className='title'>YOU MAY ALSO LIKE</h1>
      <ProductCard/>
 <RecentlyViewed/>
    </div>
  )
}

export default RelatedProduct
