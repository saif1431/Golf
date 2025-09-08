import React from 'react'

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

function ProductCard() {
  return (
    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden group"
        >
          {/* Tag (Sale/New) */}
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 z-10 rounded">
            {product.tag}
          </span>

          {/* Image with Quick View Button */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
       <div className='flex justify-end h-full p-2 items-end'>
                 <button className="absolute inset-0 w-full btn-primary h-fit  text-white opacity-0 group-hover:opacity-100 transition duration-200 flex items-end justify-center text-lg font-semibold">
              Quick View
            </button>
       </div>
          </div>

          {/* Title & Price */}
          <div className="text-center ">
            <h3 className="text-lg uppercase tracking-widest">{product.title}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
