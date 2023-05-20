import Image from 'next/image'
import Link from 'next/link';

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
import { headerData } from './headerdata';


// redux feature
import { useDispatch, useSelector } from 'react-redux';
import { fetchCetagory } from '@/feature/cetagory/cetagorySlice';

// Images
import whiteLogo from '../../../public/img/header/white-logo.webp'

function Header() {
  const [stickyNav, setStickyNav] = useState(false)
  const [navData, setNavdata] = useState([])
  const [showSideCart, setShowSideCart] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showNav, setShowNav] = useState(false)

  // Responsive Subnav Handler
  const [showSubNav, setShowSubNav] = useState("0");

  // Redux Feature
  const dispatch = useDispatch()
  const data = useSelector((data) => data.cetagory)

  const subNavToggler = (index) => {
    if (showSubNav === index) {
      return setShowSubNav("0");
    }
    setShowSubNav(index);


  }


  const siteCartToggler = (value) => {
    setShowSideCart(value)
  }

  const loginModalhandler = (value) => {
    setShowLoginModal(value)
  }

  const searchModalhandler = (value) => {
    setShowSearchModal(value)
  }

  useEffect(() => {

    const stickyNavHandler = () => {
      window.pageYOffset > 300 ? setStickyNav(true) : setStickyNav(false)
    }

    window.addEventListener('scroll', stickyNavHandler)

    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

  }, )

  return (
    <>
      <header className={`bg-white ${stickyNav ? 'navbarSticky' : undefined}`}>
        {/* Notification Bar */}
        <div className="bg-dark-900 py-4" style={{ display: stickyNav ? "none" : "block" }}>
          <p className="text-center text-white text-sm ">HELLO EVERYONE! 25% Off All Products </p>
        </div>
        <div className="container">
          <div className="flex justify-between items-center relative py-2.5 lg:py-0">

            {/* Logo --------- */}
            <a href="#">
              <Image src={whiteLogo} alt="logo" />
            </a>
            {/* responsive Navbar Wrapper --------- */}
            <div className="fixed lg:static left-0 top-0 bottom-0 w-[350px] lg:w-auto z-[110] bg-white lg:bg-transparent px-30px pt-2.5 lg:p-0 overflow-y-scroll lg:overflow-y-visible invisible lg:visible -translate-x-full lg:transform-none duration-500 trns-1" style={showNav ? { transform: "translateX(0)", visibility: "visible" } : undefined}>
              {/* Navbar Close Btn */}
              <div className="text-end pt-1.5 lg:hidden">
                <button className="w-10 h-10 rounded-full bg-primary-900 inline-block relative group/line" onClick={() => setShowNav(false)}>
                  <span className="bg-white w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -rotate-45 group-hover/line:-rotate-180"></span>
                  <span className="bg-white w-5 h-0.5 inline-block absolute trns-1 duration-500 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 group-hover/line:rotate-0"></span>
                </button>
              </div>
              {/* Navbar Nav */}
              <ul className="lg:flex items-center gap-x-50px mt-4 lg:mt-0">
                {
                  headerData.map((item, index) =>

                    <li key={index} className={`relative group`} style={item.megaMenu ? { position: "static" } : undefined} >
                      <Link href={item.url} className={`nav-link ${stickyNav ? 'leading-loose py-5' : null}  ${showSubNav === index ? "text-primary-900" : undefined}`} onClick={() => subNavToggler(index)}>{item.title}
                        {
                          item.dropdown || item.megaMenu ? <TfiAngleDown className=" hidden lg:inline-block ml-1" /> : null
                        }

                        {
                          item.dropdown || item.megaMenu ? <span className={`lg:hidden trns-1 ${showSubNav === index ? "rotate-45" : undefined}`}>+</span> : null
                        }

                      </Link>
                      {
                        item.dropdown ? <Dropdown id="blogNav" item={item.dropdown} showNav={showSubNav === index ? true : false} /> : null
                      }
                      {
                        item.megaMenu ? <Megamenu shopMegamenu={item.megaMenu} showNav={showSubNav === index ? true : false} /> : null
                      }
                    </li>
                  )
                }
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
                <CgMenu />
              </button>
              {/* Navbar Components */}
              <Offcanvas display={showNav ? "block" : "none"} zIndex={100} />
              <SideCart offCanvasVisibilty={showSideCart} cartHandler={siteCartToggler} />
              <LoginModal loginModalhandler={loginModalhandler} loginBoxVisibility={showLoginModal} />
              <SearchModal searchModalhandler={searchModalhandler} searchBoxVisibility={showSearchModal} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header