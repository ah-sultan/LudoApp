import { HouseCellName } from "@/Data/Data"

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