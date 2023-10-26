import { player1, player1ClassName, player2, player2ClassName, player3, player3ClassName, player4, player4ClassName } from "@/Data/Data"
import CellBlock from "./MainCells/CellBlock"
import CellBlockMap from "./MainCells/CellBlockMap"
import PlayerHouse from "./PlayerHouse"
import ShuffleBox from "./Shuffle/ShuffleBox"
import { useSelector } from "react-redux";
import FinisherCell from "./FinisherCell/FinisherCell"
import SuccessBlock from "./SuccessCell/SuccessBlock"
import { PlayerInfo } from "./PlayerInfo/PlayerInfo"



const LudoWrapper = () => {

    const cellsList = useSelector((state) => state.cells)
    const mainCellList = cellsList.mainCells
    const player1Dice = cellsList.playerList.find((player) => player.playerName === player1)
    const currArr = [1, 2, 3, 4, 5, 6]
    const renoveArr = () => {
        currArr.shift(0)
        console.log(currArr)
    }
    return (
        <>
            {/* <button onClick={renoveArr} className="btn bg-black px-10 py-3 fixed top-0 left-0 text-white">
        Remove Arr
    </button> */}

            {/* <div className="fixed top-0 left-0">
    Value: {player1Dice.playerDices[0].dicesValue.map((value) => <span>{value}</span>)}
    </div> */}
            <div className='w-[550px] h-[550px] p-7 shadow-20 '>
                <div className='border h-full w-full grid grid-cols-3 grid-rows-3 text-white'>

                    {/* Player 1 ===================== */}
                    <div className="player-house-block order-1 relative">
                        <PlayerHouse playerName={player1} />
                        <div className="absolute top-0 right-full">
                            <ShuffleBox playerName={player1} />
                        </div>
                        <div className="bottom-full left-0 absolute">
                            <PlayerInfo playerName={player1} />
                        </div>
                    </div>



                    <div className="cells-list order-4 grid grid-rows-3">

                        <div className="list-1 grid-cols-6 grid">
                            <CellBlockMap cellsList={mainCellList.slice(0, 6)} />
                        </div>
                        <div className="grid grid-cols-6">
                            <CellBlockMap cellsList={mainCellList.slice(51, 52)} />
                            <FinisherCell playerName={player1} />

                        </div>

                        <div className="grid grid-cols-6">
                            <CellBlockMap cellsList={mainCellList.slice(45, 51)} reverse={true} />
                        </div>
                    </div>



                    {/* Player 2 ===================== */}
                    <div className="player-house-block order-3 relative">
                        <PlayerHouse playerName={player2} />
                        <div className="absolute top-0 left-full">
                            <ShuffleBox playerName={player2} />
                        </div>
                        <div className="bottom-full right-0 absolute">
                            <PlayerInfo playerName={player2} />
                        </div>
                    </div>


                    <div className="cells-list order-2 grid grid-cols-3">
                        <div className="grid grid-rows-6 ">
                            <CellBlockMap cellsList={mainCellList.slice(6, 12)} reverse={true} />
                        </div>

                        <div className="grid grid-rows-6 ">
                            <CellBlockMap cellsList={mainCellList.slice(12, 13)} />
                            <FinisherCell playerName={player2} />

                        </div>
                        <div className="grid grid-rows-6 ">
                            <CellBlockMap cellsList={mainCellList.slice(13, 19)} />
                        </div>
                    </div>




                    {/* Player 3 ===================== */}
                    <div className="player-house-block order-9 relative">
                        <PlayerHouse playerName={player3} />
                        <div className="absolute bottom-0 left-full">
                            <ShuffleBox playerName={player3} />
                        </div>
                        <div className="top-full right-0 absolute">
                            <PlayerInfo playerName={player3} />
                        </div>
                    </div>

                    <div className="cells-list order-6 grid grid-cols-1">

                        <div className="grid grid-cols-6 ">
                            <CellBlockMap cellsList={mainCellList.slice(19, 25)} />
                        </div>

                        <div className="grid grid-cols-6">
                            <FinisherCell playerName={player3} />
                            <CellBlockMap cellsList={mainCellList.slice(25, 26)} />
                        </div>

                        <div className="grid grid-cols-6">
                            <CellBlockMap cellsList={mainCellList.slice(26, 32)} reverse={true} />
                        </div>
                    </div>




                    {/* Player 4 ===================== */}
                    <div className="player-house-block order-7 relative">
                        <PlayerHouse playerName={player4} />
                        <div className="absolute bottom-0 right-full">
                            <ShuffleBox playerName={player4} />
                        </div>
                        <div className="top-full left-0 absolute">
                            <PlayerInfo playerName={player4} />
                        </div>
                    </div>

                    <div className="cells-list order-8 grid grid-cols-3">

                        <div className="grid grid-rows-6 ">
                            <CellBlockMap cellsList={mainCellList.slice(39, 45)} reverse={true} />
                        </div>

                        <div className="grid grid-rows-6">
                            <FinisherCell playerName={player4} />
                            <CellBlockMap cellsList={mainCellList.slice(38, 39)} />
                        </div>

                        <div className="grid grid-rows-6">
                            <CellBlockMap cellsList={mainCellList.slice(32, 38)} />

                        </div>
                    </div>


                    {/* Success Box ===================== */}
                    <div className="order-5 border ">
                        <SuccessBlock />
                    </div>

                </div>
            </div>
        </>
    )
}

export default LudoWrapper