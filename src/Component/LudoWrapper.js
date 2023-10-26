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

            <div className='w-[520px] h-[520px] p-5 shadow-20 rounded-md bg-blue-700'>
                <div className='border h-full w-full grid grid-cols-3 grid-rows-3 text-white bg-[#F6F5DB]'>


                    {/* --------------------------------------------------------------
                        Player 1 Area 
                    --------------------------------------------------------------  */}
                    <div className="player-house-block order-1 relative border-primary player1 border-[20px]">
                        <PlayerHouse playerName={player1} />
                        <div className="absolute bottom-full mb-14 bg-blue-700 rounded-md shadow-20 -left-10 p-2 border-primary player1 border-2">
                            <div className="flex gap-2">
                                <ShuffleBox playerName={player1} />
                                <PlayerInfo playerName={player1} />
                            </div>
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




                    {/* --------------------------------------------------------------
                        Player 2 Area 
                    --------------------------------------------------------------  */}
                    <div className="player-house-block order-3 relative border-primary player2 border-[20px]">
                        <PlayerHouse playerName={player2} />
                        <div className="absolute bottom-full mb-14 bg-blue-700 rounded-md shadow-20 -right-10 p-2 border-primary player2 border-2">
                            <div className="flex gap-2">
                                <ShuffleBox playerName={player2} />
                                <PlayerInfo playerName={player2} />
                            </div>
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




                    {/* --------------------------------------------------------------
                        Player 3 Area 
                    --------------------------------------------------------------  */}
                    <div className="player-house-block order-9 relative border-primary player3 border-[20px]">
                        <PlayerHouse playerName={player3} />
                        <div className="absolute top-full mt-14 bg-blue-700 rounded-md shadow-20 -right-10 p-2 border-primary player3 border-2">
                            <div className="flex gap-2">
                                <ShuffleBox playerName={player3} />
                                <PlayerInfo playerName={player3} />
                            </div>
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

                    {/* --------------------------------------------------------------
                        Player 4 Area 
                    --------------------------------------------------------------  */}
                    <div className="player-house-block order-7 relative border-primary player4 border-[20px]">
                        <PlayerHouse playerName={player4} />
                        <div className="absolute top-full mt-14 bg-blue-700 rounded-md shadow-20 -left-10 p-2 border-primary player4 border-2">
                            <div className="flex gap-2">
                                <ShuffleBox playerName={player4} />
                                <PlayerInfo playerName={player4} />
                            </div>
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
                    {/* --------------------------------------------------------------
                        Success Box
                    --------------------------------------------------------------  */}
                    <div className="order-5 border ">
                        <SuccessBlock />
                    </div>

                </div>
            </div>
        </>
    )
}

export default LudoWrapper