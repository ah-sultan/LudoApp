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
                <div className="py-0.5 px-1.5 capitalize text-white">
                    <span className="leading-none">{playerName}</span> :

                    <div className="w-20 flex gap-x-1 items-center pt-1">
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
