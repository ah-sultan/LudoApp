import { player1, player1ClassName, player2, player2ClassName, player3, player3ClassName, player4, player4ClassName } from "@/Data/Data"
import DiceBody from "./DiceBody"
import { useDispatch, useSelector } from "react-redux"
import { dicesAction } from "@/feature/cellSlice"

const Dice = ({
  playerName,
  data,
}) => {

  const getPlayerList = useSelector((state) => state.cells.playerList)
  const getPlayer = getPlayerList.find((player) => player.playerName === playerName)
  const getDice = getPlayer.playerDices.filter((dice) => dice.inSuccessCell === true)
  const getPlayerStatus = useSelector((state) => state.cells.playerStatus)
  const findPlayerStatus = getPlayerStatus.find((find) => find.playerName === playerName)



const dispatch = useDispatch()


const winnerController = () => {
  if (getDice.length === 4) {
    dispatch(winnerController({
      playerName : getPlayer,
    }))
  }
}

const diceHandler = () => {
  dispatch(dicesAction({
    playerName : playerName,
    data : data
  }))

  winnerController()

}


  return (
    <>
      <div onClick={() => data?.readyAction && findPlayerStatus?.playerWaiting ? diceHandler() : null} className="cursor-pointer duration-700" >
          {playerName === player1 && <DiceBody playerName={playerName} data={{...data}} className={player1ClassName}/>}
          {playerName === player2 && <DiceBody playerName={playerName} data={{...data}} className={player2ClassName}/>}
          {playerName === player3 && <DiceBody playerName={playerName} data={{...data}} className={player3ClassName}/>}
          {playerName === player4 && <DiceBody playerName={playerName} data={{...data}} className={player4ClassName}/>}
      </div>
    </>
  )
}

export default Dice