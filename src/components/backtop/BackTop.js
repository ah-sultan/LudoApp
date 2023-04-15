import { BsChevronUp } from "react-icons/bs"
import { useEffect, useState } from "react"


let scrollSpeed = 0.5;

// Add an event listener for the 'wheel' event
//  { passive: false });

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

function scrolToTop(){
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}


  return (
    <>
        <div className="w-50px h-50px rounded-full fixed right-5 bottom-0 invisible trns-1 duration-1000 bg-primary-900 t-shadow-2 z-40" style={showBtn ? {visibility : "visible", bottom : "60px"} : undefined}>
            <button className="w-full h-full center-child" onClick={() => {scrolToTop()}}>
                <BsChevronUp className="text-white"/>
            </button>
        </div>
    </>
  )
}

export default BackTop