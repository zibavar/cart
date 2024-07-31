import { useState } from 'react'
import fs from 'fs'
import path from 'path'
function page(props) {
const [productData,setProductData] = useState()
   async function priceHandler (id){
        const response =await fetch(`/api/${id}`)
        const dataResponse = await response.json()
        setProductData(dataResponse.product)
    }
    return(
        <div>
            
            <ul>
            <div>{productData && <p>{productData.price}</p>}</div>
                    {props.productItems.map((product)=>(
                        <div className='grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10'>
                        <div  className='md:cols-span-2'>
                        <img className='rounded-xl ' width={340} height={340} layout='responsive' src={product.image} />
                        </div>
                           <div className='text-lg bold'>
                           <h1>{product.title}</h1>
                           <div className='p-2'> 
                             <div className='mb-2 flex justify-between '>
                               
                             </div>
                           </div>
                           <div className='p-2'> 
                             <div className='mb-2 flex '>
                               <div>description:</div>
                               <div className='pl-5'>{product.description}</div>
                             </div>
                           </div>
                           
                             </div>
                             <div className='p-2'> 
                               <div className='mb-2 flex justify-between '>
                               <div>status:</div>
                                <div className='pl-5'>{product.count >0 ? 'Avaibale' : 'Unavaibale'}</div>
                            
                               <div>price:</div>
                               <div className='pl-5'>{product.price}</div>
                             
                               </div>
                               <button onClick={priceHandler.bind(null,product.id)}> click for price</button>
                               
                               <button  className='rounded-xl bg-gray-700 text-white px-4 py-2 w-full'>Add Cart</button>
                              
                             </div>
                     </div>
                    ))}
               
            </ul>
        </div>
    )
}

export function getStaticProps(){
const filepath = path.join(process.cwd(), 'data','products.json')
const filedata = fs.readFileSync(filepath)
const data = JSON.parse(filedata)

return {
    props : {
        productItems :data 
    }
}
}
export default page 

