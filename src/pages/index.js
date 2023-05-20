import Hero from '@/components/hero/Hero'
import Banner from '@/components/banner/Banner'
import Feature from '@/components/feature/Feature'
import Products from '@/components/products/Products'
import Newarrivals from '@/components/newarrivals/Newarrivals'
import Deal from '@/components/deal/Deal'
import Blog from '@/components/blog/Blog'
import Meta from '@/components/thead/Meta'

export default function Home({ products }) {

  return (

    <>

      <Meta />
      <Hero />
      <Feature />
      <Products product={products} />
      <Banner />
      <Newarrivals product={products} />
      <Deal />
      <Blog />
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}

