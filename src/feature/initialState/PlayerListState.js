import { player1, player2, player3, player4 } from "@/Data/Data";
import { diceList } from "./DiceList";
import { player1DiceTest, player2DiceTest, player3DiceTest } from "./DiceTest";

export const playerListState = [
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
  ]