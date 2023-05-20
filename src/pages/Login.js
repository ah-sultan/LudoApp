import React, { useState } from 'react'

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Meta from '@/components/thead/Meta'

function Login() {
    const [active, setActive] = useState('login')

    function formActiveHandler(value) {
        setActive(value)
    }

    const activeBlock = {
        visibility: "visible",
        opacity: 1,
        height: 'auto'
    }
    return (
        <>
            <Meta titl="login" />
            <Breadcrumb pages="home" title="Login" />
            <section>
                <div className="container py-100px">
                    <div>
                        <ul className="flex center-child gap-x-5">
                            <li onClick={() => formActiveHandler("login")}><button className={`text-2xl  text-black  hover:text-primary-900 font-semibold ${active === 'login' ? 'text-primary-900' : undefined} `}>Login</button></li>
                            <span className="w-px h-18px bg-black"></span>
                            <li onClick={() => formActiveHandler("register")}><button className={`text-2xl text-black hover:text-primary-900  font-semibold ${active === 'register' ? 'text-primary-900' : undefined} `}>Register</button></li>
                        </ul>
                    </div>

                    <div>
                        {/* Login Form ================ */}
                        <div className="invisible opacity-0 trns-1 duration-500 h-0 overflow-hidden pb-3" style={active === "login" ? activeBlock : undefined}>
                            <div className="lg:w-7/12 mx-auto px-3 mt-10">
                                <div className="bg-white p-4 pt-6 md:p-20 t-shadow-5">
                                    <form action="#">
                                        <input type="text" placeholder="Username" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px" />
                                        <input type="password" placeholder="Password" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px" />
                                        <ul className="flex justify-between mt-2.5 mb-5">
                                            <li>
                                                <input type="checkbox" id="rememberMe" />
                                                <label htmlFor="rememberMe" className="text-base text-black hover:text-primary-900 pl-1 inline-block">Remember me</label>
                                            </li>
                                            <li>
                                                <a href="#" className="text-base text-black hover:text-primary-900 pl-0.5 inline-block">Forgot Password</a>
                                            </li>
                                        </ul>
                                        <button type="button" className="px-30px py-11px bg-tGreay-100 uppercase text-sm leading-none font-semibold hover:bg-primary-900 hover:text-white">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Register Form */}
                        <div className="invisible opacity-0 trns-1 duration-500 h-0 overflow-hidden pb-3" style={active === "register" ? activeBlock : undefined}>
                            <div className="lg:w-7/12 mx-auto px-3 mt-10">
                                <div className="bg-white p-4 pt-6 md:p-20 t-shadow-5">
                                    <form action="#">
                                        <input type="text" placeholder="Username" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px" />
                                        <input type="email" placeholder="Email" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px" />
                                        <input type="password" placeholder="Password" className=" w-full h-50px px-15px text-sm leading-[50px] border border-[#ebebeb] mb-30px" />
                                        <button type="button" className="px-30px py-11px bg-tGreay-100 uppercase text-sm leading-none font-semibold hover:bg-primary-900 hover:text-white">Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login