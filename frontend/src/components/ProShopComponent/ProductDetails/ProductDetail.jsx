import { Link } from "react-router-dom"
import ProductImageGallery from "./ProductImageGallery"
import ProductInfo from "./ProductInfo"
import RelatedProduct from "./RelatedProduct"
import { MoveLeftIcon } from "lucide-react"

 function ProductDetail() {
  return (
    <div className="py-12 px-4 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Image Gallery */}
        <div>
          <ProductImageGallery />
        </div>

        {/* Right side - Product Information */}
        <div>
          <ProductInfo />
        </div>
      </div>

      {/* Frequently Bought Together Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">FREQUENTLY BOUGHT TOGETHER</h2>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-eBook-min.jpg?v=1699483637&width=120"
              alt="I Feel Your Pain - eBook"
              className="w-20 h-28 object-cover rounded border"
            />
            <span className="text-2xl text-gray-400">+</span>
            <img
              src="https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-1-min.jpg?v=1699483636&width=540"
              alt="Distance for All eBook"
              className="w-20 h-28 object-cover rounded border"
            />
            <span className="text-2xl text-gray-400">+</span>
            <img
              src="https://malaskagolf.com/cdn/shop/files/I-Feel-Your-Pain-Thumbnail-5-min.jpg?v=1699483637&width=120"
              alt="Invisible Swing eBook"
              className="w-20 h-28 object-cover rounded border"
            />
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="item1" defaultChecked className="w-4 h-4 text-blue-600" />
            <label htmlFor="item1" className="text-sm">
              <strong>THIS ITEM: I FEEL YOUR PAIN - EBOOK</strong> - $24.95
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="item2" defaultChecked className="w-4 h-4 text-blue-600" />
            <label htmlFor="item2" className="text-sm">
              <strong>DISTANCE FOR ALL EBOOK</strong> - $19.95
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="item3" defaultChecked className="w-4 h-4 text-blue-600" />
            <label htmlFor="item3" className="text-sm">
              <strong>INVISIBLE SWING EBOOK</strong> - $24.95
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lg">
            Total price: <strong>$64.85</strong>
          </span>
          <Link to='/cart' className="btn-primary text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors">
            BUY SELECTED ITEMS
          </Link>
        </div>
      </div>

      <RelatedProduct/>
   <div className="flex justify-center mt-20">
       <Link className="btn-primary flex items-center gap-3 tracking-wide uppercase" to="/all-product" >
       <MoveLeftIcon/>
       Back to all Products</Link>
   </div>
    </div>
  )
}

export default ProductDetail
