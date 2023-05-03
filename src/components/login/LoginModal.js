import { useEffect } from "react"

function LoginModal(props) {

    const showLoginModal = {
        visibility : "visible",
        transform : 'scale(1)',
        top : '0px'
    }

    useEffect(() => {
        if(props.loginBoxVisibility){
            document.body.style.overflow = 'hidden';
          }else{
            document.body.style.overflow = 'unset';
          }
    })

  return (
    <>
    <div className="bg-[rgba(0,0,0,.87)] fixed top-full left-0 bottom-0 right-0 w-full h-full overflow-y-scroll z-[130] invisible trns-1 scale-0" style={props.loginBoxVisibility? showLoginModal : undefined}>
        <div>
            <button onClick={() => props.loginModalhandler(false)} type="button" className="center-child w-10 h-10 border border-white text-white text-[30px] border-solid absolute top-50px right-50px">
                <span>×</span>
            </button>
            <div className="center-child h-[100vh]">
                <div className="w-[330px] md:w-[400px] rounded-xl t-shadow-8 px-5 py-45px bg-[rgba(255,255,255,.1)]">
                    <h3 className="text-2xl leading-1.2 text-white font-bold text-center mb-30px">Login</h3>
                    <h4 className="text-sm leading-1.2 font-semibold text-white uppercase mb-7">Log in your account</h4>
                    <div>
                        <form action="#">
                            <input type="text" placeholder="Usearname" className="w-full h-50px px-25px rounded bg-white text-base leading-loose text-dark-700 mb-6"/>
                            <input type="password" placeholder="Password" className="w-full h-50px px-25px rounded bg-white text-base leading-loose text-dark-700 mb-6"/>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-5 h-5"/>
                                    <label htmlFor="#" className="text-white text-sm leading-relaxed ml-3">Remember</label>
                                </div>
                                <p>
                                    <a href="#" className="text-sm leading-relaxed text-primary-900">Forgot your password?</a>
                                </p>
                            </div>
                            <button className="py-4 px-5 rounded-md text-white bg-primary-900 hover:bg-black text-base leading-none uppercase">Log IN</button>
                            <div>
                                <p className="text-sm leading-none mt-7 text-[#999999] font-semibold uppercase">Not a member? <a href="#" className="underline text-white inline-block pl-1">Register now</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginModal