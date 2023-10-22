import { player1, player1ClassName, player2, player2ClassName, player3, player3ClassName, player4, player4ClassName } from "@/Data/Data"
import DiceBody from "./DiceBody"
import { useDispatch, useSelector } from "react-redux"
import { dicesAction } from "@/feature/cellSlice"

const Dice = ({
  playerName,
  data,
}) => {



const dispatch = useDispatch()

const diceHandler = () => {
  dispatch(dicesAction({
    playerName : playerName,
    data : data
  }))


}


  return (
    <>
      <div onClick={() => data.readyAction ? diceHandler() : null} className="cursor-pointer" >
          {playerName === player1 && <DiceBody playerName={playerName} data={{...data}} className={player1ClassName}/>}
          {playerName === player2 && <DiceBody playerName={playerName} data={{...data}} className={player2ClassName}/>}
          {playerName === player3 && <DiceBody playerName={playerName} data={{...data}} className={player3ClassName}/>}
          {playerName === player4 && <DiceBody playerName={playerName} data={{...data}} className={player4ClassName}/>}
      </div>
    </>
  )
}

export default Dice