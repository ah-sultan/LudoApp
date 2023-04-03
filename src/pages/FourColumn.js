import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Category from "@/components/category/Category"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

function FourColumn() {
  return (
    <>
    <THead/>
    <Header/>
    <main>
      <Breadcrumb title="Shop" pages="home"/>
      <Category/>
    </main>

    </>
  )
}

export default FourColumn