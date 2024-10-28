import Layout from '../components/layout'
import {useEffect,useState} from 'react'

function OrderHestoryPage(){
    const[orders,setOrders]= useState([])
useEffect(()=>{
    async function fetchOrders(){
        const response =await fetch('api/orders/history')
        const data =  await response.json()
        console.log({data})
        setOrders(data)
    }
    fetchOrders()
},[])

    return(
        <Layout title='Order Page'>
            <h2 className='text-lg'>Order Page</h2>
            <div>
                {orders.map((item)=>(
                    <div key={item._id} className='flex p-2'>
                        <div className='px-2'>{item._id}</div>
                        <div className='px-2'>{item.totalPrice}</div>

                    </div>
                ))}
            </div>
        </Layout>
    )
} export default OrderHestoryPage