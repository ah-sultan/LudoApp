import { useSelector } from "react-redux"
import FinisherCellBody from "./FinisherCellBody"
import { player3, player4 } from "@/Data/Data"

const FinisherCellMap = ({
    playerName,
    className
}) => {

    const getFinisherCell = useSelector((state) => state.cells.finisherCell )
    const orderStyle = playerName === player3 || playerName === player4  ? true : false
  return (
    <>
    {
        getFinisherCell.map((cell,index) => {
            return(
                <div style={{order : orderStyle ? 0 - index : 0}}  key={index} className={`${className} finisher border flex justify-center items-center text-xs relative`}>
                    <FinisherCellBody playerName={playerName} data={{...cell}}/>
                </div>
            )
        })
    }
    </>
  )
}

export default FinisherCellMap