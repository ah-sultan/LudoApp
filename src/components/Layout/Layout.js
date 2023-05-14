import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Portal from '../Portal/portal'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
            <Portal />
        </>
    )
}

export default Layout