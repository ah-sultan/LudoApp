import Image from "next/image"

import { useState } from "react"
import { SlRefresh } from 'react-icons/sl'
import { FaSearch } from 'react-icons/fa'

import Meta from "@/components/meta/Meta"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import ShopTopBar from "@/components/shopTopBar/ShopTopBar"
import ProductCard from "@/components/productCard/ProductCard"
import ProductCardList from "@/components/productCard/ProductCardList"

import { PriceFilter, ColorFilter, SidebarCategory, SizeFilter, TagFilter } from "@/components/sidebarWidget/SidebarWidget"


// images 
import bannerImg from '../../public/img/left-sidebar/2.jpg'

import { ProductData } from "../../product"

function LeftSideBar() {
    const [viewType, setViewType] = useState('grid')

    function pViewHandler(value) {
        setViewType(value)
    }
    const products = ProductData

    const showGridTab = viewType === 'grid' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined
    const showlistTab = viewType === 'list' ? { visibility: 'visible', opacity: 1, height: 'auto' } : undefined

    // Const Product Filtering
    return (
        <>
            <Meta title="cetagory" />
            <Breadcrumb title="Shop" pages="Home" />
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-x-6 py-60px lg:py-20 xl:py-100px">
                    {/* Left Side Product Filter Area =======*/}
                    <div className="w-full lg:w-3/12 order-last lg:order-first mt-60px lg:mt-0">
                        <div>
                            {/* Search Box */}
                            <div className="flex items-center px-15px border border-[#cfcfcf] rounded-lg mb-10">
                                <input type="text" placeholder="Seach" className="h-60px w-full text-base leading-[50px] italic text-[#969696] pr-4" />
                                <button className="border-l border-solid border-[#cfcfcf] pl-15px">
                                    <FaSearch className="text-lg text-[#cfcfcf] hover:text-primary-900" />
                                </button>
                            </div>
                            {/*Price Filter  */}
                            <PriceFilter />
                            {/* Sidebar Category */}
                            <SidebarCategory />
                            {/* Left Sidebar Color */}
                            <ColorFilter color={['#D28200', '#505050', '#FF1616', '#ECBBBF']} />
                            {/* Left Side Size */}
                            <SizeFilter size={['sm', 'm', 'l', 'm']} />
                            {/* Tag Filter */}
                            <TagFilter tag={['Fashion', 'Organic', 'Old Fashion', 'Men', 'Fashion', 'Dress']} />
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
                    <div className="w-full lg:w-9/12">
                        <ShopTopBar pViewHandler={pViewHandler} viewTypeBtn={viewType} />
                        {/* Grid View */}
                        <div className="xs:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-30px overflow-hidden grid invisible opacity-0 h-0 trns-1" style={showGridTab}>
                            {
                                products.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCard key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        {/* List View */}
                        <div className="gap-y-50px overflow-hidden grid invisible opacity-0 h-0 trns-1" style={showlistTab}>
                            {
                                products.map((product, index) => {
                                    const { id, brand, rating, title, reviews, thumbnail, price, description, category, sku, images } = product

                                    return <ProductCardList key={index} id={id} brand={brand} title={title} rating={rating} reviews={reviews} thumbnail={thumbnail} price={price} description={description} category={category} sku={sku} images={images} />
                                })
                            }
                        </div>
                        <div className="text-center mt-60px">
                            <button className="btn-primary text-base font-bold leading-none w-[210px] h-[65px] ">Load More <SlRefresh className="inline-block ml-4" /> </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LeftSideBar