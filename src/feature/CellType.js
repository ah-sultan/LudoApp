import { FinisherCellName, MainCellName, SuccessCellName, player1, player2, player3, player4 } from "@/Data/Data"
import { MainCellType } from "./MainCellType"

export const diceList = Array(4).fill().map((_, index) => {
  const cell = {
    id: index,
    playerName: null,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: null,
    inHouse: true,
    inMainCell: false,
    inFinisherCell: false,
    inSuccessCell: false,
  }

  return cell
})

export const mainCells = Array(52).fill().map((_, index) => {
  const cell = {
    id: index,
    cellName: MainCellName,
    activePlayer: null,
    playerArea : MainCellType[index]
  }

  return cell
})


export const finisherCell = Array(5).fill().map((_, index) => {
  const cell = {
    id: index + 1,
    cellName: FinisherCellName,
    dices: ''
  }

  return cell
})


export const successCell = Array(4).fill().map((_, index) => {
  const cell = {
    id: index + 1,
    cellName: SuccessCellName,
    dices: ''
  }

  return cell
})




export const testDices = [
  {
    id: 1,
    playerName: player1,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: FinisherCellName, cellId: 1, },
    inHouse: false,
    inMainCell: false,
    inFinisherCell: true,
    inSuccessCell: false,
  },

  {
    id: 2,
    playerName: player1,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: MainCellName, cellId: 2 },
    inHouse: false,
    inMainCell: true,
    inFinisherCell: false,
    inSuccessCell: false,
  },

  {
    id: 3,
    playerName: player1,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: MainCellName, cellId: 2 },
    inHouse: false,
    inMainCell: true,
    inFinisherCell: false,
    inSuccessCell: false,
  },

  {
    id: 4,
    playerName: player1,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: MainCellName, cellId: 2 },
    inHouse: false,
    inMainCell: true,
    inFinisherCell: false,
    inSuccessCell: false,
  },
]