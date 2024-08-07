import '../styles/globals.css'
import { CartContextProvider } from '../context/cart'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <div className='bg-gray-100'>
      <SessionProvider>
    <CartContextProvider>
    <Component {...pageProps} />
    </CartContextProvider>
    </SessionProvider>
  </div>
  )
}

export default MyApp
