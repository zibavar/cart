import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header'
import Footer from '../components/footer'

 function Layout ({children}){

    
    return(
    <>
  
    <ToastContainer position ={'bottom-center'} limit={1}   />
          <div className='flex flex-col'>
          <Header />


<main className=' w-full mt-50 px-4'>{children}</main>
<Footer />
          </div>
  
    </>

    )  
}
export default Layout