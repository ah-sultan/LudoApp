import { useDispatch, useSelector } from "react-redux"
import Dice from "../Dices/Dice"

const CellBody = ({
  data
}) => {

  const playerList = useSelector((state) => state.cells.playerList)


  return (
    <>
      <div className="h-full w-full relative">
          <span className="opacity-30 text-black">{data.id}</span>
          <div className="absolute inset-0 flex justify-center items-center flex-wrap">
              {
                playerList.map((player) => {

                 return player.playerDices.map((dice,index) => {
                  
                    if(dice.inMainCell && data.id === dice.currentCell.cellId){
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

export default CellBody