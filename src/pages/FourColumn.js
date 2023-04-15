import BackTop from "@/components/backtop/BackTop"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Category from "@/components/category/Category"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import THead from "@/components/thead/THead"

import { ProducrData } from "../../product"

function FourColumn() {
  return (
    <>
      <THead />
      <Header />
      <main>
        <Breadcrumb title="Shop" pages="home" />
        <Category product={ProducrData}/>
      </main>
      <Footer />
      <BackTop/>
    </>
  )
}

export default FourColumn