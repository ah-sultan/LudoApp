import { MainCellName, player1, player2, player3, player4 } from "@/Data/Data"


const MainCellType = Array(52).fill().map((_, index) => {

    const area = [
        {
            playerName: player1,
            id: index >= 1 ? index - 1 : 51
        },

        {
            playerName: player2,
            id: index >= 14 ? index - 14 : index + 38
        },

        {
            playerName: player3,
            id: index >= 27 ? index - 27 : index + 25
        },

        {
            playerName: player4,
            id: index >= 40 ? index - 40 : index + 12
        }

    ]

    return area
})

export const mainCellState = Array(52).fill().map((_, index) => {
    const cell = {
      id: index,
      cellName: MainCellName,
      activePlayer: null,
      playerArea: MainCellType[index]
    }
  
    return cell
  })