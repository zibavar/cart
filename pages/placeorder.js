import Link from "next/link";
import { useRouter } from "next/router";
import CheckoutWizard from "../components/CheckoutWizard";
import { useContext } from "react";
import {Store} from '../context/cart'
import Image from 'next/image'
import { useState } from "react";
import Layout from "../components/layout";


function PlaceOrderPage(){
    const [showModel,setShowModel]= useState(false)
    const router = useRouter()
    const {state} = useContext(Store)
    const {cart} = state
    const {shippingData,paymentMethod,cartItems} = cart
    
    async function placeOrderHandler(){
       
        const totalPrice = cartItems.reduce((acc,cur)=>acc+cur.qty*cur.price,0)
        
     const response=  await fetch('/api/orders',{
            method :'POST',
            body :JSON.stringify({
                orderItems :cartItems,
                shippingData,
                paymentMethod,
                totalPrice
            }),
            headers :{'Content-Type' :'application/json' }
        })
        const data = await response.json()
console.log(data)

{setShowModel(true)}
 
    }
return (
    <Layout title='PlaceOrder Page'>
        <CheckoutWizard activeStep={3}/>
        <h1 className="mb-4 text-xl">Place Order Page</h1>
        <div className="grid md:grid-cols-4 md:gap:5">
            <div className="overflow-x-auto md:col-span-3">
        
                <div className="p-5">
                    <h2 className="text-xl">shipping data</h2>
                    <div>
                        {shippingData.name}
                        {'-'}
                        {shippingData.address}
                        {'-'}
                        {shippingData.postalCode}
                    </div>
                    <Link href='/shipping'>
                      edit
                    </Link>
                </div>
                <div className="p-5">
                    <h2 className="text-xl">payment Method</h2>
                    <div>
                        {paymentMethod}
                      
                    </div>
                    <Link href='/payment'>
                      edit
                    </Link>
                </div>
                <div className="overflow-x-auto">
                     <h2 className="text-xl">Order List</h2>
                     <table className='min-w-full'>
                  <thead className='border-b'>
                     <tr>
                        <th className='px-5 text-left'>item</th>
                        <th className='p-5 text-left'>count</th>
                        <th className='p-5 text-left'>price</th>
                        <th className='p-5 text-left'>subTotal</th>
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
                        <td className=' p-5'>{item.qty}</td>
                        <td className='p-5'>{item.price}</td>
                        <td className='p-5'>
                        {item.qty*item.price}
                        </td>
                        </tr>
                        
                    ))}
                  </tbody>
                     </table>
                     <Link href='/cart'>
                      edit
                     </Link>
                </div>

                </div>
          
        

            <div className="p-5">
                <h2 className=" mb-4 text-lg">Order Summery</h2>
                <ul>
                    <li>
                        <div className="mb-2 flex justify-between">
                            <div>Total Price </div>
                            <div className='ml-5 '>{cartItems.reduce((acc,cur)=>acc+cur.qty*cur.price,0)} </div>
                        </div>
                    </li>
                    <li>

                        <button onClick={placeOrderHandler} className="rounded-xl bg-gray-700 text-white px-4 py-2">Place Order</button>

                    </li>
                </ul>
            </div>
          {showModel ? (
            <div className="mt-10 flex justify-center items-center flex-col absolute left-1/3  top-1/3	border-1 w-1/3 bg-gray-200 shadow-lg rounded-lg h-1/3 p-2 ">
              <img src='../images/gift-box.png' width={100} height={100} objectfit="contain" />
              <h2 className="text-base mt-2 mx-4 text-gray-800 font-semibold text-center">!! Your orders have been placed successfully !!</h2>
              <button className="my-5 w-auto   px-8 h-10 bg-blue-600 text-white rounded-md hover:shadow-lg font-semibold" onClick={()=> router.push('/order-history')}>order history </button>
              <button className=" w-auto absolute absolute top-0 right-0 px-8 h-10 bg-gray-600 text-white rounded-md hover:shadow-lg font-semibold" onClick={()=> setShowModel(false)}>close </button>
          </div>) : null}

        </div>
    </Layout> 
)
}
export default PlaceOrderPage