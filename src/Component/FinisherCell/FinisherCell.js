import { player1, player1ClassName, player2, player2ClassName, player3, player3ClassName, player4, player4ClassName } from '@/Data/Data'
import React from 'react'
import FinisherCellMap from './FinisherCellMap'

const FinisherCell = ({

  playerName

}) => {
  return(

    <>
        {playerName === player1 && <FinisherCellMap playerName={player1} className={player1ClassName}/> }
        {playerName === player2 && <FinisherCellMap playerName={player2} className={player2ClassName}/> }
        {playerName === player3 && <FinisherCellMap playerName={player3} className={player3ClassName}/> }
        {playerName === player4 && <FinisherCellMap playerName={player4} className={player4ClassName}/> }
    </>
  )
}

export default FinisherCell