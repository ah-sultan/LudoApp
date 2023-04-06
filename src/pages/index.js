import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Banner from '@/components/banner/Banner'
import Feature from '@/components/feature/Feature'
import Products from '@/components/products/Products'
import Newarrivals from '@/components/newarrivals/Newarrivals'
import Deal from '@/components/deal/Deal'
import Blog from '@/components/blog/Blog'
import Footer from '@/components/footer/Footer'
import QuickView from '@/components/quickView/QuickView'
import THead from '@/components/thead/THead'

// https://api.npoint.io/c622a81c9c8ae72fa0ef

export default function Home(props) {

  return (

    <>

      <main>
        <THead />
        <Header />
        <Hero />
        <Feature />
        <Products product={props.productData} />
        <Banner />
        <Newarrivals product={props.productData} />
        <Deal />
        <Blog />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  const res = await fetch('https://api.npoint.io/fbae6ac9be2f693e0e03')
  const productData = await res.json()

  return {
    props: { productData }
  }
}

