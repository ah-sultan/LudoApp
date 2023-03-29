import Image from 'next/image'
import { CiSearch , CiHeart} from 'react-icons/ci';
import {CgShoppingBag} from 'react-icons/cg'
import {TfiAngleDown} from 'react-icons/tfi'

// Images
import whiteLogo from '../../../public/img/header/white-logo.webp'

function Header() {
  return (
   <>
    <header className="bg-white">
        <div className="container">
            <div className="flex justify-between items-center">
                <a href="#">
                  <Image src={whiteLogo} alt="logo"/>
                </a>
                <ul className="flex items-center gap-x-50px">
                  <li className="relative"><a href="#" className="nav-link">Home <TfiAngleDown className="inline-block absolute top-[41%] ml-1"/>  </a></li>
                  <li className="relative"><a href="#" className="nav-link">Shop <TfiAngleDown className="inline-block absolute top-[41%] ml-1"/>  </a></li>
                  <li className="relative"><a href="#" className="nav-link">Blog <TfiAngleDown className="inline-block absolute top-[41%] ml-1"/>  </a></li>
                  <li className="relative"><a href="#" className="nav-link">About Us</a></li>
                  <li className="relative"><a href="#" className="nav-link">Contact US </a></li>
                </ul>
                <div className="flex items-center gap-x-5">
                  <button className="text-primary-900 semi-bold">Sign In</button>
                  <button><CiSearch className="text-black text-25px hover:text-primary-900"/></button>
                  <button><CiHeart className="text-black text-25px hover:text-primary-900"/></button>
                  <button className="relative">
                      <CgShoppingBag className="text-black text-25px hover:text-primary-900"/>
                      <span className="bg-primary-900 text-white h-21px w-21px text-11px rounded-full center-child absolute -top-2.5 -right-7px">01</span>
                    </button>
                </div>
            </div>  
        </div>
    </header>
   </>
  )
}

export default Header