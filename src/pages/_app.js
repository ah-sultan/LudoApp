import { Noto_Sans } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'

const noto_Sans = Noto_Sans({
  subsets: ['latin'],
  variable: ['--fonts-notoSans'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${noto_Sans} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}
