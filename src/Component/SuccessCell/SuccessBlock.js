import { player1, player2, player3, player4 } from "@/Data/Data"
import { useSelector } from "react-redux"
import SuccessCellMap from "./SuccessCellMap"

const SuccessBlock = () => {

  const cellList = useSelector((state) => state.cells.successCells)

  return (
    <>
      <div className="h-full w-full flex justify-center items-center relative">

        {
          cellList.map((player, index) => {

            if (player.playerName === player1) {
              return (
                <div key={index} className=" left-2 top-0 bottom-0 absolute h-full">
                  <div className="flex flex-col h-full justify-center gap-4">
                    <SuccessCellMap playerName={player.playerName} cellList={player.cells} />
                  </div>
                </div>
              )
            } else if (player.playerName === player2) {
              return (
                <div key={index} className="left-0 top-2 right-0 absolute w-full">
                  <div className="flex w-full justify-center gap-4">
                    <SuccessCellMap playerName={player.playerName} cellList={player.cells} />
                  </div>
                </div>
              )
            } else if (player.playerName === player3) {
              return (
                <div key={index} className="top-0 right-2 bottom-0 absolute h-full">
                  <div className="flex flex-col h-full justify-center gap-4">
                    <SuccessCellMap playerName={player.playerName} cellList={player.cells} />
                  </div>
                </div>
              )
            } else if (player.playerName === player4) {
              return (
                <div key={index} className="left-0 bottom-2 right-0 absolute w-full">
                  <div className="flex w-full justify-center gap-4">
                    <SuccessCellMap playerName={player.playerName} cellList={player.cells} />
                  </div>
                </div>
              )
            }

          })
        }

        <span className="text-black">SUCCESS CELL</span>
      </div>
    </>
  )
}

export default SuccessBlock