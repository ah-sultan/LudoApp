import LudoWrapper from "@/Component/LudoWrapper";
import StartPlay from "@/Component/StartPlay";
import WinnerDetails from "@/Component/WinnerDetails";

export default function Home() {


  return (

    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center relative root-body">
        <LudoWrapper />
        <WinnerDetails/>
      </div>
    </>
  )
}




