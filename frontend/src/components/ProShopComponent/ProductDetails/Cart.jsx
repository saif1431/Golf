import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus } from "lucide-react";
import RecentlyViewed from './RecentlyViewed';
import ProductCard from '../ProductCard';

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 19.99; // Example price

  const handleQuantityChange = (change) => {
    setQuantity(q => Math.max(1, q + change));
  };

  return (
    <div className='py-12 px-4 md:px-20'>
    <div className='text-center'>
      <h1 className='title uppercase text-center'>Cart</h1>
      <Link to='/all-product' className='text-gray-500 underline'>Continue Shopping</Link>
      </div>  
      <div className='flex flex-col lg:flex-row items-start mt-12 gap-12'>
            <div className='lg:w-[65%] border-b border-gray-400 w-full'>
                  <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="w-44 h-28 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src="https://malaskagolf.com/cdn/shop/files/ProductListingImage.png?v=1707946820&width=540"
                  alt="I Feel Your Pain - eBook"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">I Feel Your Pain - eBook</h3>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-300 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="text-xl font-medium">${price.toFixed(2)}</span>
                </div>
              </div>
            </div>
            </div>
            <div className='bg-[#EDEDED] lg:w-[35%] w-full p-6  mx-auto'>
                  <h5 className='text-gray-600 tracking-widest '>order Note</h5>
                  <textarea className='w-full border border-gray-300 rounded h-32 p-3 mt-2' placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                  <div className='flex justify-between items-center pt-6    '>
                        <p>Subtotal</p>
                        <span>$0.00</span>
                  </div>
                  <div className='flex justify-between items-center pt-6   pb-6  '>
                        <input type="checkbox" />
                        <p className='uppercase tracking-widest text-gray-700'>I agree with the terms and conditions</p>
                        </div>
                        <button className='btn-primary w-full tracking-widest uppercase'>Check out</button>
                        <p className='text-sm pb-6 pt-6 text-center'>Shipping, taxes, and discount codes calculated at checkout.
</p>
            </div>
      </div>

      <RecentlyViewed/>

      <div className='flex flex-col items-center mt-22'>
            <h1 className='title uppercase'>Popular picks</h1>
            <Link to='/all-product' className='border border-gray-300 py-2 px-6 tracking-widest uppercase'>View All</Link>
            <ProductCard/>
      </div>
    </div>
  )
}

export default Cart
