import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import DescriptionReview from "@/components/descriptionReview/DescriptionReview"
import Meta from "@/components/meta/Meta"
import ProductDetails from "@/components/productDetails/ProductDetails"
import ReletedProducts from "@/components/reletedProduct/ReletedProducts"


function VariableProduct({ products }) {
  return (
    <>
      <Meta title="product" />
      <Breadcrumb title="Products" pages="Home" />
      <ProductDetails product={products[2]} variable={true} />
      <DescriptionReview />
      <ReletedProducts product={productsclaer.slice(0, 6)} />
    </>
  )
}

export default VariableProduct

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}