import { useEffect } from "react"
import { BiSearch } from "react-icons/bi"



function SearchModal(props) {

    const showModal = {
        visibility : "visible",
        transform : "scale(1)",
        top : '0px'
    }

    useEffect(() => {
        if(props.searchBoxVisibility){
            document.body.style.overflow = 'hidden';
          }else{
            document.body.style.overflow = 'unset';
        }
    })

  return (
    <>
    <div className="bg-[rgba(0,0,0,.87)] fixed top-full left-0 bottom-0 right-0 w-full h-full invisible overflow-y-scroll z-[130] trns-1 " style={props.searchBoxVisibility? showModal : undefined}>
        <div>
            <button onClick={() => props.searchModalhandler(false)} type="button" className="center-child w-10 h-10 border border-white text-white text-[30px] border-solid absolute top-50px right-50px">
                <span>×</span>
            </button>
            <div className="center-child h-[100vh]">
                <div className="w-[330px] md:w-[400px] rounded-lg t-shadow-8 px-5 py-45px bg-[rgba(255,255,255,.1)]">
                    <h4 className="text-2xl leading-1.2 font-semibold text-white capitalize mb-7">Search Your Product</h4>
                    <div>
                        <form action="#">
                            <div className="relative h-45px">
                                <input type="text" placeholder="Search here..." className="w-[99%] h-50px px-5 rounded bg-white text-sm leading-loose text-dark-700"/>
                                <button className="center-child w-60px h-50px absolute right-0 top-0 bottom-0 bg-primary-900 text-white text-lg rounded-e hover:bg-black">
                                    <BiSearch/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchModal