import Link from 'next/link'

function productItem({item,AddToCart}){

 return(
    <div className=' bg-white rounded-xl mb-5'>
        <Link href={`/product/${item.slug}`}>
          <img src={item.image} className='rounded-t-xl w-screen h-max' />
        </Link>
        <div className=' flex flex-col items-center justify-center p-3'>
            <div  className='content-start h-12 text-center font-bold text-gray-500 '>
            <Link href={`/product/${item.slug}`}>
            <h2 className='text-m flex-none '>{item.title}</h2>
            </Link>
            </div>
            <div  className='content-end h-12'>
            <p className='p-2 text-purple-600 font-bold'>{item.price} $</p>
            </div>
        <div className='content-end h-12'>
        <button
             onClick={()=> AddToCart(item)} 
            className='rounded-xl bg-orange-400 grow text-white px-4 py-2'>Add to Cart</button>
        </div>
        </div>
    </div>
 )
}
export default productItem