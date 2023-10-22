import LudoWrapper from "@/Component/LudoWrapper";
import StartPlay from "@/Component/StartPlay";

export default function Home() {


  return (

    <>
        <div className="h-screen w-screen bg-white flex justify-center items-center relative">
          <div className="absolute top-4 right-12">
          <StartPlay/>
          </div>
          <LudoWrapper/>
        </div>
    </>
  )
}




