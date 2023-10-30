import { useSelector } from "react-redux"

export const PlayerInfo = ({
    playerName
}) => {


    const playerValue = useSelector((state) => state.cells.playerList)
    const findPlayer = playerValue.find((player) => player.playerName === playerName)
    const allDices = findPlayer.playerDices
    const readyDices = allDices.filter((dice) => dice.readyAction === true )
    // Taken Dices Value
    const dice = allDices[0]

    return (
        <>
            <div>
                <div className="py-0.5 px-1.5 capitalize text-white">
                    <span className="leading-none">{playerName}</span> :

                    <div className="w-20 flex gap-x-1 items-center pt-1">
                        { readyDices.length > 0 &&
                            dice.dicesValue?.map((value, index) => {
                                return (
                                    <div className="leading-none relative z-[1] w-5 h-5 rounded-full border text-black border-black bg-yellow-400 flex justify-center items-center" key={index}>
                                        <span className="text-xs font-medium">{value}</span>
                                    
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
