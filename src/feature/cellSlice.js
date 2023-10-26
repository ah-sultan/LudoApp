import { createSlice } from "@reduxjs/toolkit";
import { finisherCell, diceList, mainCells, successCell, testDices, } from "./CellType";
import { FinisherCellName, SuccessCellName, inHouse, player1, player2, player3, player4 } from "@/Data/Data";
import { playerStatus } from "./PlayerListType";





const cellSlice = createSlice({
  name: "cell",
  initialState: {
    playerStatus: playerStatus,
    playerList: [
      {
        playerName: player1,
        playerDices: diceList
      },

      {
        playerName: player2,
        playerDices: diceList
      },

      {
        playerName: player3,
        playerDices: diceList
      },

      {
        playerName: player4,
        playerDices: diceList
      },
    ],
    mainCells: mainCells,
    finisherCell: finisherCell,
    successCells: [
      {
        playerName: player1,
        cells: [...successCell]
      },
      {
        playerName: player2,
        cells: [...successCell]
      },
      {
        playerName: player3,
        cells: [...successCell]
      },
      {
        playerName: player4,
        cells: [...successCell]
      },

    ]


  },

  reducers: {

    /* -----------------------------------------------------
        Shuffle Action Reducer
    ------------------------------------------------------*/

    playerStatusAction: (state, action) => {

      state.playerStatus.map((player) => {

        if (player.playerName === action.payload.playerName) {

          /* -----------------------------------------------------*/
          // IF Payload === 6 && Player Value === 6 

          if (action.payload.currentValue === 6 && player.playerValue[1] === 6) {

            player.playerValue = []
            player.playerReady = true
            player.playerWaiting = false

            /* -----------------------------------------------------*/
            // IF Player Value === 6 
          } else if (player.playerValue[1] === 6 && player.playerValue.length < 3) {


            player.playerValue.push(action.payload.currentValue)
            player.playerReady = false
            player.playerWaiting = true


            /* -----------------------------------------------------*/
            // IF Player Value === 6 
          } else if (player.playerValue[0] === 6 && player.playerValue.length < 2) {


            if (action.payload.currentValue === 6) {
              player.playerValue.push(action.payload.currentValue)
              player.playerReady = true
              player.playerWaiting = false
            } else {
              player.playerValue.push(action.payload.currentValue)
              player.playerReady = false
              player.playerWaiting = true
            }

            /* -----------------------------------------------------*/
            // IF Player Value === 6 
          } else {

            if (action.payload.currentValue === 6) {
              player.playerValue = []
              player.playerValue.push(action.payload.currentValue)
              player.playerReady = true
              player.playerWaiting = false
            } else {
              player.playerValue = []
              player.playerValue.push(action.payload.currentValue)
              player.playerReady = false
              player.playerWaiting = true

              /* ------------------------------
                Player Status Controling          
              ------------------------------- */
              const findPlayer = state.playerList.find((list) => list.playerName === player.playerName)
              const findHouseDices = findPlayer.playerDices.filter((dice) => dice.inHouse === true)

              if (findHouseDices.length === 4) {
                if (player.playerName === player1) {
                  const findPlayer = state.playerStatus.find((find) => find.playerName === player2)
                  findPlayer.playerReady = true
                  findPlayer.playerWaiting = false
                } else if (player.playerName === player2) {
                  const findPlayer = state.playerStatus.find((find) => find.playerName === player3)
                  findPlayer.playerReady = true
                  findPlayer.playerWaiting = false
                } else if (player.playerName === player3) {
                  const findPlayer = state.playerStatus.find((find) => find.playerName === player4)
                  findPlayer.playerReady = true
                  findPlayer.playerWaiting = false
                } else if (player.playerName === player4) {
                  const findPlayer = state.playerStatus.find((find) => find.playerName === player1)
                  findPlayer.playerReady = true
                  findPlayer.playerWaiting = false
                }
              }
            }

          }

        }

      })

    },

    /* -----------------------------------------------------
        Shuffle Action Reducer
    ------------------------------------------------------*/

    shuffleAction: (state, action) => {
      const totalFiniSherCellValue = 6
      state.playerList.map((player) => {


        if (player.playerName === action.payload.playerName) {

          const houseDices = player.playerDices.filter((dice) => dice.inHouse === true)
          const mainCellDices = player.playerDices.filter((dice) => dice.inMainCell === true)

          player.playerDices.map((dice) => {
            dice.playerName = player.playerName
            dice.currentValue = action.payload.currentValue


            /* --------------------------------------------------
                Dice Value Handling
            --------------------------------------------------- */
            if (action.payload.currentValue === 6) {

              if (dice.dicesValue[1] === 6) {

                dice.dicesValue = []
                dice.readyAction = false

              } else if (dice.dicesValue[0] === 6) {

                dice.dicesValue.push(action.payload.dicesValue)


                if (dice.inHouse) {

                  dice.readyAction = true

                } else if (dice.inMainCell) {
                  if (houseDices.length === 0) {
                    dice.readyAction = true
                  } else {
                    dice.readyAction = false
                  }
                } else if (dice.inFinisherCell) {
                  dice.readyAction = false
                }

              } else {
                dice.dicesValue = []
                dice.dicesValue.push(action.payload.dicesValue)

                if (dice.inHouse) {
                  dice.readyAction = true
                } else if (dice.inMainCell) {

                  if (houseDices.length === 0) {

                    dice.readyAction = true

                  } else {
                    dice.readyAction = false
                  }
                }

              }

            } else {

              if (dice.dicesValue[1] === 6) {

                if (dice.dicesValue.length >= 3) {
                  dice.dicesValue = []
                  dice.dicesValue.push(action.payload.dicesValue)
                } else {
                  dice.dicesValue.push(action.payload.dicesValue)
                }

              } else if (dice.dicesValue[0] === 6) {
                if (dice.dicesValue.length >= 2) {
                  dice.dicesValue = []
                  dice.dicesValue.push(action.payload.dicesValue)
                } else {
                  dice.dicesValue.push(action.payload.dicesValue)
                }
              } else {
                dice.dicesValue = []
                dice.dicesValue.push(action.payload.dicesValue)

                if (dice.inMainCell) {


                  dice.readyAction = true

                } else if (dice.inFinisherCell) {

                  const geFinisherCellId = action.payload.dicesValue + dice.currentCell.cellId
                  const findPlayerStatus = state.playerStatus.find((list) => list.playerName === player.playerName)

                  if (geFinisherCellId <= totalFiniSherCellValue) {

                    dice.readyAction = true

                  } else {
                    dice.readyAction = false

                    /* ----------------------------------------
                      Player Status Controlling 
                    ----------------------------------------- */
                    if (player.playerName === player1) {
                      const findPlayer = state.playerStatus.find((find) => find.playerName === player2)
                      findPlayer.playerReady = true
                      findPlayer.playerWaiting = false
                    } else if (player.playerName === player2) {
                      const findPlayer = state.playerStatus.find((find) => find.playerName === player3)
                      findPlayer.playerReady = true
                      findPlayer.playerWaiting = false
                    } else if (player.playerName === player3) {
                      const findPlayer = state.playerStatus.find((find) => find.playerName === player4)
                      findPlayer.playerReady = true
                      findPlayer.playerWaiting = false
                    } else if (player.playerName === player4) {
                      const findPlayer = state.playerStatus.find((find) => find.playerName === player1)
                      findPlayer.playerReady = true
                      findPlayer.playerWaiting = false
                    }
                  }

                } else {
                  dice.readyAction = false
                }
              }

            }

          })

        }

      })

    },

    /* -----------------------------------------------------
        Dice Action Reducer
      ------------------------------------------------------*/
    dicesAction: (state, action) => {

      const cellHandler = (data = {
        startCell,
        endCell,
      }) => {

        const totalFiniSherCellValue = 6

        state.playerList.map((player) => {



          if (player.playerName === action.payload.playerName) {

            const houseDices = player.playerDices.filter((dice) => dice.inHouse === true)
            player.playerName = action.payload.playerName

            player.playerDices.map((dice) => {
              const mainCellsArea = state.mainCells.flatMap((cell) => cell.playerArea.find((area) => area.playerName === dice.playerName))


              // Action Dice Finder Condition
              if (dice.id === action.payload.data.id) {

                // IF Value Model === [6,6, Others Number] -----------------
                if (dice.dicesValue[1] === 6) {

                  if (dice.inHouse) {
                    // const findMainCell = state.mainCells.find((cell) => cell.id === data.startCell)
                    const findMainCell = mainCellsArea.find((cell) => cell.id === data.startCell)
                    if (houseDices.length === 1) {
                      dice.readyAction = true
                      dice.inHouse = false
                      dice.inMainCell = true
                      dice.currentCell = {
                        cellId: findMainCell.id,
                        cellName: findMainCell.cellName,
                      }
                    } else {
                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = true
                      dice.currentCell = {
                        cellId: findMainCell.id,
                        cellName: findMainCell.cellName,
                      }
                    }
                  } else if (dice.inMainCell) {

                    if (houseDices.length === 0) {
                      const findMainCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId

                      if (findMainCellId > data.endCell) {
                        const findSuccessCellId = findMainCellId - data.endCell
                        if (findSuccessCellId === (5 + 1)) {
                          dice.readyAction = false
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.dicesValue = []
                          dice.inSuccessCell = true
                          dice.currentCell = {
                            cellId: dice.id,
                            cellName: SuccessCellName,
                          }
                        } else {
                          const findFinisherCell = state.finisherCell.find((cell) => cell.id === findSuccessCellId)
                          dice.readyAction = false
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.inFinisherCell = true
                          dice.currentCell = {
                            cellId: findFinisherCell.id,
                            cellName: findFinisherCell.cellName,
                          }

                        }

                      } else {
                        const findMainCell = mainCellsArea.find((cell) => cell.id === findMainCellId)
                        dice.readyAction = true
                        dice.inHouse = false
                        dice.inMainCell = true
                        dice.currentCell = {
                          cellId: findMainCell.id,
                          cellName: findMainCell.cellName,
                        }
                      }


                    } else {
                      dice.readyAction = false
                    }

                  }

                  // IF Value Model === [6, Others Number] -----------------
                } else if (dice.dicesValue[0] === 6) {

                  if (dice.inHouse) {
                    const findMainCell = mainCellsArea.find((cell) => cell.id === data.startCell)
                    dice.readyAction = true
                    dice.inHouse = false
                    dice.inMainCell = true
                    dice.currentCell = {
                      cellId: findMainCell.id,
                      cellName: findMainCell.cellName,
                    }

                  } else if (dice.inMainCell) {

                    if (houseDices.length === 0) {

                      const findMainCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId


                      if (findMainCellId > data.endCell) {
                        const findSuccessCellId = findMainCellId - data.endCell
                        if (findSuccessCellId === (5 + 1)) {
                          dice.readyAction = true
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.dicesValue = []
                          dice.inSuccessCell = true
                          dice.currentCell = {
                            cellId: dice.id,
                            cellName: SuccessCellName,
                          }
                        } else {
                          const findFinisherCell = state.finisherCell.find((cell) => cell.id === findSuccessCellId)
                          const getDueCells = totalFiniSherCellValue - findFinisherCell.id
                          if (getDueCells >= dice.dicesValue[1]) {
                            dice.readyAction = true
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId: findFinisherCell.id,
                              cellName: findFinisherCell.cellName,
                            }
                          } else {
                            dice.readyAction = false
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId: findFinisherCell.id,
                              cellName: findFinisherCell.cellName,
                            }
                          }
                        }

                      } else {

                        const findMainCell = mainCellsArea.find((cell) => cell.id === findMainCellId)
                        dice.readyAction = true
                        dice.inHouse = false
                        dice.inMainCell = true
                        dice.currentCell = {
                          cellId: findMainCell.id,
                          cellName: findMainCell.cellName,
                        }

                      }

                    } else {
                      dice.readyAction = false
                    }

                  }

                  // IF Value Model === [Others Number] -----------------
                } else {

                  /* ------------------------------
                      Player Status Controling          
                  ------------------------------- */
                  if (dice.playerName === player1) {
                    const findPlayer = state.playerStatus.find((find) => find.playerName === player2)
                    findPlayer.playerReady = true
                    findPlayer.playerWaiting = false
                  } else if (dice.playerName === player2) {
                    const findPlayer = state.playerStatus.find((find) => find.playerName === player3)
                    findPlayer.playerReady = true
                    findPlayer.playerWaiting = false
                  } else if (dice.playerName === player3) {
                    const findPlayer = state.playerStatus.find((find) => find.playerName === player4)
                    findPlayer.playerReady = true
                    findPlayer.playerWaiting = false
                  } else if (dice.playerName === player4) {
                    const findPlayer = state.playerStatus.find((find) => find.playerName === player1)
                    findPlayer.playerReady = true
                    findPlayer.playerWaiting = false
                  }


                  /* ------------------------------
                      Dice Action Controling          
                  ------------------------------- */
                  if (dice.inHouse) {

                    dice.readyAction = false
                    dice.inHouse = true
                    dice.inMainCell = false

                  } else if (dice.inMainCell) {

                    const calCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId
                    const getActionId = calCellId >= data.endCell ? data.endCell : calCellId

                    const findMainCell = mainCellsArea.find((cell) => cell.id === getActionId)


                    if (calCellId > data.endCell) {
                      const calFinisherId = calCellId - data.endCell
                      const getFinisherId = calFinisherId
                      const findFinisherCell = state.finisherCell.find((cell) => cell.id === getFinisherId)
                      if (dice.dicesValue[0] === 6) {

                        dice.readyAction = false
                        dice.inHouse = false
                        dice.inMainCell = false
                        dice.inFinisherCell = false
                        dice.inSuccessCell = true
                        dice.currentCell = {
                          cellId: dice.id,
                          cellName: SuccessCellName,
                        }

                      } else {

                        const getIsReadyValue = totalFiniSherCellValue - findFinisherCell.id

                        if (getIsReadyValue >= dice.dicesValue[1]) {

                          dice.readyAction = false
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.inFinisherCell = true
                          dice.currentCell = {
                            cellId: findFinisherCell.id,
                            cellName: findFinisherCell.cellName,
                          }


                        } else {
                          if (dice.dicesValue[0] === 6) {

                            dice.readyAction = true
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId: findFinisherCell.id,
                              cellName: findFinisherCell.cellName,
                            }
                          } else {

                            dice.readyAction = false
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId: findFinisherCell.id,
                              cellName: findFinisherCell.cellName,
                            }
                          }


                        }
                      }

                    } else {

                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = true
                      dice.currentCell = {
                        cellId: findMainCell.id,
                        cellName: findMainCell.cellName,
                      }
                    }

                  } else if (dice.inFinisherCell) {

                    const getFinisherCell = dice.currentCell.cellId + dice.dicesValue[0]


                    if (getFinisherCell <= 5) {
                      const findFinisherId = state.finisherCell.find((cell) => cell.id === getFinisherCell)
                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = false
                      dice.inFinisherCell = true
                      dice.currentCell = {
                        cellId: findFinisherId.id,
                        cellName: findFinisherId.cellName,
                      }
                    } else if (getFinisherCell > 5 && dice.readyAction) {

                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = false
                      dice.inFinisherCell = false
                      dice.inSuccessCell = true
                      dice.currentCell = {
                        cellId: dice.id,
                        cellName: SuccessCellName,
                      }
                    }
                  }
                }


                /* ------------------------------------------------
                  Others Dices Without Action
                ------------------------------------------------ */


              } else {

                // IF Value Model === [6,6, Others Number] -----------------
                if (dice.dicesValue[1] === 6) {

                  if (dice.inHouse) {

                    dice.readyAction = true
                    dice.inHouse = true
                    dice.inMainCell = false

                  } else if (dice.inMainCell) {

                    if (houseDices.length <= 1) {

                      dice.inMainCell = true
                      dice.inHouse = false
                      dice.readyAction = true

                    } else {

                      dice.inMainCell = true
                      dice.inHouse = false
                      dice.readyAction = false

                    }

                  } else if (dice.inFinisherCell) {
                    dice.inMainCell = false
                    dice.inHouse = false
                    dice.readyAction = false
                    dice.inFinisherCell = true
                  }

                  // IF Value Model === [6, Others Number] -----------------
                } else if (dice.dicesValue[0] === 6) {

                  if (dice.inHouse) {

                    dice.readyAction = false
                    dice.inHouse = true
                    dice.inMainCell = false

                  } else if (dice.inMainCell) {

                    dice.inMainCell = true
                    dice.inHouse = false
                    dice.readyAction = true

                  } else if (dice.inFinisherCell) {


                    const getDiceValue = totalFiniSherCellValue - dice.currentCell.cellId




                    if (getDiceValue >= dice.dicesValue[1]) {
                      dice.inMainCell = false
                      dice.inHouse = false
                      dice.readyAction = true
                      dice.inFinisherCell = true
                    } else {
                      dice.inMainCell = false
                      dice.inHouse = false
                      dice.readyAction = false
                      dice.inFinisherCell = true
                    }
                  }

                } else {

                  if (dice.inHouse) {

                    dice.readyAction = false
                    dice.inHouse = true
                    dice.inMainCell = false

                  } else if (dice.inMainCell) {

                    dice.readyAction = false
                    dice.inHouse = false
                    dice.inMainCell = true

                  } else if (dice.inFinisherCell) {

                    dice.readyAction = false
                    dice.inHouse = false
                    dice.inMainCell = false
                    dice.inFinisherCell = true
                  }
                }

              }



              // Remove Dices Value
              dice.dicesValue.shift(0)

            })


          }

        })

      }

      cellHandler({
        startCell: 0,
        endCell: 50,
      })

    }



  }
})

export const { shuffleAction, dicesAction, setPlayerArea, playerStatusAction } = cellSlice.actions

export default cellSlice