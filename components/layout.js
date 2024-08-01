import Head from 'next/head'
import Link from 'next/link'
import { useContext ,useState,useEffect} from 'react'
import {CartContext} from '../context/cart'

 function Layout ({title,children}){

    const {state,dispatch} = useContext(CartContext)
    const {cart} = state
    const [cartItemsCount,setCartItemsCount] = useState(0)
    useEffect(()=>{
        setCartItemsCount(cart.cartItems.reduce((acc,cur)=> acc + cur.qty ,0))
    },[cart.cartItems])
    return(
    <>
    <Head>
        <title>
        {`shopping - ${title}`}
        </title>
    </Head>
       
        <div className='flex  min-h-screen flex-col justify-between'>
            
           <header>
            <nav className='flex h-14 px-8 justify-between items-center border-b-4 bg-white'>
              <Link className='text-large font-bold ' href='/'>shopping</Link>
             <div>
             <Link className='p-2' href='/login'>login</Link>
              <Link className='p-2' href='/cart'>
                Cart
                {cart.cartItems.length >0 &&(
                    <span className='ml-1 rounded-xl bg-red-300 px-2 py-1 text-xs font-bold'>
                        {cartItemsCount}
                    </span>
                )}
              </Link>
             </div>
             
            </nav>
           </header>
        
            


            <main className='container m-auto mt-4 px-4'>{children}</main>
            <footer className='flex justify-between item-center h-100'>footer</footer>
       </div>
    
    </>

    )  
}
export default Layout