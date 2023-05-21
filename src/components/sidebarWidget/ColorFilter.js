
// Redux Feature
import { useSelector } from "react-redux"

function ColorFilter(props) {


    // redux feature
    const product = useSelector((data) => data.products)
    const colors = product.data.flatMap((list) => list.colorHex)
    const uniqueColors = Array.from(new Set(colors));

    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                <h5 className="sidebar-title mb-5">Color</h5>
                <div className="flex flex-wrap gap-4">
                    {
                        uniqueColors.map((color, id) => {
                            return (
                                <button key={id} className={`w-8 h-8 rounded-full outline outline-offset-2 outline-solid outline-gray-400 outline-1   hover:outline-primary-900 focus:outline-primary-900`} style={{ background: color.toString()}}></button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default ColorFilter








const data = [
    {
        color : ['red', 'green', 'blue']
    },
    {
        color : ['Chain', 'lime', 'aqua']
    },
    {
        color : ['tomato', 'green', 'white']
    },
    {
        color : ['red', 'yellow', 'blue']
    },
    {
        color : ['red', 'green', 'pink']
    }
]