import BackTop from "@/components/backtop/BackTop"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import DescriptionReview from "@/components/descriptionReview/DescriptionReview"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import ProductDetails from "@/components/productDetails/ProductDetails"
import ReletedProducts from "@/components/reletedProduct/ReletedProducts"
import THead from "@/components/thead/THead"

import { ProductData } from "../../product"

function VariableProduct() {
  return (
   <>
   <THead/>
   <Header/>
   <main>
    <Breadcrumb title="Products" pages="Home"/>
    <ProductDetails product={ProductData[2]} variable={true}/>
    <DescriptionReview/>
    <ReletedProducts product={ProductData}/>
   </main>
    <Footer/>
    <BackTop/>
   </>
  )
}

export default VariableProduct