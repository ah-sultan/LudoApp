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
// https://api.npoint.io/097fe96c7521b67eddaf

export default function Home() {
  return (

    <>

      <main>
        <THead />
        <Header />
        <Hero />
        <Feature/>
        <Products/>
        <Banner/>
        <Newarrivals/>
        <Deal/>
        <Blog/>
        <Footer/>
      </main>
    </>
  )
}
