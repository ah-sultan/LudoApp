import { useSelector } from "react-redux"
import Dice from "../Dices/Dice"

const SuccessCellBody = ({
  playerName,
  cellId
}) => {

  const playerList = useSelector((state) => state.cells.playerList)

  return (
    <>
      <div className="h-full w-full relative">
          <div className="absolute inset-0 flex justify-center items-center flex-wrap">
              {
                playerList?.map((player) => {

                  if(player.playerName === playerName){
                    return player.playerDices.map((dice,index) => {
                  
                      if(dice.inSuccessCell && cellId === dice.currentCell.cellId){
                        return(
                          <Dice key={index}  data={{...dice}} playerName={dice.playerName}/>
                        )
                      }
                      
                    })
                  }
                 
                })
              }
            </div>
      </div>
    </>
  )
}

export default SuccessCellBody