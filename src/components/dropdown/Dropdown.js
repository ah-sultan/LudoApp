
function Dropdown(props) {
    const list = props.item
  return (
    <div className="absolute min-w-[205px] bg-white top-[99%] t-shadow-3 z-10 trns-1 origin-top invisible scale-y-0 group-hover:visible group-hover:scale-y-100">
        <ul className="mr-5">
            {
                list.map(([title,url], index) => {
                    return(
                        <li key={index}><a href={url} className="block text-sm text-black py-3 pl-5 border-b uppercase border-solid border-[#eee] trns-1 hover:pl-25px hover:text-primary-900">{title}</a></li>
                    )
                })
            }
            
            
        </ul>
    </div>
  )
}

export default Dropdown 