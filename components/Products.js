import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/cart'


function productPage({item}){
 const {state,dispatch} = useContext(CartContext)

function AddCardHandler(){
  const existingItem = state.cart.cartItems.find((items) =>items.slug === item.slug)
  const qty = existingItem ? existingItem.qty +1 :1
  dispatch ({ type:'ADD_ITEMS' , payload :{...item , qty}})
}

 return(
    <div className='bg-white rounded-xl mb-5 block'>
        <Link href={`/product/${item.slug}`}>
          <img src={item.image} className='rounded-t-xl w-screen h-40' />
        </Link>
        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/product/${item.slug}`}>
            <h2 className='text-lg'>{item.title}</h2>
            </Link>
            <p className='p-2'>{item.price}</p>
            <button onClick={AddCardHandler} className='rounded-xl bg-gray-700 text-white px-4 py-2'>Add to Cart</button>
        </div>
    </div>
 )
}
export default productPage