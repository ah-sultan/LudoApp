import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';

// redux Feature
import { useDispatch, useSelector } from 'react-redux';
import { fetchCetagory } from '@/feature/cetagory/cetagorySlice';
import Link from 'next/link';

export function PriceFilter() {
    const defultValue = 100
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(defultValue)
    const onSliderChange = (value) => {
        setMinValue(value[0])
        setMaxValue(value[1])
    }
    return (
        <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
            <h5 className="sidebar-title mb-5">Price Filter</h5>
            <div>
                <p className="text-sm font-normal text-[#474747]">${minValue} - ${maxValue}</p>
            </div>
            {/* Slider */}
            <div className="mt-4">
                <Slider
                    range
                    allowCross={false}
                    min={0}
                    max={100}
                    defaultValue={[0, defultValue]}
                    draggableTrack
                    onChange={onSliderChange}

                    handleStyle={{
                        border: '4px solid #FB5D5D',
                        height: 16,
                        width: 16,
                        marginLeft: 0,
                        marginTop: -6,
                        backgroundColor: '#fff',
                        opacity: 1,
                        boxShadow: 'none'
                    }}

                    railStyle={{
                        height: 3,
                        border: '.7px solid #FB5D5D'
                    }}

                    trackStyle={{ backgroundColor: '#FB5D5D', height: 3 }}

                />
            </div>
        </div>
    )
}

export function SidebarCategory(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCetagory())
    }, [dispatch])

    // redux feature
    const cetagory = useSelector((data) => data.cetagory )
  return (
    <>
        <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-9">
            <h5 className="sidebar-title mb-5">Category</h5>
            <ul>
                {
                    cetagory.status === "success" ? cetagory.data.map((list, id) => {
                        return(
                            <li key={id} className="mt-1">
                                <Link href="/list" className="hover:text-primary-900 text-[#737070] text-base capitalize leading-none">{list}</Link>
                            </li>
                        )
                    }) : null
                }
            </ul>
        </div>
    </>
  )
}

export function ColorFilter(props){
return(
    <>
        <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
            <h5 className="sidebar-title mb-5">Color</h5>
            <div>
                {
                    props.color.map((color, id) =>{
                        return(
                            <button key={id} className={`w-[36px] h-[36px] lg:w-8 lg:h-8 xl:w-[36px] xl:h-[36px] rounded-full outline outline-offset-2 outline-solid outline-[#d9d9d9] outline-1 mr-2.5 last:mr-0  hover:outline-primary-900 focus:outline-primary-900`} style={{background : color}}></button>
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

export function SizeFilter(props) {
    return(
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
    return(
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