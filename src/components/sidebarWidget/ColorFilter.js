
// Redux Feature
import { useSelector, useDispatch } from "react-redux"
import { setColor } from "@/feature/filter/filterSlice";

function ColorFilter(props) {


    // redux feature
    const product = useSelector((data) => data.products)
    const colors = product.data.flatMap((list) => list.colorHex)
    const uniqueColors = Array.from(new Set(colors));

    const dispatch = useDispatch()

    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-10">
                <h5 className="sidebar-title mb-5">Color</h5>
                <div className="flex flex-wrap gap-4">
                    {
                        uniqueColors.map((color, id) => {
                            return (
                                <button key={id} onClick={() => dispatch(setColor(color))} className={`w-8 h-8 rounded-full outline outline-offset-2 outline-solid outline-gray-400 outline-1   hover:outline-primary-900 focus:outline-primary-900`} style={{ background: color.toString()}}></button>
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
        title : "item-1",
        color : ['red', 'green', 'blue']
    },
    {   
        title : "item-1",
        color : ['Chain', 'lime', 'aqua']
    },
    {   title : "item-1",
        color : ['tomato', 'green', 'white']
    },
    {   title : "item-1",
        color : ['red', 'yellow', 'blue']
    },
    {title : "item-1",
        color : ['red', 'green', 'pink']
    }
]