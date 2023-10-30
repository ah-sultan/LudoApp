import { SuccessCellName, player1, player2, player3, player4 } from "@/Data/Data"

const successCellList = Array(4).fill().map((_, index) => {
    const cell = {
      id: index ,
      cellName: SuccessCellName,
      dices: ''
    }
  
    return cell
  })  


export const successCellState = [
  {
    playerName: player1,
    cells: [...successCellList]
  },
  {
    playerName: player2,
    cells: [...successCellList]
  },
  {
    playerName: player3,
    cells: [...successCellList]
  },
  {
    playerName: player4,
    cells: [...successCellList]
  },
]