export function SidebarCategory(props) {
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
