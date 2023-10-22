import { createSlice } from "@reduxjs/toolkit";
import { finisherCell, diceList, mainCells, successCell,  } from "./CellType";
import { FinisherCellName, SuccessCellName, inHouse, player1, player2, player3, player4 } from "@/Data/Data";





const cellSlice = createSlice({
    name :"cell",
    initialState :{
      playerList : [
        {
          playerName : player1,
          playerDices : diceList
        },

        {
          playerName : player2,
          playerDices : diceList
        },

        {
          playerName : player3,
          playerDices : diceList
        },

        {
          playerName : player4,
          playerDices : diceList
        },
      ],
      mainCells :  mainCells,
      finisherCell: finisherCell,
      successCells : [
        {
          playerName : player1,
          cells : [...successCell]
        },
        {
          playerName : player2,
          cells : [...successCell]
        },
        {
          playerName : player3,
          cells : [...successCell]
        },
        {
          playerName : player4,
          cells : [...successCell]
        },
        
      ]
        

    },

    reducers : {

      /* -----------------------------------------------------
          Shuffle Action Handler
      ------------------------------------------------------*/ 

      shuffleAction : (state, action) => {
        
        state.playerList.map((player) => {


          if(player.playerName === action.payload.playerName){

            const houseDices = player.playerDices.filter((dice) => dice.inHouse === true)

            player.playerDices.map((dice) => {
              dice.playerName = player.playerName
              dice.currentValue = action.payload.currentValue
              

              /* --------------------------------------------------
                  Dice Value Handling
              --------------------------------------------------- */
              if(action.payload.currentValue === 6){

                if(dice.dicesValue[1] === 6){

                  dice.dicesValue = []
                  dice.readyAction = false

                }else if(dice.dicesValue[0] === 6){

                  dice.dicesValue.push(action.payload.dicesValue)

                  // dice.readyAction = true
                  
                  if(dice.inHouse){
                    dice.readyAction = true
                  }else if(dice.inMainCell){
                    if(houseDices.length === 0){
                      dice.readyAction = true
                    }else{
                      dice.readyAction = false
                    }
                  }

                }else{
                  dice.dicesValue = []
                  dice.dicesValue.push(action.payload.dicesValue)
                  // dice.readyAction = true

                  if(dice.inHouse){
                    dice.readyAction = true
                  }else if(dice.inMainCell){
                    if(houseDices.length === 0){
                      dice.readyAction = true
                    }else{
                      dice.readyAction = false
                    }
                  }
                }
                 
              }else {

                if(dice.dicesValue[1] === 6){
                  
                  if(dice.dicesValue.length >= 3){
                    dice.dicesValue = []
                    dice.dicesValue.push(action.payload.dicesValue)
                  }else{
                    dice.dicesValue.push(action.payload.dicesValue)
                  }

                }else if(dice.dicesValue[0] === 6){
                  if(dice.dicesValue.length >= 2){
                    dice.dicesValue = []
                    dice.dicesValue.push(action.payload.dicesValue)
                  }else{
                    dice.dicesValue.push(action.payload.dicesValue)
                  }
                }else{
                  dice.dicesValue = []
                  dice.dicesValue.push(action.payload.dicesValue)

                  if(dice.inMainCell){
                    dice.readyAction = true
                  }else if(dice.inFinisherCell){

                    const geFinisherCellId = action.payload.dicesValue + dice.currentCell.cellId

                    if(geFinisherCellId <= 6 ){

                      dice.readyAction = true
                                            
                    }else{
                      dice.readyAction = false
                    }

                  }else{
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
      dicesAction : (state, action) => {

        const cellHandler = (data= {
          startCell,
          endCell,
        }) => {

          const totalFiniSherCellValue = 6

          state.playerList.map((player) => {

            if(player.playerName === action.payload.playerName){

              const houseDices = player.playerDices.filter((dice) => dice.inHouse === true)
              player.playerName = action.payload.playerName

              player.playerDices.map((dice) => {

                // Action Dice Finder Condition
                if(dice.id === action.payload.data.id){

                  // IF Value Model === [6,6, Others Number] -----------------
                  if(dice.dicesValue[1] === 6){

                    if(dice.inHouse){
                      const findMainCell = state.mainCells.find((cell) => cell.id === data.startCell )
                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = true
                      dice.currentCell = {
                        cellId : findMainCell.id,
                        cellName : findMainCell.cellName,                            
                      }
                    }else if(dice.inMainCell){

                      if(houseDices.length === 0){
                        const findMainCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId

                        if(findMainCellId > data.endCell){
                          const findSuccessCellId = findMainCellId - data.endCell
                          if(findSuccessCellId === (5+1)){
                            dice.readyAction = false
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.dicesValue = []
                            dice.inSuccessCell = true
                            dice.currentCell = {
                              cellId : dice.id,
                              cellName : SuccessCellName,                            
                            }
                          }else{
                            const findFinisherCell = state.finisherCell.find((cell) => cell.id === findSuccessCellId)
                            console.log(findFinisherCell)
                            dice.readyAction = true
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId : findFinisherCell.id,
                              cellName : findFinisherCell.cellName,                            
                            }
                          }

                        }else{
                          const findMainCell = state.mainCells.find((cell) => cell.id === findMainCellId)
                          dice.readyAction = true
                          dice.inHouse = false
                          dice.inMainCell = true
                          dice.currentCell = {
                            cellId : findMainCell.id,
                            cellName : findMainCell.cellName,                            
                          }
                        }
                        
                      
                      }else{
                        dice.readyAction = false
                      }
                      
                    }
                  
                  // IF Value Model === [6, Others Number] -----------------
                  }else if(dice.dicesValue[0] === 6){

                    if(dice.inHouse){
                      const findMainCell = state.mainCells.find((cell) => cell.id === data.startCell )
                      dice.readyAction = true
                      dice.inHouse = false
                      dice.inMainCell = true
                      dice.currentCell = {
                        cellId : findMainCell.id,
                        cellName : findMainCell.cellName,                            
                      }

                    }else if(dice.inMainCell){

                      if(houseDices.length === 0){
                        
                        const findMainCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId
                        

                        if(findMainCellId > data.endCell){
                          const findSuccessCellId = findMainCellId - data.endCell
                          if(findSuccessCellId === (5+1)){
                            dice.readyAction = true
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.dicesValue = []
                            dice.inSuccessCell = true
                            dice.currentCell = {
                              cellId : dice.id,
                              cellName : SuccessCellName,                            
                            }
                          }else{
                            const findFinisherCell = state.finisherCell.find((cell) => cell.id === findSuccessCellId)
                            dice.readyAction = true
                            dice.inHouse = false
                            dice.inMainCell = false
                            dice.inFinisherCell = true
                            dice.currentCell = {
                              cellId : findFinisherCell.id,
                              cellName : findFinisherCell.cellName,                            
                            }
                          }

                        }else{

                          const findMainCell = state.mainCells.find((cell) => cell.id === findMainCellId)
                          dice.readyAction = true
                          dice.inHouse = false
                          dice.inMainCell = true
                          dice.currentCell = {
                            cellId : findMainCell.id,
                            cellName : findMainCell.cellName,                            
                          }

                        }

                      }else{
                        dice.readyAction = false
                      }

                    }

                    // IF Value Model === [Others Number] -----------------
                  }else{

                    if(dice.inHouse){

                      dice.readyAction = false
                      dice.inHouse = true
                      dice.inMainCell = false

                    }else if (dice.inMainCell) {

                      const calCellId = (dice.dicesValue[0] || 0) + dice.currentCell.cellId
                      const getActionId = calCellId >= data.endCell ? data.endCell : calCellId

                      const findMainCell = state.mainCells.find((cell) => cell.id === getActionId)


                      if(calCellId > data.endCell){
                        const calFinisherId = calCellId - data.endCell
                        const getFinisherId = calFinisherId 
                        const findFinisherCell = state.finisherCell.find((cell) => cell.id === getFinisherId)
                        if(dice.dicesValue[0] === 6){

                          dice.readyAction = false
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.inFinisherCell = false
                          dice.inSuccessCell = true
                          dice.currentCell = {
                            cellId : dice.id,
                            cellName : SuccessCellName,                            
                          }

                        }else{
                          dice.readyAction = false
                          dice.inHouse = false
                          dice.inMainCell = false
                          dice.inFinisherCell = true
                          dice.currentCell = {
                            cellId : findFinisherCell.id,
                            cellName : findFinisherCell.cellName,                            
                          }
                        }
                        
                      }else{

                        dice.readyAction = false
                        dice.inHouse = false
                        dice.inMainCell = true
                        dice.currentCell = {
                          cellId : findMainCell.id,
                          cellName : findMainCell.cellName,                            
                        }
                      }

                    }else if(dice.inFinisherCell){

                      const getFinisherCell = dice.currentCell.cellId + dice.dicesValue[0]
                      

                      if(getFinisherCell <= 5){
                        const findFinisherId = state.finisherCell.find((cell) => cell.id === getFinisherCell)
                        dice.readyAction = false
                        dice.inHouse = false
                        dice.inMainCell = false
                        dice.inFinisherCell = true
                        dice.currentCell = {
                          cellId : findFinisherId.id,
                          cellName : findFinisherId.cellName,                            
                        }
                      }else if (getFinisherCell > 5 && dice.readyAction){

                        dice.readyAction = false
                        dice.inHouse = false
                        dice.inMainCell = false
                        dice.inFinisherCell = false
                        dice.inSuccessCell = true
                        dice.currentCell = {
                          cellId : dice.id,
                          cellName : SuccessCellName,                            
                        }
                      }
                    }
                  }


                /* ------------------------------------------------
                  Others Dices Without Action
                ------------------------------------------------ */      
               
               
                }else{

                  // IF Value Model === [6,6, Others Number] -----------------
                  if(dice.dicesValue[1] === 6){
                    
                    if(dice.inHouse){

                      dice.readyAction = true
                      dice.inHouse = true
                      dice.inMainCell = false

                    }else if(dice.inMainCell){

                      if(houseDices.length === 0){

                        dice.inMainCell = true
                        dice.inHouse = false
                        dice.readyAction = true

                      }else{

                        dice.inMainCell = true
                        dice.inHouse = false
                        dice.readyAction = false

                      }                      

                    }else if(dice.inFinisherCell){
                        dice.inMainCell = false
                        dice.inHouse = false
                        dice.readyAction = false
                        dice.inFinisherCell = true
                    }

                  // IF Value Model === [6, Others Number] -----------------
                  }else if(dice.dicesValue[0] === 6){

                    if(dice.inHouse){

                      dice.readyAction = false
                      dice.inHouse = true
                      dice.inMainCell = false

                    }else if(dice.inMainCell){

                      dice.inMainCell = true
                      dice.inHouse = false
                      dice.readyAction = true

                    }else if(dice.inFinisherCell){

                      // const currentCelId = 3
                      // const DicesValue = 3
                      
                      // Action Will be  = true
                      // ---------------- 6
                      //  [ 1 | 2 | 3 | 4 | 5 | 6 ]

                      //            3         6                             3
                      const getDiceValue = totalFiniSherCellValue - dice.currentCell.cellId
                      //          6                  3                  3
                      const calCellValue = dice.currentCell.cellId + dice.dicesValue[1]

                      //     3                  6
                      if(getDiceValue >= calCellValue){
                        dice.inMainCell = false
                        dice.inHouse = false
                        dice.readyAction = true
                        dice.inFinisherCell = true
                      }else{
                        dice.inMainCell = false
                        dice.inHouse = false
                        dice.readyAction = false
                        dice.inFinisherCell = true
                      }
                    }

                  }else{

                    if(dice.inHouse){

                      dice.readyAction = false
                      dice.inHouse = true
                      dice.inMainCell = false

                    }else if(dice.inMainCell){

                      dice.readyAction = false
                      dice.inHouse = false
                      dice.inMainCell = true

                    }else if(dice.inFinisherCell){

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

        if(action.payload.playerName === player1){
          /*-----------------------------------
             Player 1
          ------------------------------------*/ 
          cellHandler({
            startCell : 2,
            endCell : 52,
          })


        }else if(action.payload.playerName === player2){
          /*-----------------------------------
             Player 2
          ------------------------------------*/ 
          cellHandler({
            startCell : 15,
            endCell : 13,
          })

        }else if(action.payload.playerName === player3){
          /*-----------------------------------
             Player 3
          ------------------------------------*/ 
          cellHandler({
            startCell : 28,
            endCell : 26,
          })

        }else if(action.payload.playerName === player4){
          /*-----------------------------------
             Player 4
          ------------------------------------*/ 
          cellHandler({
            startCell : 41,
            endCell : 39,
          })
        }
          
      }

      

    }
})

export const {shuffleAction, dicesAction } = cellSlice.actions

export default cellSlice