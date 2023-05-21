import { useEffect } from "react"

// Redux Features
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "@/feature/product/productSlice"
import { setCetagory } from "@/feature/filter/filterSlice"

function CetagoryFilter(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    // redux feature
    const product = useSelector((data) => data.products)
    const cetagory = product.data.map((list) => list.category)
    const uniqueCetagory = Array.from(new Set(cetagory));

    return (
        <>
            <div className="py-10 px-30px rounded-[10px] bg-[#fafafa] mb-9">
                <h5 className="sidebar-title mb-5">Category</h5>
                <ul>
                    {
                        product.status === "success" ? uniqueCetagory.map((list, id) => {
                            return (
                                <li key={id} className="mt-1" onClick={()=> dispatch(setCetagory(list))}>
                                    <span className="hover:text-primary-900 text-[#737070] text-base capitalize leading-none">{list}</span>
                                </li>
                            )
                        }) : null
                    }
                </ul>
            </div>
        </>
    )
}

export default CetagoryFilter


const data = [
    {
        title : 'title 1',
        cetagory : 'velt'
    },
    {
        title : 'title 2',
        cetagory : 'velt'
    },
    {
        title : 'title 3',
        cetagory : 'root'
    },
    {
        title : 'title 4',
        cetagory : 'velt'
    },
    {
        title : 'title 5',
        cetagory : 'markey'
    },
    {
        title : 'title 6',
        cetagory : 'velt'
    },
];