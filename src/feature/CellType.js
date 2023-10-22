import { FinisherCellName, MainCellName, SuccessCellName, player1, player2, player3, player4 } from "@/Data/Data"

export const diceList = Array(4).fill().map((_,index) => {
  const cell = {
    id: index + 1,
    playerName : null,
    dicesValue: [],
    previousValue :0,
    currentValue :0,
    readyAction : false,
    currentCell : null,
    inHouse : true,
    inMainCell : false,
    inFinisherCell : false,
    inSuccessCell : false,
  }

  return cell
})

export const mainCells = Array(52).fill().map((_,index) => {
    const cell = {
      id: index + 1,
      cellName : MainCellName,
      activePlayer : null
    }

    return cell
  } )


export const finisherCell = Array(5).fill().map((_,index) => {
    const cell = {
      id: index + 1,
      cellName : FinisherCellName,
      dices: ''
    }

    return cell
})


export const successCell = Array(4).fill().map((_,index) => {
  const cell = {
    id: index + 1,
    cellName : SuccessCellName,
    dices: ''
  }

  return cell
})




