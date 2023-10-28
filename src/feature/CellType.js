import { FinisherCellName, HouseCellName, MainCellName, SuccessCellName, player1, player2, player3, player4 } from "@/Data/Data"
import { MainCellType } from "./MainCellType"

export const diceList = Array(4).fill().map((_, index) => {
  const cell = {
    id: index,
    playerName: null,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: {
      cellId : index,
      cellName : HouseCellName,
    },
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
    playerArea: MainCellType[index]
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
    id: index ,
    cellName: SuccessCellName,
    dices: ''
  }

  return cell
})




export const testDices = [
  {
    id: 0,
    playerName: player2,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: HouseCellName, cellId: 1, },
    inHouse: false,
    inMainCell: true,
    inFinisherCell: false,
    inSuccessCell: false,
  },

  {
    id: 1,
    playerName: player2,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: successCell, cellId: 2 },
    inHouse: false,
    inMainCell: false,
    inFinisherCell: false,
    inSuccessCell: true,
  },

  {
    id: 2,
    playerName: player2,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: MainCellName, cellId: 3 },
    inHouse: false,
    inMainCell: false,
    inFinisherCell: false,
    inSuccessCell: true,
  },

  {
    id: 3,
    playerName: player2,
    dicesValue: [],
    previousValue: 0,
    currentValue: 0,
    readyAction: false,
    currentCell: { cellName: MainCellName, cellId: 1 },
    inHouse: false,
    inMainCell: false,
    inFinisherCell: false,
    inSuccessCell: true,
  },
]


const cell = [
  {
    id: 0,
    cellName: 'MainCell',
    area: [
      { cellId: 2, playerName: "player1", },
      { cellId: 12, playerName: "player2", },
      { cellId: 22, playerName: "player3", },
      { cellId: 32, playerName: "player4", },
    ]
  },

  {
    id: 1,
    cellName: 'MainCell',
    area: [
      { cellId: 3, playerName: "player1", },
      { cellId: 13, playerName: "player2", },
      { cellId: 23, playerName: "player3", },
      { cellId: 33, playerName: "player4", },
    ]
  },

  {
    id: 3,
    cellName: 'MainCell',
    area: [
      { cellId: 4, playerName: "player1", },
      { cellId: 42, playerName: "player2", },
      { cellId: 52, playerName: "player3", },
      { cellId: 62, playerName: "player4", },
    ]
  },

  {
    id: 4,
    cellName: 'MainCell',
    area: [
      { cellId: 62, playerName: "player1", },
      { cellId: 63, playerName: "player2", },
      { cellId: 65, playerName: "player3", },
      { cellId: 39, playerName: "player4", },
    ]
  },

]

// const getArr = cell.filter((mainCe) => mainCe.area.filter((area) => area.playerName === "player1"))

// console.log(getArr)