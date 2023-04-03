import {BsGrid3X3GapFill} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'


function ShopTopBar() {
  return (
    <div className="w-full rounded-[10px] py-2 px-30px border border-[#cfcfcf] flex items-center justify-between">
        <p className="font-normal text-base text-[#474747]"><span className="text-primary-900">10</span> Product Found of <span className="text-primary-900">50</span></p>
        <div className="center-child gap-x-5">
            <button className="text-lg text-primary-900">
                <BsGrid3X3GapFill/>
            </button>
            <button className="text-lg text-[#9e9e9e]">
                <FaList/>
            </button>
        </div>
        {/* Nice Selection */}
        <div className="flex">
            <p className="text-base text-[#474747]">Sort By:</p>
        </div>
    </div>
  )
}

export default ShopTopBar 