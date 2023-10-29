import { useDispatch, useSelector } from "react-redux"
import { BsStar, BsStars } from 'react-icons/bs'
import Dice from "../Dices/Dice"

const CellBody = ({
  data,
  isStartCell
}) => {

  const playerList = useSelector((state) => state.cells.playerList)


  return (
    <>
      <div className="h-full w-full relative">
        <span className="text-black/20">{data.id}</span>
        {isStartCell &&

          <span className="absolute inset-0 justify-center items-center flex">
            <BsStar className="text-black" />
          </span>
        }

        {
          (data.id === 49 || data.id === 36 || data.id === 23 || data.id === 10) &&

          <span className="absolute inset-0 justify-center items-center flex">
            <BsStars className="text-black " />
          </span>

        }
        <div className="absolute inset-0 flex justify-center items-center flex-wrap">
          {
            playerList?.map((player) => {

              return player?.playerDices?.map((dice, index) => {

                const findId = data.playerArea.find((cell) => cell.playerName === dice.playerName)

                if (dice.inMainCell && findId.id === dice.currentCell.cellId) {
                  return (
                    <Dice key={index} data={{ ...dice }} playerName={dice.playerName} />
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