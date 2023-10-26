import { useSelector } from "react-redux"
import SuccessCellBody from "./SuccessCellBody"

const SuccessCellMap = ({
  playerName
}) => {

  const successCells = useSelector((state) => state.cells.successCells)
  const getCell = successCells.find((cell) => cell.playerName === playerName)

  return (
    <>
      {
        getCell.cells.map((cell, index) => {
          return (
            <div key={index} className="text-black leading-none p-0.5 border rounded-full">
              <SuccessCellBody playerName={playerName} cellId={cell.id} />
            </div>
          )
        })
      }
    </>
  )
}

export default SuccessCellMap