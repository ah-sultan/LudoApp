import Image from "next/image"

import { useState } from "react"
import { SlRefresh } from 'react-icons/sl'
import {FaSearch} from 'react-icons/fa'

import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import ShopTopBar from "@/components/shopTopBar/ShopTopBar"
import ProductCard from "@/components/productCard/ProductCard"
import ProductCardList from "@/components/productCard/ProductCardList"
import { ColorFilter, SidebarCategory, SizeFilter, TagFilter } from "@/components/sidebarWidget/SidebarWidget"


// images 
import productImg from '../../public/img/products/1.jpg'
import bannerImg from '../../public/img/left-sidebar/2.jpg'


function LeftSideBar() {

    const [viewType, setViewType] = useState('grid')

    function pViewHandler(value) {
      setViewType(value)
    }
  
    const showGridTab = viewType === 'grid' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined
    const showlistTab = viewType === 'list' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined
  return (
    <>
        <THead/>
        <Header/>
        <main>
            <Breadcrumb title="Shop" pages="Home"/>
            <div className="container">
                <div className="flex py-100px gap-x-6">
                {/* Left Side Product Filter Area =======*/}
                    <div className="w-3/12">
                        <div>
                            {/* Search Box */}
                            <div className="flex items-center px-15px border border-[#cfcfcf] rounded-lg mb-10">
                                <input type="text" placeholder="Seach" className="h-60px w-full text-base leading-[50px] italic text-[#969696] pr-4"/>
                                <button className="border-l border-solid border-[#cfcfcf] pl-15px">
                                    <FaSearch className="text-lg text-[#cfcfcf] hover:text-primary-900"/>
                                </button>
                            </div>
                            {/*Price Filter  */}
                            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                                <h5 className="sidebar-title mb-5">Price Filter</h5>
                                <div>
                                    <input type="text" placeholder="$0 - $100" className="text-sm font-normal text-[#474747] bg-transparent"/>
                                </div>
                                <div className="relative h-3px mt-5 border border-primary-900">
                                    <div className="h-full absolute top-0 left-0 right-0 bg-primary-900"></div>
                                    <span className="w-4 h-4 rounded-full bg-white absolute top-1/2 -translate-y-1/2 block border-4 border-primary-900 left-full"></span>
                                    <span className="w-4 h-4 rounded-full bg-white absolute top-1/2 -translate-y-1/2 block border-4 border-primary-900 right-full"></span>
                                </div>
                            </div>
                            {/* Sidebar Category */}
                            <SidebarCategory list={['Accesasories (6)', 'Computer (4)', 'Covid-19 (2)', 'Electronics (6)', 'Frame Sunglasses (12)', 'Furniture (7)', 'Genuine Leather (9) ']}/>
                            {/* Left Sidebar Color */}
                            <ColorFilter color={['#D28200','#505050', '#FF1616', '#ECBBBF']}/>
                            {/* Left Side Size */}
                            <SizeFilter size={['sm','m','l','m']}/>
                            {/* Tag Filter */}
                            <TagFilter tag={['Fashion','Organic','Old Fashion','Men','Fashion','Dress'  ]}/>
                            <div>
                                <div className=" group/img overflow-hidden relative rounded-lg">
                                    <Image src={bannerImg} alt="img1" className="group-hover/img:rotate-3 group-hover/img:scale-110 w-full trns-1" />
                                    <div className="center-child absolute left-0 top-0 right-0 bottom-0 flex-col">
                                        <h5 className="text-[30px] font-extrabold text-primary-900 text-center mb-5">#bestsellers</h5>
                                        <a href="#" className="text-lg leading-none text-black underline hover:text-primary-900 capitalize">shop now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Product Area ===========*/}
                    <div className="w-9/12">
                    <ShopTopBar pViewHandler={pViewHandler} viewTypeBtn={viewType} />
                    {/* Grid View */}
                        <div className="grid-cols-3 gap-x-6 gap-y-30px  grid invisible opacity-0 h-0 trns-1" style={showGridTab}>
                        {Array(12).fill(<ProductCard img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70" />)}
                        </div>
                        {/* List View */}
                        <div className="gap-y-50px  grid invisible opacity-0 h-0 trns-1" style={showlistTab}>
                        {Array(12).fill(<ProductCardList img={productImg} discount="-10%" new="new" review="5" title="Women's Elizabeth Coat" price="60.65" discountPrice="56.70" description="More room to move.With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or.." />)}
                        </div>
                        <div className="text-center mt-60px">
                        <button className="btn-primary text-base font-bold leading-none w-[210px] h-[65px] ">Load More <SlRefresh className="inline-block ml-4" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default LeftSideBar