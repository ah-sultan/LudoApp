import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

function Cart() {
  return (
    <>
        <THead/>
        <Header/>
        <main>
        <Breadcrumb pages="home" title="cart"/>
        <div className="py-100px">
            <h4 className="text-2xl leading-4 font font-semibold mb-30px">Your cart items</h4>
        </div>
        </main>
        <Footer/>
    </>
  )
}

export default Cart