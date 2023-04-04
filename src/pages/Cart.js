import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

function Cart() {
  return (
    <>
        <THead/>
        <Header/>
        <main className="py-100px">
        <Breadcrumb pages="home" title="cart"/>
        </main>
        <Footer/>
    </>
  )
}

export default Cart