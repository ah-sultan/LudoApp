import { player1, player2, player3 } from "@/Data/Data"
import { MainCellType } from "@/feature/MainCellType"
import { shuffleAction } from "@/feature/cellSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"



const ShuffleBox = ({
  playerName
}) => {
  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)
  const [track, setTrack] = useState([])


  const dispatch = useDispatch()

  const ShuffleHandler = () => {
    const randomNumber = Math.ceil(Math.random() * 6)
    setNumber(0)

    setTimeout(() => {
      setNumber(randomNumber)
      setTrack([...track, randomNumber])
      dispatch(shuffleAction({
        currentValue: randomNumber,
        dicesValue: randomNumber,
        playerName: playerName,
      }))

    }, 100)


  }


  // ----------------------- Draft _________________________________

  // const arr = [6, 6, 1, 5, 6, 6, 5, 2, 6, 4, 3,]
  // const ShuffleHandler = () => {

  //   setCount(count + 1)

  //   setTimeout(() => {
  //     setNumber(arr[count])
  //     dispatch(shuffleAction({
  //       currentValue: arr[count],
  //       dicesValue: arr[count],
  //       playerName: playerName,
  //     }))

  //   }, 200)

  // }

  return (
    <>
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
    </>
  )
}

export default ShuffleBox