import { useState } from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaList, FaAngleDown } from 'react-icons/fa'


function ShopTopBar(props) {
    const [showSort, setShowSort] = useState(false)
    const [sortValue, setSortValue] = useState('Relevance')

    const showSortVisible = showSort ? {
        transform: 'scale(1) translate(0)',
        visibility: 'visible',
        opacity: 1,

    } : undefined

    function sortHandler(visibility, value) {
        setShowSort(visibility)
        setSortValue(value)
    }

    const sortTitle = {
        0: 'Name, A to Z',
        1: 'Name, Z to AZ',
        2: 'Price, low to high',
        3: 'Price, high to low',
    }


    return (
        <div className="w-full rounded-[10px] py-2 px-30px border border-[#cfcfcf] flex items-center justify-between mb-60px">
            <p className="font-normal text-base text-[#474747]"><span className="text-primary-900">10</span> Product Found of <span className="text-primary-900">50</span></p>
            <div className="center-child gap-x-5">
                <button className={`text-lg text-[#9e9e9e] ${props.viewTypeBtn === 'grid' ? 'text-primary-900' : undefined}`} onClick={() => props.pViewHandler('grid')}>
                    <BsGrid3X3GapFill />
                </button>
                <button className={`text-lg text-[#9e9e9e] ${props.viewTypeBtn === 'list' ? 'text-primary-900' : undefined}`} onClick={() => props.pViewHandler('list')}>
                    <FaList />
                </button>
            </div>
            {/* Nice Selection */}
            <div className="flex h-45px items-center">
                <p className="text-base text-[#474747]">Sort By:</p>
                <div className="pl-2.5 w-[158px] relative">
                    <div className="flex items-center justify-between" onClick={() => setShowSort(true)}>
                        <span className="text-base text-[#090909]">{sortValue}</span>
                        <FaAngleDown className="text-primary-900" />
                    </div>
                    <ul className="absolute z-10 min-w-[180px] top-[43px] left-0 t-shadow-4 bg-white border border-[rgba(68,68,68,.11)] trns-1 scale-75 -translate-x-[21px] -translate-y-[21px] opacity-0 invisible" style={showSortVisible}>
                        <li className={`py-2 pl-18px pr-7 text-black text-base font-normal hover:bg-primary-100 ${sortValue === sortTitle[0] ? 'bg-primary-200 !font-bold' : undefined}`} onClick={() => sortHandler(false, sortTitle[0])}>{sortTitle[0]}</li>
                        <li className={`py-2 pl-18px pr-7 text-black text-base font-normal hover:bg-primary-100 ${sortValue === sortTitle[1] ? 'bg-primary-200 !font-bold' : undefined}`} onClick={() => sortHandler(false, sortTitle[1])}>{sortTitle[1]}</li>
                        <li className={`py-2 pl-18px pr-7 text-black text-base font-normal hover:bg-primary-100 ${sortValue === sortTitle[2] ? 'bg-primary-200 !font-bold' : undefined}`} onClick={() => sortHandler(false, sortTitle[2])}>{sortTitle[2]}</li>
                        <li className={`py-2 pl-18px pr-7 text-black text-base font-normal hover:bg-primary-100 ${sortValue === sortTitle[3] ? 'bg-primary-200 !font-bold' : undefined}`} onClick={() => sortHandler(false, sortTitle[3])}>{sortTitle[3]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopTopBar 