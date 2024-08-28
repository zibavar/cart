import productItems from '../../data/products'

import { useRouter } from 'next/router' 

import Layout from '../../components/layout'

import { useContext } from 'react'

import {CartContext} from '../../context/cart'

function productPage (){

   const {state,dispatch} = useContext(CartContext)
  
  const {query} = useRouter()
  const router = useRouter()
  const {slug} = query

  const product = productItems.find((pItem)=> pItem.slug===slug)

  if(!product){
    return <div>Product NOt find!</div>
  }

 function addToCartHandler (){
 const existingItem = state.cart.cartItems.find((item) =>item.slug === product.slug)
 const qty = existingItem ? existingItem.qty +1 :1
 if(qty>product.count){
  alert('Product is out!')
  return
 }
 dispatch ({ type:'ADD_ITEMS' , payload :{...product , qty}})
 router.push('/cart')
 }

  return (
  
    <Layout title= {product.title}>
        <div className='grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10'>
           <div  className='md:cols-span-2'>
           <img className='rounded-xl ' width={340} height={340} layout='responsive' src={product.image} />
           </div>
              <div className='text-lg bold'>
              <h1>{product.title}</h1>
              <div className='p-2'> 
                <div className='mb-2 flex justify-between '>
                  
                </div>
              </div>
              <div className='p-2'> 
                <div className='mb-2 flex '>
                  <div>description:</div>
                  <div className='pl-5'>{product.description}</div>
                </div>
              </div>
              
                </div>
                <div className='p-2'> 
                  <div className='mb-2 flex justify-between '>
                  <div>status:</div>
                   <div className='pl-5'>{product.count >0 ? 'Avaibale' : 'Unavaibale'}</div>
               
                  <div>price:</div>
                  <div className='pl-5'>{product.price}</div>
                 
                  </div>
                 
                  <button onClick={addToCartHandler} className='rounded-xl bg-gray-700 text-white px-4 py-2 w-full'>Add Cart</button>
                 
                </div>
        </div>
    
    
    </Layout>
  )
}
export default productPage