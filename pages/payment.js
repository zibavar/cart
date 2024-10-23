import { useRouter } from "next/router";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/layout";
import { useState,useContext } from "react";
import {Store} from '../context/cart';
import Cookies from 'js-cookie';

function payment (){
   
    const {state,dispatch} =useContext(Store)
    const {cart} = state
    const methods =['GateWay', 'Offline Payment']
   const[selectPaymentMethod,setSelectPeymentMethod]= useState('')
    const router = useRouter()
    function submitHandle (event){
        event.preventDefault()
        if(!selectPaymentMethod){
            alert('Please select your Payment method !!')
        }
       else{ dispatch({type:'SAVE_PAYMENT_METHOD', payload:selectPaymentMethod})
        Cookies.set(
            'cart',
            JSON.stringify({
                ...cart,
                paymentMethod: selectPaymentMethod
            })
        )
        router.push('/placeorder')
    }
    }
    return(
        <Layout title='payment page'>
        <CheckoutWizard activeStep={2} />
         <form className='mx-auto max-w-screen-md text-center'
         onSubmit={submitHandle}
         >
         <h2 className='mb-4 text-xl'>Payment 
            method
         </h2>
          {methods.map((item)=>(
              <div keys={item} className="mb-4 ">
                <input 
                name="PaymentMethod"
                type="radio"
                className="p-2 outline-none focus:right-0"
                checked={selectPaymentMethod===item}
                onChange={()=>setSelectPeymentMethod(item)}
                />
                <label className="p-2" htmlFor={item}>{item}</label>
              </div>
          ))}
          <div className="mb-4 flex justify-between">
            <button onClick={()=> router.push('/shipping')} type="button"
             className="rounded-xl bg-gray-300 text-gray-700 px-4 py-2 w-28" >Back</button>
            <button 
             className="rounded-xl bg-gray-700 text-gray-300 px-4 py-2 w-28" >Next</button>
          </div>
         </form>
        
        </Layout>
    )
}
export default payment