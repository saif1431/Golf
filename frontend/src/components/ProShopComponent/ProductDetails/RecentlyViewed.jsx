import React from 'react'

function RecentlyViewed() {
        const products = [
  {
    id: 1,
    title: "Golf Club Set",
    price: "$199",
    image: "https://malaskagolf.com/cdn/shop/files/21-Days-iPad-1080x1080-_1_-min.jpg?v=1755538308&width=540",
    tag: "Sale",
  },
  {
    id: 2,
    title: "Golf Shoes",
    price: "$89",
    image: "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-1-min.jpg?v=1699483636&width=540",
    tag: "New",
  },
  {
    id: 3,
    title: "Golf Bag",
    price: "$129",
    image: "https://malaskagolf.com/cdn/shop/files/Distance-For-All-Thumbnail-1-min.jpg?v=1700095643&width=540",
    tag: "Sale",
  },
  {
    id: 4,
    title: "Golf Bag",
    price: "$129",
    image: "https://malaskagolf.com/cdn/shop/files/HypericeXKneeHero-min_93782963-e856-4812-924f-7df26c77f87d.jpg?v=1707343460&width=540",
    tag: "Sale",
  },
]
  return (
  <div className='mt-32 border-t pt-8 border-gray-700'>
            <h2 className='title uppercase'>Recently viewed</h2>
              <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden group"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 object-cover"
            />
   
          </div>
          <div className="text-center mt-3">
            <h3 className="text-lg uppercase tracking-widest">{product.title}</h3>
      
          </div>
        </div>
      ))}
    </div>
      </div>
  )
}

export default RecentlyViewed
