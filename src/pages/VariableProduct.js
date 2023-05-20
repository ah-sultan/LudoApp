import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import DescriptionReview from "@/components/descriptionReview/DescriptionReview"
import Meta from "@/components/meta/Meta"
import ProductDetails from "@/components/productDetails/ProductDetails"
import ReletedProducts from "@/components/reletedProduct/ReletedProducts"

import { ProductData } from "../../product"

function VariableProduct() {
  return (
    <>
      <Meta title="product" />
      <Breadcrumb title="Products" pages="Home" />
      <ProductDetails product={ProductData[2]} variable={true} />
      <DescriptionReview />
      <ReletedProducts product={ProductData} />
    </>
  )
}

export default VariableProduct