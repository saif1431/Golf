"use client"

import { useState } from "react"

export default function ProductImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-eBook-min.jpg?v=1699483637&width=120",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-1-min.jpg?v=1699483636&width=540",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-3-min.jpg?v=1699483636&width=120",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-3-min.jpg?v=1699483636&width=120",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-4-min.jpg?v=1699483635&width=120",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-5-min.jpg?v=1699483637&width=120",
    "https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-6-min.jpg?v=1699483636&width=120",
  ]

  return (
    <div className="flex flex-col">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={images[selectedImage]}
          alt="Product main view"
          className="w-full object-cover mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-16 h-20 rounded border-2 overflow-hidden transition-all ${
              selectedImage === index ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
