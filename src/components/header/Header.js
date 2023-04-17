import Image from 'next/image'
import { useEffect, useState } from 'react';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { CgShoppingBag, CgMenu } from 'react-icons/cg'
import { TfiAngleDown } from 'react-icons/tfi'

import Dropdown from '../dropdown/Dropdown';
import Megamenu from '../megamenu/Megamenu';
import LoginModal from '../login/LoginModal';
import SearchModal from '../searchModal/SearchModal';
import SideCart from '../sideCard/SideCart';
import Offcanvas from '../offcanvas/Offcanvas';


// Images
import whiteLogo from '../../../public/img/header/white-logo.webp'


const shopMegamenu = [
  {
    title: "Shop Page",
    navlink: [['Shop 4 Column', '/FourColumn'], ['Shop Left Sidebar', '/LeftSideBar']]
  },
  {
    title: "product Details Page",
    navlink: [['Product Single', '/SingleProduct'], ['Product Variable', '/VariableProduct']]
  },

  {
    title: "Other Shop Pages",
    navlink: [['Cart Page', '/Cart'], ['Checkout Page', '/Checkout'], ['Account Page', '/Account'], ['Login & Register Page', '/Login'],]
  },

  {
    title: "Other Shop Pages",
    navlink: [['404 Page', 'url'], ['Privacy Policy', '/Privacy'], ['Faq Page', '/Faq'], ['Coming Soon Page'],]
  },

]

function Header() {
  const [stickyNav, setStickyNav] = useState(false)
  const [showSideCart, setShowSideCart] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [showSubNav, setShowSubNav] = useState(undefined)
    
  const siteCartToggler = (value) => {
    setShowSideCart(value)
  }

  const loginModalhandler = (value) =>{
    setShowLoginModal(value)
  }

  const searchModalhandler = (value) =>{
    setShowSearchModal(value)
  }

  useEffect(() => {

    const stickyNavHandler = () => {
       window.pageYOffset > 300 ? setStickyNav(true) : setStickyNav(false)
    }

    window.addEventListener('scroll',stickyNavHandler )

  })

  return (
    <>
      <header className={`bg-white ${stickyNav ? 'navbarSticky': undefined}`}>
        {/* Notification Bar */}
        <div className="bg-dark-900 py-4" style={{display : stickyNav ? "none": "block"}}>
          <p className="text-center text-white text-sm ">HELLO EVERYONE! 25% Off All Products </p>
        </div>
        <div className="container">
          <div className="flex justify-between items-center relative py-5 lg:py-0">
            
            {/* Logo --------- */}
            <a href="#">
              <Image src={whiteLogo} alt="logo" />
            </a>
            {/* responsive Navbar Wrapper --------- */}
            <div className="fixed lg:static left-0 top-0 bottom-0 w-[350px] lg:w-auto z-[110] bg-white lg:bg-transparent px-30px pt-2.5 lg:p-0 overflow-y-scroll lg:overflow-y-visible invisible lg:visible -translate-x-full lg:transform-none duration-500 trns-1" style={showNav ? {transform : "translateX(0)", visibility : "visible" } : undefined}>
              {/* Navbar Close Btn */}
              <div className="text-end pt-1.5 lg:hidden">
                <button className="w-10 h-10 rounded-full bg-primary-900 inline-block relative group/line" onClick={() => setShowNav(false)}>
                  <span className="bg-white w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45 group-hover/line:-rotate-180"></span>
                  <span className="bg-white w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 group-hover/line:rotate-0"></span>
                </button>
              </div>
            <ul className="lg:flex items-center gap-x-50px">
              <li className="relative"><a href="/" className="nav-link">Home</a></li>
              <li className="group"><a href="#" className="nav-link" onClick={() => setShowSubNav('Shop')}>
                Shop <span className="lg:hidden">+</span>
                <TfiAngleDown className=" hidden lg:inline-block ml-1" /> </a>
                <Megamenu shopMegamenu={shopMegamenu} showSubNav={showSubNav === "Shop" ?  subNavHndler: undefined }/>
              </li>
              <li className="relative group"><a href="#" className="nav-link">Blogs 
              <span className="lg:hidden">+</span>
                  <TfiAngleDown className="hidden lg:inline-block ml-1" />  
              </a>
                <Dropdown item={[['Blog Grid Page', '/AllBlog'], ['Blog Single Page', '/BlogDetails'],]} />
              </li>
              <li className="relative"><a href="/About" className="nav-link">About Us</a></li>
              <li className="relative"><a href="/Contact" className="nav-link">Contact US </a></li>
            </ul>
            </div>
            {/* Navbar Button --------- */}
            <div className="flex items-center gap-x-2.5 sm:gap-x-5">
              <button onClick={() => loginModalhandler(true)} className="text-[13px] sm:text-base sm:text-primary-900 font-semibold">Sign In</button>
              <button onClick={() => setShowSearchModal(true)}><CiSearch className="text-black text-20px sm:text-25px hover:text-primary-900" /></button>
              <button><CiHeart className="text-black text-20px sm:text-25px hover:text-primary-900" /></button>
              <button className="relative" onClick={() => siteCartToggler(true)}>
                <CgShoppingBag className="text-black text-20px sm:text-25px hover:text-primary-900" />
                <span className="bg-primary-900 text-white h-21px w-21px text-11px rounded-full center-child absolute -top-2.5 font-semibold -right-7px">01</span>
              </button>
              {/* Mobile Nav Btn */}
              <button className="ml-3.5 lg:hidden text-2xl" onClick={() => setShowNav(true)}>
                <CgMenu/>
              </button>
              {/* Navbar Components */}
              <Offcanvas display={showNav ? "block" : "none"}/>
              <SideCart offCanvasVisibilty={showSideCart} cartHandler={siteCartToggler} />
              <LoginModal loginModalhandler={loginModalhandler} loginBoxVisibility={showLoginModal}/>
              <SearchModal searchModalhandler={searchModalhandler} searchBoxVisibility={showSearchModal}/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header