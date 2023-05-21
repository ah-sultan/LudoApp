
import { useEffect, useState } from 'react';

// redux Feature
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '@/feature/product/productSlice';
import Link from 'next/link';



export function ColorFilter(props) {
    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                <h5 className="sidebar-title mb-5">Color</h5>
                <div>
                    {
                        props.color.map((color, id) => {
                            return (
                                <button key={id} className={`w-[36px] h-[36px] lg:w-8 lg:h-8 xl:w-[36px] xl:h-[36px] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2.5 last:mr-0  hover:outline-primary-900 focus:outline-primary-900`} style={{ background: color }}></button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export function SizeFilter(props) {
    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                <h5 className="sidebar-title mb-5">Size</h5>
                <div>
                    {
                        props.size.map((size, id) => {
                            return <button key={id} className={`w-[36px] h-[36px] lg:w-8 lg:h-8 xl:w-[36px] xl:h-[36px] bg-[#D6D6D6] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2.5 last:mr-0 text-sm text-dark-300 uppercase font-bold hover:outline-primary-900 focus:outline-primary-900`}>{size}</button>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export function TagFilter(props) {
    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                <h5 className="sidebar-title mb-5">Tag</h5>
                <div>
                    {
                        props.tag.map((title, id) => {
                            return <button key={id} className={`text-[#7e7e7e] text-base leading-none py-2.5 px-5 rounded border border-solid inline-block border-[#d9d9d9] my-2 mx-1 hover:text-white hover:bg-primary-900 hover:border-primary-900`}>{title}</button>
                        })
                    }
                </div>
            </div>
        </>
    )
}