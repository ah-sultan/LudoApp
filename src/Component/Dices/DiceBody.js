import { MdLocationOn } from "react-icons/md"

const DiceBody = ({
  className,
    data = false,
}) => {



  return (
    <>
        <div className={`w-3 h-3 rounded-full  border relative text-primary border-primary ${className} ${data.readyAction ? 'shadow-xl' : 'shadow'}`}>
           <div className={`${data.readyAction ? 'animate-diceReady' : null}`}>
            <span className={`absolute -top-2 left-1/2 -translate-x-1/2 `}>
                  <MdLocationOn/>
              </span>
           </div>
        </div>
    </>
  )
}

export default DiceBody