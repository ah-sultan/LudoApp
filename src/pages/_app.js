import { Noto_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/feature/store';



const noto_Sans = Noto_Sans({
  subsets: ['latin'],
  variable: ['--fonts-notoSans'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
        <Provider store={store}>
            <div className={`${noto_Sans} font-sans`}>
              <Component {...pageProps} />
            </div>
        </Provider>
    </>
  )
}
