import Layout from "../../components/layout"
import Link from "next/link"
import { useEffect,useState } from "react"

function DashboardPage(){
    const[adminData,setAdminData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('/api/admin/summary')
            const data =await response.json()
            setAdminData(data)
        }
        fetchData()
    },[])
    return   <Layout title="Dashboard Page">
        <div className="grid grid-cols-4 md:gap-5 ">
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
            <div className="md:cols-span-3 ">
               <h2 className="mb-4 text-xl"> Admin Dashboard </h2>
               <div>
                {adminData.map((item,index)=>(
                   <div key={index} className="flex p-2">
                    <div className="m-5 p-5 bg-white rounded-xl text-center">
                       
                        <p className="text-3xl">{item.ordersCount}</p >
                        <p>Orders</p>
                    </div>
                   <div className="m-5 p-5 bg-white rounded-xl text-center">
                       
                        <p className="text-3xl">{item.productsCount}</p>
                        <p>Products</p>
                   </div>
                    <div className="m-5 p-5 bg-white rounded-xl text-center">
                   
                    <p className="text-3xl">{item.usersCount}</p>
                    <p>Users</p>
                    </div>
                   </div>
                ))}
               </div>

            </div>

        </div>
    </Layout>
}   
DashboardPage.Auth ={adminOnly:true}
export default DashboardPage