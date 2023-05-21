function ColorFilter(props) {
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


export default ColorFilter