import { player1, player2, player3 } from "@/Data/Data"
import { BiLock } from 'react-icons/bi'
import { MainCellType } from "@/feature/MainCellType"
import { playerStatusAction, shuffleAction } from "@/feature/cellSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const ShuffleBox = ({
  playerName
}) => {
  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)
  const [track, setTrack] = useState([])

  const getPlayerStatus = useSelector((state) => state.cells.playerStatus)
  const findPlayerStatus = getPlayerStatus.find((find) => find.playerName === playerName)

  const dispatch = useDispatch()

  // const ShuffleHandler = () => {
  //   const randomNumber = Math.ceil(Math.random() * 6)
  //   setNumber(0)

  //   setTimeout(() => {
  //     setNumber(randomNumber)
  //     setTrack([...track, randomNumber])
  //     dispatch(shuffleAction({
  //       currentValue: randomNumber,
  //       dicesValue: randomNumber,
  //       playerName: playerName,
  //     }))

  //     // Player Status 

  //     dispatch(playerStatusAction({
  //       currentValue: randomNumber,
  //       playerName: playerName,
  //     }))

  //   }, 100)


  // }


  // ----------------------- Draft _________________________________

  const arr = [6, 6, 4, 1, 5, 4, 3, 5, 2, 6, 4, 3, 6, 6, 1, 5, 6, 6, 5, 2, 6, 4, 3,]
  const ShuffleHandler = () => {

    setCount(count + 1)

    setTimeout(() => {
      setNumber(arr[count])
      dispatch(shuffleAction({
        currentValue: arr[count],
        dicesValue: arr[count],
        playerName: playerName,
      }))

      // Player Status 

      dispatch(playerStatusAction({
        currentValue: arr[count],
        playerName: playerName,
      }))

    }, 200)

  }

  const isTrue = findPlayerStatus.playerReady === true && findPlayerStatus.playerWaiting === false

  return (
    <>
      {
        isTrue ?

          <div onClick={() => ShuffleHandler()} className="h-14 w-14 rounded flex justify-center items-center border">
            <ul className="p-0.5 grid grid-cols-[auto_auto]  justify-center items-center gap-1.5 ">
              {
                Array(number).fill().map((_, index) => {
                  return (
                    <li key={index} className="w-1.5 h-1.5 rounded-full bg-black animate-shuffleRotate"></li>
                  )
                })
              }
            </ul>
          </div>
          :
          <div className="h-14 w-14 rounded flex justify-center items-center border">
            <BiLock className="text-2xl text-gray-300" />
          </div>
      }
    </>
  )
}

export default ShuffleBox