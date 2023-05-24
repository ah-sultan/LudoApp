import Meta from "@/components/meta/Meta"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Category from "@/components/category/Category"

function FourColumn({products}) {
  return (
    <>
      <Meta title="cetagory" />
      <Breadcrumb title="Shop" pages="home" />
      <Category product={products.slice(0,39)} />
    </>
  )
}

export default FourColumn

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}
