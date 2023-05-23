import { useEffect, useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// redux Feature 
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '@/feature/filter/filterSlice';

function PriceFilter() {
    const defultValue = 100
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(defultValue)

    // Redux feature============
    const dispatch = useDispatch()
    const priceValue = useSelector((data) => data.filter.price)

    const onSliderChange = (value) => {
        setMinValue(value[0])
        setMaxValue(value[1])
        dispatch(setPrice({
            minPrice: value[0],
            maxPrice: value[1]
        }))
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

export default PriceFilter