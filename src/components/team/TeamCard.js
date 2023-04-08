import Image from "next/image"

import team1 from '../../public/img/team/1.jpg'

function TeamCard() {
    return (
        <>
            <div className="w-full">
                <div>
                    <Image src={team1} alt="team1" />
                </div>
                <div className="text-center">
                    <h6 className="mt-7 text-lg text-black uppercase font-semibold">Howard Burns</h6>
                    <span>Our Team</span>
                </div>
            </div>
        </>
    )
}

export default TeamCard