import Link from "next/link"
import { useEffect, useState } from "react"


function Dropdown(props) {
    const list = props.item
    const [isTrue, setIsTrue] = useState(false)


    useEffect(() => {
        setIsTrue(props.showNav)

    }, [props.showNav])

    return (
        <div className={`h-0 lg:h-auto lg:absolute lg:min-w-[205px] lg:bg-white top-[99%] lg:t-shadow-3 z-10 trns-1 origin-top invisible scale-y-0 group-hover:visible lg:group-hover:scale-y-100 ${isTrue ? "showSubNav" : null}`}>
            <ul className="mr-5">
                {
                    list.map((list, index) => {
                        return (
                            <li key={index}><Link href={list.url} className="block text-sm text-dark-500 md:text-black py-3 pl-5 border-b md:uppercase border-solid border-[#eee] trns-1 md:hover:pl-25px hover:text-primary-900">{list.title}</Link></li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default Dropdown 