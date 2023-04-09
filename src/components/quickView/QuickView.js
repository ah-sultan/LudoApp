import Image from 'next/image'
import { FaStar, FaRegHeart, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'

// Images
import img1 from '../../../public/img/quick-view/1.jpg'


function QuickView(props) {

  const product = props.product
  const images = product.images.slice(0,4)

  return (
    <>
      <div className={`fixed left-0 right-0 top-0 bottom-0 z-[120] w-full h-full overflow-scroll ${props.showModal ? 'block' : 'hidden'}`}>
        <div className="absolute z-[-1] w-full h-[100vh] before:content-[''] before:absolute before:bg-[rgba(0,0,0,0.8)] before:w-full before:h-full before:left-0 before:top-0 before:bottom-0 before:block before:z-[-1]" onClick={() => props.modalHandler(false)}>
        </div>
        <div className="w-[960px] mx-auto p-[35px] mb-100px">
          <div className="p-4 bg-white flex rounded  gap-x-6">
            {/* Images Section */}
            <div className="w-1/2">
              <div>
                <Image src={product.thumbnail} alt="img-1" width={500} height={500} />
              </div>
              <div className="grid grid-cols-4 my-4 mx-auto gap-2.5 w-[95%]">
                {
                  images.map((img, id) => <Image key={id} src={img} width={100} height={100} />)
                }

              </div>
            </div>
            {/* Text Section  */}
            <div className="w-1/2">
              <h4 className="text-30px leading-none font-semibold text-black mb-18px">{product.title}</h4>
              <h6 className="text-primary-900 text-2xl leading-tight mb-5">${product.price}</h6>
              {/* Reviews Section */}
              <div>
                <div className="inline-flex gap-x-1.5 mr-3">
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                  <FaStar className="text-accent-900 text-base leading-none" />
                </div>
                <span className="text-base leading-none text-tGreay-150 font-normal">( {product.reviews} Customer Review )</span>
              </div>
              {/* Drescription section */}
              <p className="text-base leading-[30px] text-tGreay-300 font-light my-30px">{product.description}</p>
              {/* Button Section */}
              <div className="flex gap-x-2.5 mb-30px">
                <div className="w-[80px] h-50px rounded-[5px] bg-dark-500 flex items-center justify-between px-2">
                  <button className="text-white text-lg leading-5 font-medium">-</button>
                  <input type="text" className="border-0 bg-transparent text-sm leading-[50px] max-w-[30px] text-white text-center font-normal" placeholder="0" />
                  <button className="text-white text-lg leading-5 font-medium">+</button>
                </div>
                <button className="px-35px rounded-[5px] h-50px bg-primary-900 text-white font-semibold text-sm leading-relaxed block uppercase hover:bg-black trns-1 tracking-widest">Add To Cart</button>
                <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FaRegHeart /></button>
                <button className="w-50px h-50px rounded-[5px] center-child bg-dark-400 text-white text-lg hover:bg-black trns-1"><FiRefreshCw /></button>
              </div>
              {/* info section */}
              <p className="text-base leading-relaxed text-tGreay-200 font-bold">SKU <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.sku}</span></p>
              <p className="text-base leading-relaxed text-tGreay-200 font-bold my-2.5">Categories: <span className="font-normal text-tGreay-150 hover:text-primary-900">{product.category}</span></p>
              {/* Share */}
              <div>
                <span className="text-base leading-relaxed text-tGreay-200 font-bold">Share</span>
                <div className="inline-flex gap-x-5 pl-6">
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaFacebookF /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaTwitter /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaGoogle /></a>
                  <a href="#" className="text-tGreay-900 hover:text-primary-900"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickView