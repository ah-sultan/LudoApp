import Image from "next/image"

function FeatureCard(props){
    return (
        <>
            <div className="group flex p-30px md:p-25px lg:p-5 xl:p-30px  border border-tGreay-100 bg-white w-full items-center">
                <div className="center-child w-70px h-70px rounded-full gradient-primary mr-5 md:mr-30px lg:mr-5 xl:mr-30px">
                    <Image src={props.icon} alt="icon" className="trns-1 group-hover:scale-90 group-hover:rotate-3"/>
                </div>
                <div>
                    <h2 className="text-20px sm:text-2xl lg:text-20px xl:text-2xl leading-1.2 text-tGreay-850 font-semibold mb-3px">{props.title}</h2>
                    <span className="text-tGreay-550 font-normal text-sm sm:text-base lg:text-sm xl:text-base leading-1.2">{props.text}</span>
                </div>
            </div>
        </>
    )
}

export default FeatureCard