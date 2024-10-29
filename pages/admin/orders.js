import { useEffect,useState } from 'react'
import Layout from '../../components/layout'
import Link from 'next/link'

function ordersFetchPage(){
    const[adminOrders,setAdminOrders] = useState([])
useEffect(()=>{
    async function fetchData(){
        const response = await fetch('/api/admin/orders')
        const data = await response.json()
        setAdminOrders(data)

    }
    fetchData()
},[])
return <Layout title='Orders Admin Page'>
    <div className='grid md:grid-cols-4 md:gap-5'>
        <div >
                <ul>
                    <li className="w-1/2 p-2 bg-blue-700 text-gray-100 rounded-md m-2">
                        <Link href="/admin/dashboard">
                        <p className="font-bold">Dashboard</p>
                        </Link>
                    </li>
                    <li  className="w-1/2 p-2 bg-white m-2 rounded-md">
                        <Link href="/admin/orders">
                        orders
                        </Link>
                    </li>
                    <li  className="w-1/2 p-2 bg-white m-2 rounded-md">
                        <Link href="/admin/products">
                       products
                        </Link>
                    </li>
                    <li  className="w-1/2 p-2 bg-white m-2 rounded-md">
                        <Link href="/admin/users">
                         users
                        </Link>
                    </li>
                </ul>
        </div>
        <div className='md:col-span-3'>
            <h2>Orders Lists</h2>
            {adminOrders.map((item,index)=>(
                <div key={index} className='grid md:grid-cols-4'>
                    <div className='bg-white p-2 m-2 rounded-md'>
                        <p className='text-lg'>Price :{item.totalPrice}</p>
                    </div>
                    <div className='bg-white p-2 m-2 rounded-md'>
                        <p className='text-lg'>Payment Method :{item.paymentMethod}</p>
                    </div>
                </div>
            ))}

        </div>

    </div>
</Layout>
}export default ordersFetchPage