import Layout from '../components/layout'
import {useContext} from 'react'
import {CartContext} from '../context/cart'
import Image from 'next/image'
function CartPage(){
    const {state,dispatch} = useContext(CartContext)
    const {cart :{cartItems},
     } = state
    return(
        <Layout title='Shopping Cart'>
            <h1 className='text-left text-xl font-bold'>Shopping Cart</h1>
            {cartItems.length === 0 ? (<div>cart is empty</div>) : (
            <div className='grid md:grid-cols-4 md:gap-5 '>
              <div className='overflow-x-auto md:col-span-3'>
                 <table className='min-w-full'>
                  <thead className='border-b'>
                     <tr>
                        <th className='px-5 text-left'>item</th>
                        <th className='p-5 text-left'>count</th>
                        <th className='p-5 text-left'>price</th>
                        <th className='p-5 text-left'>action</th>
                     </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item)=>(
                        <tr  className='border-b px-5' key={item.slug}>
                        <td>
                            <span className='flex item-center p-5 ' >
                                <Image  className='mx-5' src={item.image} width={70} height={70} />
                                {item.title}
                            </span>
                        </td>
                        <td className=' p-5'>{item.count}</td>
                        <td className='p-5'>{item.price}</td>
                        <td className='p-5'>
                            <button className='px-5 py-1 bg-red-500 text-white rounded'>remove</button>
                        </td>
                        </tr>
                        
                    ))}
                  </tbody>
                 </table>
              </div>
            </div>
            )}
        </Layout>
    )
}
export default CartPage