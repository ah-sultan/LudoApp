import { player1, player2, player3 } from "@/Data/Data"
import { BiLock } from 'react-icons/bi'
import { FiLoader } from 'react-icons/fi'
import { MainCellType } from "@/feature/initialState/MainCellType"
import { playerStatusAction, shuffleAction, winnerListAction } from "@/feature/cellSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BsHandIndexFill, BsHandThumbsDown } from "react-icons/bs"
import Image from "next/image"



const ShuffleBox = ({
  playerName
}) => {
  const [isTrue, setIsTrue] = useState(false)
  const [ready, setReady] = useState(false)
  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)
  const [track, setTrack] = useState([])


  const dispatch = useDispatch()

  const getPlayerList = useSelector((state) => state.cells.playerList)
  const findPlayer = getPlayerList.find((player) => player.playerName === playerName)
  


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

      // Player Status 

      dispatch(playerStatusAction({
        currentValue: randomNumber,
        playerName: playerName,
      }))

    }, 100)


  }


  // ----------------------- Draft _________________________________


  // const arr = [2, 4, 2, 2, 6, 3, 5, 2, 6, 4, 3, 6, 6, 1, 5, 6, 6, 5, 2, 6, 4, 3,]
  // const ShuffleHandler = () => {

  //   setCount(count + 1)

  //   setTimeout(() => {
  //     setNumber(arr[count])
  //     dispatch(shuffleAction({
  //       currentValue: arr[count],
  //       dicesValue: arr[count],
  //       playerName: playerName,
  //     }))

  //     dispatch(playerStatusAction({
  //       currentValue: arr[count],
  //       playerName: playerName,
  //     }))



  //   }, 200)

  // }



  const getPlayerStatus = useSelector((state) => state.cells.playerStatus)
  const findPlayerStatus = getPlayerStatus.find((find) => find.playerName === playerName)
  const getPlayerDices = getPlayerList.flatMap((player) => player.playerDices)
  const findReadyDices = getPlayerDices.filter((dice) => dice.readyAction === true)

  const findOthersPlayer = getPlayerList.filter((player) => player.playerName !== playerName)
  const findOtherDices = findOthersPlayer.flatMap((player) => player.playerDices)
  const readyOthersDices = findOtherDices.filter((dice) => dice.readyAction === true)



  useEffect(() => {

    if (findPlayerStatus.playerReady === true && playerName === findPlayerStatus.playerName) {
      setIsTrue(true)

    } else {
      setIsTrue(false)
    }

    if (readyOthersDices.length === 0) {
      setReady(true)
    } else {
      setReady(false)
    }

  }, [isTrue, findReadyDices, getPlayerDices, findPlayerStatus, getPlayerStatus, readyOthersDices.length, playerName, findPlayer])

  return (
    <>
      {
        isTrue ?

          <div onClick={() => ready && ShuffleHandler()} className="relative h-12 w-12 xxl:h-14 xxl:w-14 rounded flex justify-center items-center border bg-white shadow-20">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              {ready &&
                <div className="duration-75 animate-bounce">
                  <BsHandIndexFill className="text-4xl text-orange-600  rotate-180" />
                </div>
              }
            </div>
            {
              ready ? 
              <ul className="p-0.5 grid grid-cols-[auto_auto]  justify-center items-center gap-1.5 ">
              { 
                Array(number).fill().map((_, index) => {
                  return (
                    <li key={index} className="w-1.5 h-1.5 rounded-full bg-black animate-shuffleRotate"></li>
                  )
                })
              }
            </ul> :

            <div className="h-full w-full flex justify-center items-center">
              <FiLoader className="text-xl text-black animate-spin"/>
            </div>
            }
          </div>
          :
          <div className="h-12 w-12 xxl:h-14 xxl:w-14 rounded flex justify-center items-center border bg-white">
            <BiLock className="text-2xl text-gray-300" />
          </div>
      }
    </>
  )
}

export default ShuffleBox