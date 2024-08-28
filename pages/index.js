import Layout from '../components/layout'
import Products from '../components/Products'
import ProductItems from '../data/products'
 function Home() {
  return(
    <div>
     <Layout title='Home Page' > 
    <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
      { ProductItems.map((pItem)=>(
        <Products item ={pItem} key={pItem.slug}></Products>
      ))}
    </div>
     
     </Layout> 
  
    </div>
  )
}


export default Home
