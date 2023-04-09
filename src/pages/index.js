import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Banner from '@/components/banner/Banner'
import Feature from '@/components/feature/Feature'
import Products from '@/components/products/Products'
import Newarrivals from '@/components/newarrivals/Newarrivals'
import Deal from '@/components/deal/Deal'
import Blog from '@/components/blog/Blog'
import Footer from '@/components/footer/Footer'
import THead from '@/components/thead/THead'
import BackTop from '@/components/backtop/BackTop'


export default function Home({ productdata }) {

  return (

    <>

      <main>
        <THead />
        <Header />
        <Hero />
        <Feature />
        <Products product={productdata} />
        <Banner />
        <Newarrivals product={productdata} />
        <Deal />
        <Blog />
        <Footer/>
        <BackTop/>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
  const productdata = await res.json()

  // Pass data to the page via props
  return { props: { productdata } }
}

