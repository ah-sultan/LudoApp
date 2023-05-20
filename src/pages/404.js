import Link from 'next/link'

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


export default function Custom404() {
    return (
        <>
            <Breadcrumb title="404" pages="home" />
            <section className="py-60px lg:py-20 xl:py-100">
                <div className="container">
                    <h3 className="text-3xl text-center text-black">The page you are looking for was not found.</h3>
                    <div className="w-full md:w-[500px] flex-col mx-auto center-child px-7 py-10 border mt-10">
                        <h6 className="text-base text-black font-bold">Sorry For The Inconvenience.</h6>
                        <p className="text-tGreay-700 text-sm mt-3 mb-5">Search again what you are looking for</p>
                        <Link href="/" className="text-base text-black inline-block font-bold underline">Go To Home </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
