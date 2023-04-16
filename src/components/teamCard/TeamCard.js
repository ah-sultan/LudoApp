import Image from "next/image"
import { FaFacebookF, FaTwitter, FaDribbble, FaPinterestP } from "react-icons/fa"


function TeamCard(props) {
    return (
        <>
            <div className="w-full group">
                <div className="overflow-hidden">
                    <Image src={props.img} alt="team1" className="w-full trns-1 group-hover:scale-110 group-hover:rotate-3"/>
                </div>
                <div className="text-center">
                    <h6 className="mt-7 text-lg text-black uppercase font-semibold leading-1.2">{props.name}</h6>
                    <span className="text-dark-700">{props.title}</span>
                </div>
                <div className="border-t border-px mt-7">
                    <ul className="flex justify-center gap-x-2.5">
                        <li className="w-10 h-10 bg-black trns-1 text-white center-child hover:gradient-primary"><a href="#"><FaFacebookF/></a></li>
                        <li className="w-10 h-10 bg-black trns-1 text-white center-child hover:gradient-primary"><a href="#"><FaTwitter/></a></li>
                        <li className="w-10 h-10 bg-black trns-1 text-white center-child hover:gradient-primary"><a href="#"><FaDribbble/></a></li>
                        <li className="w-10 h-10 bg-black trns-1 text-white center-child hover:gradient-primary"><a href="#"><FaPinterestP/></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TeamCard