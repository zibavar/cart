import Head from 'next/head'
import Link from 'next/link'
import { useContext ,useState,useEffect} from 'react'
import {CartContext} from '../context/cart'
 import { useSession } from 'next-auth/react'
 import { Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
 import DropDown from './DropDown'

 function Layout ({title,children}){

    const {state,dispatch} = useContext(CartContext)
    const {cart} = state
    const [cartItemsCount,setCartItemsCount] = useState(0)
    useEffect(()=>{
        setCartItemsCount(cart.cartItems.reduce((acc,cur)=> acc + cur.qty ,0))
    },[cart.cartItems])
    const{status , data:session} =useSession()
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
             <div className='flex'>
             
              
               <div>
               {status === 'loading' ?(
                    'loading'
                ) : session ?.user ?(
                    <Menu as='div' className='relative inline-block mt-2 mr-4 '>
                  
                   <MenuButton as='div' className='text-blue-500'>
                    <img src='./images/user.png' />
                    </MenuButton>    

                    <MenuItems as='div' className='absolute right-0 w-48 bg-violet-500 font-semibold text-white rounded-xl p-4 border-w border-slate-100'>
                      <MenuItem as='div' className='border-b-2 border-dashed'>
                       Welcome Dear {session.user.name} !
                      </MenuItem>
                    <MenuItem as='div' className='hover:bg-violet-600 hover:rounded-xl'>
                      <DropDown  className='flex p-2' href='/profile'>
                    <img  src='./images/profile.png' className='w-8 pr-2.5'/> Profile
                      </DropDown>
                    </MenuItem>
 
                    <MenuItem as='div' className='hover:bg-violet-600 hover:rounded-xl'>
                    <DropDown className='flex p-2' href='/order'>
                    <img  src='./images/order.png' className='w-8 pr-2.5'/> Order
                    </DropDown>
                    </MenuItem>

                    <MenuItem as='div' className='hover:bg-violet-600 hover:rounded-xl'>
                      <DropDown className='flex p-2' href='/logout'>
                      <img  src='./images/logout.png' className='w-8 pr-2.5'/>  Logout
                      </DropDown>
                    </MenuItem>

                   
                    </MenuItems>
                   
                    </Menu>
                ) :(
                    <Link className='p-2' href='/login'>login</Link>
                )}
             
               </div>
               <div className='border-l mr-2'></div> 
               <Link className='p-2 flex' href='/cart'>
              <img  src='/images/cart.png' className='w-8'/>
                {cart.cartItems.length >0 &&(
                    <span className='border-white w-6 h-6 relative top-2 right-3  ml-1 rounded-xl bg-violet-500 px-2 py-1 text-xs font-bold'>
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