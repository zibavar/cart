import '../styles/globals.css'
import { StoreProvider } from '../context/cart'
import { SessionProvider,useSession } from 'next-auth/react'
import {useRouter}  from 'next/router'
function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <div className='bg-gray-100'>
      <SessionProvider session={session}>
    <StoreProvider>
      {Component.Auth ?(
        <Auth>
           <Component {...pageProps} />
        </Auth>
      ):(
        <Component {...pageProps} />
      )} 
   
    </StoreProvider>
    </SessionProvider>
  </div>
  )
}
function Auth (children){
const router = useRouter()

const{status} = useSession({
  required :true,
  onUnauthenticated (){
     router.push('/unauthorized')
  }
})

if (status==='loading'){
  return 'loading'
}
return children

}
export default MyApp
