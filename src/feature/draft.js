import { createSlice } from "@reduxjs/toolkit";
import { actionCell, diceList, mainCells,  } from "./CellType";
import { inHouse, player1, player2, player3, player4 } from "@/Data/Data";





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

      actionCell: [
        {
          playerName : player1,
          playerAction : [...actionCell]
        },

        {
          playerName : player2,
          playerAction : [...actionCell]
        },

        {
          playerName : player3,
          playerAction : [...actionCell]
        },

        {
          playerName : player4,
          playerAction : [...actionCell]
        },
      ],

    },

    reducers : {

      /* -----------------------------------------------------
          Shuffle Action Handler
      ------------------------------------------------------*/ 

      shuffleAction : (state, action) => {
        
        state.playerList.map((player) => {

        const houseDices = player.playerDices.filter((dice) => dice.inHouse === true)

          if(player.playerName === action.payload.playerName){
            
            player.playerDices.map((dice) => {
              dice.playerName = action.payload.playerName
              dice.currentValue = action.payload.currentValue

              if(action.payload.currentValue === 6 && dice.inHouse === true) {

               if(dice.dicesValue.length > 2 ){

                dice.dicesValue = []
                dice.readyAction = false
                dice.dicesValue.push(action.payload.dicesValue)

               } else if(dice.previousValue === 6){
                  dice.dicesValue.push(action.payload.dicesValue)
                  dice.previousValue = action.payload.currentValue
                }else{
                  dice.dicesValue = []
                  dice.readyAction = true
                  dice.dicesValue.push(action.payload.dicesValue)
                  dice.previousValue = action.payload.currentValue
                }

                
              
              }else if(dice.inMainCell){
                
                if(houseDices.length === 0){

                  dice.inMainCell = true
                  dice.readyAction = false
                  dice.dicesValue = []
                  dice.previousValue = action.payload.currentValue

                }else{
                  dice.inMainCell = true
                  dice.readyAction = true
                  dice.dicesValue.push(action.payload.dicesValue)
                  dice.previousValue = action.payload.currentValue
                }

              } else{

                if(dice.previousValue === 6){
                  dice.dicesValue.push(action.payload.dicesValue)
                  dice.previousValue = action.payload.currentValue
                }else{
                  dice.dicesValue = []
                  dice.readyAction = false
                  dice.dicesValue.push(action.payload.dicesValue)
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

          state.playerList.map((player) => {

            if(player.playerName === action.payload.playerName){

              player.playerDices.map((dice) => {
                
                if(dice.id === action.payload.data.id){

                  if(dice.inHouse && dice.readyAction && dice.dicesValue[0] === 6){

                      state.mainCells.map((cell) => {
                        if(cell.id === data.startCell){
                          dice.inHouse = false
                          dice.inMainCell = true
                          
                          dice.currentCell = {
                            cellId : cell.id,
                            cellName : cell.cellName,                            
                          }
                        }
                      })
                  }else if (dice.inMainCell){

                    const findCellId = state.mainCells.find((cell) => cell.id === (dice.dicesValue[0] + dice.currentCell.cellId) )
                    if(findCellId){
                      dice.inHouse = false
                      dice.inMainCell = true

                      dice.currentCell = {
                        cellId : findCellId.id,
                        cellName : findCellId.cellName,                            
                      }
                    }
                    
                  }         
                  
                }

                
                if(dice.dicesValue[1] === 6 && dice.inHouse){
                  dice.readyAction = true
                }else if(dice.dicesValue.length > 1 && dice.inMainCell){
                  dice.readyAction = true
                }else{
                  dice.readyAction = false
                }

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


        }else if(action.payload.playerName === player3){
          /*-----------------------------------
             Player 3
          ------------------------------------*/ 

        }else if(action.payload.playerName === player4){
          /*-----------------------------------
             Player 4
          ------------------------------------*/ 
        }
          
      }

      

    }
})

export const {shuffleAction, dicesAction } = cellSlice.actions

export default cellSlice