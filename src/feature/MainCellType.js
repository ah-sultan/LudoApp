import { player1, player2, player3, player4 } from "@/Data/Data"


export const MainCellType = Array(52).fill().map((_,index) => {
    
    const area = [
        {
            playerName : player1,
            cellId : index >= 1 ? index - 1 : 51
        },

        {
            playerName : player2,
            cellId : index >= 14 ? index - 14 : index + 39
        },

        {
            playerName : player3,
            cellId :  index >= 27 ? index - 27 : index + 25
        },

        {
            playerName : player4,
            cellId :  index >= 40 ? index - 40 : index + 12
        }
        
    ]

    return area
})

