function SizeFilter(props) {
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


export default SizeFilter

