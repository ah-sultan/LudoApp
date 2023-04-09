import React, { useState } from 'react'

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import THead from '@/components/thead/THead'
import BackTop from '@/components/backtop/BackTop'

function Login() {
    const [active, setActive] = useState('')

    function formActiveHandler(value){
        setActive(value)
    }

    const activeBlock = {
        visibility : "visible",
        opacity : 1,
        height : 'auto'
    }
  return (
    <>
    <THead/>
    <Header/>
    <main>
        <Breadcrumb pages="home" title="Login"/>
        <section>
            <div className="container py-100px">
                <div>
                    <ul className="flex center-child gap-x-5">
                        <li onClick={() => formActiveHandler("login")}><button className="text-2xl text-primary-900 font-semibold">Login</button></li>
                        <span className="w-px h-18px bg-black"></span>
                        <li onClick={() => formActiveHandler("register")}><button className="text-2xl hover:text-primary-900 text-black font-semibold">Register</button></li>
                    </ul>
                </div>
                
                <div>
                    <div className="w-7/12 mx-auto px-3 mt-10">
                        <div className="bg-white p-20 t-shadow-5">
                            {/* Login Form */}
                            <div className="invisible opacity-0 trns-1 duration-500 h-0 overflow-hidden" style={active === "login" ? activeBlock : undefined}>
                                <form action="#">
                                <input type="text" placeholder="Username" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px"/>
                                <input type="password" placeholder="Password" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px"/>
                                <ul className="flex justify-between mt-2.5 mb-5">
                                    <li>
                                        <input type="checkbox" id="rememberMe"/>
                                        <label htmlFor="rememberMe" className="text-base text-black hover:text-primary-900 pl-1 inline-block">Remember me</label>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-black hover:text-primary-900 pl-0.5 inline-block">Forgot Password</a>
                                    </li>
                                </ul>
                                <button type="button" className="px-30px py-11px bg-tGreay-100 uppercase text-sm leading-none font-semibold hover:bg-primary-900 hover:text-white">Login</button>
                                </form>
                            </div>
                            {/* Register Form */}
                            <div className="invisible opacity-0 trns-1 duration-500 h-0 overflow-hidden" style={active === "register" ? activeBlock : undefined}>
                                <form action="#">
                                <input type="text" placeholder="Username" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px"/>
                                <input type="email" placeholder="Email" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px"/>
                                <input type="password" placeholder="Password" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px"/>
                                <button type="button" className="px-30px py-11px bg-tGreay-100 uppercase text-sm leading-none font-semibold hover:bg-primary-900 hover:text-white">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    <BackTop/>
    </>
  )
}

export default Login