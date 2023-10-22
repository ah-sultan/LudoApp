import { useSelector } from "react-redux"
import Dice from "./Dices/Dice"

const PlayerHouse = ({
    playerName,
    state,
}) => {


  const getPLayerList =  useSelector((state) => state.cells.playerList)
  const getPlayer = getPLayerList.find((player) => player.playerName === playerName )

  return (
   <>
   
   
    <div className={`border ${state} w-full h-full relative`}>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">{playerName}</span>
        <div className="h-full w-full grid grid-cols-2 justify-center item-center ">
            {
               getPlayer.playerDices.map((data,index) => {

                    
                        return(
                            <div className="flex items-center justify-center" key={index}>
                                <div className="flex items-center justify-center p-1 border border-blue-100">
                                    {data.inHouse == true && <Dice playerName={playerName} data={{...data}}/>}
                                </div>
                                
                            </div>
                        )
                    

               })
            }

        </div>
    </div>
   </>
  )
}

export default PlayerHouse