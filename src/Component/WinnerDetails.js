import { resetAction } from "@/feature/cellSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const WinnerDetails = () => {
    const [firstWinner, setFirstWinner] = useState('')
    const [secondWinner, setSecondWinner] = useState('')
    const [thirdWinner, setThirdWinner] = useState('')
    const [show, setShow] = useState(false)


    const dispatch = useDispatch()
    const winnerList = useSelector((state) => state.cells.winnerList )
    

    useEffect(() => {


        setFirstWinner(winnerList[0])
        setSecondWinner(winnerList[1])
        setThirdWinner(winnerList[2])

        if(winnerList.length === 3){
            setTimeout(() => {
                setShow(true)
            }, 500);
        }

    }, [winnerList, firstWinner, secondWinner, thirdWinner, show])


    const resetGameHandler = () => {
        dispatch(resetAction())
        setTimeout(() => {
            setShow(false)
        }, 1000);
    }
  
    if(show){
        return(

            <>
            <div className="bg-black/80 h-full w-full inset-0 absolute z-40">
                <div className=" w-fit h-fit px-10 py-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-50 shadow-20 rounded-3xl border-4 bg-blue-900 border-rose-500" >
                    <div className="grid grid-cols-1  items-end capitalize font-semibold">
                        
                        <div className="2nd-winner bg-yellow-500 px-2 py-3">
                            <div>1<sup>st</sup> Winner: <span>{firstWinner}</span></div>
                        
                        </div>
                        <div className="3rd-winner bg-green-400 px-2 py-3">
                            <div>2<sup>nd</sup> Winner: <span>{secondWinner}</span></div>
                        </div>
                        <div className="3rd-winner  bg-blue-600 px-2 py-3">
                            <div>3<sup>rd</sup> Winner: <span>{thirdWinner}</span></div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={() => resetGameHandler()} className="btn w-full px-7 py-2 shadow-md border-black bg-yellow-500 text-black text-lg text capitalize">
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
            </>

        )
    }
}

export default WinnerDetails