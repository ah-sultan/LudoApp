import Image from 'next/image'
import { useState } from 'react';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { CgShoppingBag } from 'react-icons/cg'
import { TfiAngleDown } from 'react-icons/tfi'

// Images
import whiteLogo from '../../../public/img/header/white-logo.webp'
import Dropdown from '../dropdown/Dropdown';
import OffCanvasCart from '../offcanvasCart/OffCanvasCart';
import Megamenu from '../megamenu/Megamenu';


const shopMegamenu = [
  {
    title: "Shop Page",
    navlink: [['Shop 4 Column', 'Shop 4 Column'], ['Shop Left Sidebar', 'Shop Left Sidebar']]
  },
  {
    title: "product Details Page",
    navlink: [['Product Single', 'url'], ['Product Variable', 'url']]
  },

  {
    title: "Other Shop Pages",
    navlink: [['Cart Page', 'url'], ['Checkout Page', 'url'], ['Account Page', 'url'], ['Login & Register Page'],]
  },

  {
    title: "Other Shop Pages",
    navlink: [['404 Page', 'url'], ['Privacy Policy', 'url'], ['Faq Page', 'url'], ['Coming Soon Page'],]
  },

]

function Header() {
  const [showSideCart, setShowSideCart] = useState(false)

  const siteCartToggler = (value) => {
    setShowSideCart(value)
  }

  return (
    <>
      <header className="bg-white">
        <div className="bg-dark-900 py-4">
          <p className="text-center text-white text-sm ">HELLO EVERYONE! 25% Off All Products </p>
        </div>
        <div className="container">
          <div className="flex justify-between items-center relative">
            {/* Logo --------- */}
            <a href="#">
              <Image src={whiteLogo} alt="logo" />
            </a>
            {/* Navbar Menu --------- */}
            <ul className="flex items-center gap-x-50px">
              <li className="relative"><a href="/" className="nav-link">Home <TfiAngleDown className="inline-block ml-1" />  </a></li>
              <li className="group"><a href="#" className="nav-link">Shop
                <TfiAngleDown className="inline-block ml-1" /> </a>
                <Megamenu shopMegamenu={shopMegamenu} />
              </li>
              <li className="relative group"><a href="#" className="nav-link">Blogs <TfiAngleDown className="inline-block ml-1" />  </a>
                <Dropdown item={[['Cart Pages', '/Cart'], ['Checkout Pages', '/Checkout'],]} />
              </li>
              <li className="relative"><a href="/About" className="nav-link">About Us</a></li>
              <li className="relative"><a href="/Contact" className="nav-link">Contact US </a></li>
            </ul>
            {/* Navbar Button --------- */}
            <div className="flex items-center gap-x-5">
              <button className="text-primary-900 font-semibold">Sign In</button>
              <button><CiSearch className="text-black text-25px hover:text-primary-900" /></button>
              <button><CiHeart className="text-black text-25px hover:text-primary-900" /></button>
              <button className="relative" onClick={() => siteCartToggler(true)}>
                <CgShoppingBag className="text-black text-25px hover:text-primary-900" />
                <span className="bg-primary-900 text-white h-21px w-21px text-11px rounded-full center-child absolute -top-2.5 font-semibold -right-7px">01</span>
              </button>
              <OffCanvasCart offCanvasVisibilty={showSideCart} cartHandler={siteCartToggler} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header