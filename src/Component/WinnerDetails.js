import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const WinnerDetails = () => {
    const [firstWinner, setFirstWinner] = useState('')
    const [secondWinner, setSecondWinner] = useState('')
    const [thirdWinner, setThirdWinner] = useState('')
    const [show, setShow] = useState(false)

    const winnerList = useSelector((state) => state.cells.winnerList )
    

    useEffect(() => {


        setFirstWinner(winnerList[0])
        setSecondWinner(winnerList[1])
        setThirdWinner(winnerList[2])

        if(winnerList.length === 3){
            setShow(true)
        }

    }, [winnerList, firstWinner, secondWinner, thirdWinner, show])
  
    if(show){
        return(

            <>
            <div className="bg-black/80 h-full w-full inset-0 absolute z-40">
                <div className="w-[300px]  h-[250px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-50 shadow-20 rounded-3xl border-4 bg-blue-900 border-rose-500" >
                    <div className="grid grid-cols-3 w-10/12 mx-auto mt-10 items-end">
                        
                        <div className="2nd winner h-[80px] bg-yellow-500">
                            <span>2<sup>nd</sup> Winner</span>
                            <div className="mt-3">
                                {secondWinner}
                            </div>
                        </div>
                        <div className="3rd winner h-[110px] bg-green-400">
                                <span>1<sup>st</sup> Winner</span>
                                <div className="mt-3">
                                {firstWinner}
                            </div>
                        </div>
                        <div className="3rd winner h-[70px] bg-blue-600">
                            <span>3<sup>rd</sup> Winner</span>
                            <div className="mt-3">
                                {thirdWinner}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

        )
    }
}

export default WinnerDetails