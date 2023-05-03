import React from 'react'

function CountDown() {
  return (
    <>
        <div className="flex justify-center gap-x-2 text-dark-600 mb-8 text-4xl leading-none font-extrabold">
            <div className="w-60px">
                <h2 className="text-3xl lg:text-4xl leading-none font-extrabold"><span>0</span></h2>
                <p className="text-sm leading-none uppercase font-normal">Days</p>
            </div>
            <span>:</span>
            <div className="w-60px">
                <h2 className="text-3xl lg:text-4xl leading-none font-extrabold"><span>0</span></h2>
                <p className="text-sm leading-none uppercase font-normal">Hours</p>
            </div>
            <span>:</span>
            <div className="w-60px">
                <h2 className="text-3xl lg:text-4xl leading-none font-extrabold"><span>00</span></h2>
                <p className="text-sm leading-none uppercase font-normal">Mins</p>
            </div>
            <span>:</span>
            <div className="w-60px">
                <h2 className="text-3xl lg:text-4xl leading-none font-extrabold"><span>00</span></h2>
                <p className="text-sm leading-none uppercase font-normal">Sec</p>
            </div>
            
            </div>
    </>
  )
}

export default CountDown