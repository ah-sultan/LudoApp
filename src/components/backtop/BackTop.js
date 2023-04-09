import { BsChevronUp } from "react-icons/bs"
import { useEffect, useState } from "react"


function BackTop() {
const [showBtn, setShowBtn] = useState(false)

useEffect(() => {
  const btnShowHandler = () =>{
    window.pageYOffset > 300? setShowBtn(true) : setShowBtn(false)
  }

  window.addEventListener('scroll', btnShowHandler)

  return () => {
    window.removeEventListener('scroll', btnShowHandler)
  }
})


  return (
    <>
        <div className="w-50px h-50px rounded-full fixed right-5 bottom-0 invisible trns-1 duration-1000 bg-primary-900 t-shadow-2 " style={showBtn ? {visibility : "visible", bottom : "60px"} : undefined}>
            <button className="w-full h-full center-child" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
                <BsChevronUp className="text-white"/>
            </button>
        </div>
    </>
  )
}

export default BackTop