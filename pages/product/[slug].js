import productItems from '../../data/products'

import { useRouter } from 'next/router' 

import Layout from '../../components/layout'

import { useContext,useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import {Store} from '../../context/cart'

function ProductPage (){
  const {state,dispatch} = useContext(Store)
    const {cart :{cartItems},
     } = state
  
  const {query} = useRouter()
  const router = useRouter()
  const {slug} = query
     
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    // Check if the product exists in the cart and set the quantity accordingly
    let cartProduct =cartItems.find(item => item.id===product.id) 
    const product = productItems.find((pItem)=> pItem.slug===slug)
  if(!product){
    return <div>Product NOt find!</div>
  }
    if (cartProduct){
      setCounter(cartProduct.qty)
    }
   
  }, [cartItems, product.id]);
  
 
  const handleInitialCountChange = (event) => {
    setCounter(Number(event.target.value));
};


const handleClick1 = () => {
    setCounter(counter + 1);
};

const handleClick2 = () => {
    setCounter(counter - 1);
}; 
 function addToCartHandler (){
      const existingItem = state.cart.cartItems.find((item) =>item.slug === product.slug)
      const qty = existingItem ? existingItem.qty + counter :counter
      if(qty>product.count){
      alert('Product is out!')
        return
      }
      dispatch ({ type:'ADD_TO_CART' , payload :{...product , qty}})
      toast.success('Product is added ')
 }

  return (
   <>
    <Layout title= {product.title}>
        <div className='mt-50 grid grid-cols-6 gap-4 bg-white juatufy-between rounded-xl p-10'>
           <div  className='col-start-1 '>
           <img className='rounded-xl ' width={340} height={340} layout='responsive' alt='' src={product.image} />
           </div>
              <div className='text-lg col-span-4 col-start-2 '>
              
              <div className='p-2'> 
                <div className='mb-2 flex justify-between font-bold  text-5xl'>
                <h1>{product.title}</h1>
                </div>
              </div>
              <div className=' p-2 mb-2 flex'>
              <div className='text-gray-300'>status:</div>
              <div className='pl-5'>{product.count >0 ? 'Avaibale' : 'Unavaibale'}</div>
              </div>
              <div className='p-2'> 
                <div className='mb-2 flex '>
                  <div className='text-gray-300'>price:</div>
                  <div className='pl-5'>$ {product.price} </div>
                </div>
              </div>
              <div className='p-2'> 
                <div className='mb-2  '>
                  <div className='text-gray-300'>description:</div>
                  <div className='mt-2 pl-5'>{product.description}</div>
                </div>
              </div>

            
              
                </div>
                <div className='p-2 col-span-1'> 
                  <div className='mb-2 flex justify-between col-span-2 col-end-7'>
                 
                  <button className='border rounded w-10 py-1 px-3 text-gray-700'
                        onClick={handleClick2}>
                    -
                </button> 
                <input   type="number"
                    value={counter} min={1} max={product.count}
                    onChange={addToCartHandler} className=" border rounded w-full py-1 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline w-20"  />
                 
                 <button className='border rounded w-10 py-1 px-3 text-gray-700'
                        onClick={handleClick1}>
                   +
                </button>
                  
                 
                  </div>
                 
                  <button onClick={addToCartHandler} className='rounded-xl bg-gray-700 text-white px-4 py-2 w-full'>Add Cart</button>
                 
                </div>
        </div>
    
    
    </Layout>
   </>
  )
}
export default ProductPage