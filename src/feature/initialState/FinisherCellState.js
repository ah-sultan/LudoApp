import { FinisherCellName } from "@/Data/Data"

export const finisherCellState = Array(5).fill().map((_, index) => {
    const cell = {
      id: index + 1,
      cellName: FinisherCellName,
      dices: ''
    }
  
    return cell
  })