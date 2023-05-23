import Meta from "@/components/meta/Meta"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Category from "@/components/category/Category"

import { ProductData } from "../../product"
function FourColumn() {
  return (
    <>
      <Meta title="cetagory" />
      <Breadcrumb title="Shop" pages="home" />
      <Category product={ProductData} />
    </>
  )
}

export default FourColumn
