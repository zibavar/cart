import Layout from '../components/layout'
import {useContext,useState,useEffect} from 'react'
import {Store} from '../context/cart'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import productItems from '../data/products' 
import { toast } from 'react-toastify'

function CartPage(){
 
    const router = useRouter()
    const {state,dispatch,totalPrice} = useContext(Store)
    const {cart :{cartItems},
     } = state

    const [counter, setCounter] = useState(cartItems)

    const handleQuantityChange = (id, e) =>
        {
        const quantity = e;
         if (quantity > 0) {
            updateQuantity(id, quantity);
            }
        };
    const updateQuantity = (id, qty) => 
        {
            dispatch({ type:'UPDATE_QUANTITY', payload: { id, qty } });
        };

    function removeItemHandler(item)
        {
            dispatch({type : 'REMOVE_ITEMS', payload : item})
        }
     
    const handleClick2 = (id) =>
        {
            const product = counter.find((pItem)=> pItem.id===id)
                product.qty = product.qty + 1
                updateQuantity(id, product.qty);
        };
    
    const handleClick1 = (id) =>
        {
            const product = counter.find((pItem)=> pItem.id===id)
            product.qty = product.qty - 1
            updateQuantity(id, product.qty);   
        };
        
    return(
        <Layout title='Shopping-Cart'>
            <h1 className=' m-10 text-left text-xl font-bold'>Shopping Cart</h1>
           
               
          
            {cartItems.length === 0 ? (<div>cart is empty</div>) : (
                <div>
                 <tr className=' p-3 pl-12 border-b  content-center bg-white grid grid-cols-9 rounded-xl text-center' >
                 <th className='col-span-1 text-left'>image</th>
                 <th className='col-span-1 '>title</th>
                 <th className='col-span-1 '>unit</th>
                 <th className='col-span-2 '>update</th>
                 <th className='col-span-1  '>price</th>
                 <th className='col-span-1' >Delete</th>
                 <th className='col-span-2 ' >TOTAL PRICE</th> 
                
                 </tr>
                <div className='grid grid-cols-5 gap-4'>
             <div className='col-span-4'>
                    {cartItems.map((item,key)=>(
                         <tr key={key} className='mb-1  grid grid-cols-7 text-center content-center bg-white rounded-xl '>
                            <td className='col-span-1' >
                                <Image className ='content-center rounded-xl' alt="" src={item.image} width={90} height={100} />
                            </td>
                            <td className='text-xl col-span-1 font-bold content-center ' >
                                {item.title}
                                
                            </td>
                            <td className=' text-lg col-span-1 content-center font-bold'>$ {item.price}</td>
                            <td className=' text-l col-span-2 content-center font-bold'>
                             {item.qty === item.count &&  <p>Out of stock!</p>}
                            <button  className='border rounded w-10 py-1 px-3 text-white focus:outline-none hover:shadow-outline bg-gray-500'
                                onClick={()=>handleClick1 (item.id)}
                                disabled={item.qty ===1} >
                                -
                            </button> 
                
                            <input type="number"className="  text-center border border-solid w-32 py-1 px-3 
                            text-gray-700 text-center leading-tight hover:outline-none focus:shadow-outline w-20" 
                            value={item.qty} min={1} max={item.count} 
                            onChange={(e)=>handleQuantityChange(item.id,Number(e.target.value))} 
                            />
                            <button className='border rounded w-10 py-1 px-3 text-white focus:outline-none hover:shadow-outline bg-gray-500'
                                onClick={()=>handleClick2 (item.id)}
                                disabled={item.qty >= item.count}>
                                +
                            </button>
                            </td>
                            <td className=' col-span-1 content-center font-bold'>
                         $ { item.qty * item.price}
                            </td>
                            <td className='col-span-1 content-center'>
                            <button onClick={()=> removeItemHandler(item)}     
                            className='px-5 py-1 bg-red-500 text-white rounded center'>remove</button>
                            </td>
                         </tr>
                    ))}
               </div>   
            <div className=" col-span-1 text-center content-center bg-white rounded-xl ">
            {/* <tr>
              <th> <span> total price</span>  </th>
              </tr> */}
            <div className="p-5 content-center text-center font-bold m-auto ">
                
              
               <div className='ml-5 '> ${totalPrice.toFixed(2)}</div>
             <button onClick={()=> router.push('login?redirect=/shipping')} 
              className="rounded-xl bg-gray-700 text-white p-2 w-32 m-auto">check out</button>
             
            </div> 
            </div>
            </div>
            </div>
            )}
            
        </Layout>
    )
}
export default dynamic(()=> Promise.resolve(CartPage),{ssr:false})