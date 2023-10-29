import { useSelector } from "react-redux"
import Dice from "../Dices/Dice"

const FinisherCellBody = ({
  data,
  playerName
}) => {

  const playerList = useSelector((state) => state.cells.playerList)


  return (
    <>
    <div className="h-full w-full">
      <span className="text-black">{data.id}</span>
        <div className="absolute inset-0 flex justify-center items-center flex-wrap">
                {
                  playerList?.map((player) => {

                  return player?.playerDices?.map((dice,index) => {
                    
                      if(dice.inFinisherCell && data.id === dice.currentCell.cellId && playerName === dice.playerName){
                        return(
                          <Dice key={index}  data={{...dice}} playerName={dice.playerName}/>
                        )
                      }
                      
                    })
                  })
                }
          </div>
    </div>
    </>
  )
}

export default FinisherCellBody