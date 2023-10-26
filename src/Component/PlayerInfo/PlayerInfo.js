import { useSelector } from "react-redux"

export const PlayerInfo = ({
    playerName
}) => {


    const playerValue = useSelector((state) => state.cells.playerList)
    const findPlayer = playerValue.find((player) => player.playerName === playerName)
    const AllDices = findPlayer.playerDices
    const dice = AllDices[0]

    return (
        <>
            <div>
                <div className="flex items-center gap-2 border border-gray-200 py-0.5 px-1.5 capitalize text-black">
                    <span className="leading-none">{playerName}</span> :

                    <div className="w-20 flex gap-x-1 items-center">
                        {
                            dice.dicesValue.map((value, index) => {
                                return (
                                    <span className="leading-none" key={index}>
                                        {value}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
