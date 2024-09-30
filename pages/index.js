import { useContext } from 'react'
import Layout from '../components/layout'
import ProductItem from '../components/ProductItem'
import db from '../utils/db'
import Product from '../models/product'
import { toast } from 'react-toastify'
import {Store} from '../context/cart'


 function Home({products}) {

  const {state , dispatch} = useContext(Store)
  const {cart} = state
  function addToCartHandler (product){
    const existingItem = cart.cartItems.find(
      (item) =>item.slug === product.slug
    )
    const qty = existingItem ? existingItem.qty +1 :1
    dispatch({type:'ADD_TO_CART' , payload:{...product,qty}})
    toast.success('Product is added ')
  }
  return(
    <div>
     <Layout title='Home Page' > 
    <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((pItem)=>(
        <ProductItem 
        AddToCart ={addToCartHandler}
        item ={pItem} 
        key={pItem.slug}>

        </ProductItem>
      ))}
    </div>
     
     </Layout> 
  
    </div>
  )
}


export default Home

export async function getServerSideProps() {
  await db.connect()
  const products = await Product.find().lean()
  return{
   props : {products : products.map(db.convertToObj)},
  }

}