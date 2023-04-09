import BackTop from "@/components/backtop/BackTop"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import DescriptionReview from "@/components/descriptionReview/DescriptionReview"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import ProductDetails from "@/components/productDetails/ProductDetails"
import ReletedProducts from "@/components/reletedProduct/ReletedProducts"
import THead from "@/components/thead/THead"

function VariableProduct() {
  return (
   <>
   <THead/>
   <Header/>
   <main>
    <Breadcrumb title="Products" pages="Home"/>
    <ProductDetails color={['#D28200', '#505050', '#FF1616', '#ECECEC']} size={['m','l', 'xl','xl']} variable={true}/>
    <DescriptionReview/>
    <ReletedProducts/>
   </main>
    <Footer/>
    <BackTop/>
   </>
  )
}

export default VariableProduct