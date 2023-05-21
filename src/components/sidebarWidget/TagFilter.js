function TagFilter(props) {
    return (
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

export default TagFilter