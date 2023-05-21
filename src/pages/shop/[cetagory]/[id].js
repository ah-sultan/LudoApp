import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import DescriptionReview from "@/components/descriptionReview/DescriptionReview"
import Meta from "@/components/meta/Meta"
import ProductDetails from "@/components/productDetails/ProductDetails"
import ReletedProducts from "@/components/reletedProduct/ReletedProducts"


function VariableProduct({ product, relatedProduct }) {

  const relatedProductArray = relatedProduct.filter(data => data.brand === product.brand && data.category === product.category)

  return (
    <>
      <Meta title={product.title} />
      <Breadcrumb title="Products" pages="Home" />
      <ProductDetails product={product} variable={true} />
      <DescriptionReview />
      {
        <ReletedProducts product={relatedProductArray} />
      }
    </>
  )
}

export default VariableProduct

export async function getStaticProps(context) {
  const resRelated = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
  const relatedProduct = await resRelated.json()

  const response = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a/${context.params.id}`);
  const product = await response.json();

  return {
    props: {
      product,
      relatedProduct,
    },
  };
}


export async function getStaticPaths() {


  const response = await fetch('https://api.npoint.io/44d9930f29cc64084a3a');
  const products = await response.json();
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString(),
      cetagory: product.category,

    },
  }));

  return {
    paths,
    fallback: false,
  };
}