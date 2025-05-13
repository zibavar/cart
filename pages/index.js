
import Layout from '../components/layout'
import Slider from '../components/Slider'
import ProductSlider from '../components/ProductSlider'
import ProductsSlider from '../components/ProductsSlider'
import db from '../utils/db'
import Product from '../models/product'

export function generateMetadata(){
  return {
      title: "Home | Your Online Shop",
      description: "Discover a wide range of amazing products.",
      openGraph: {
          title: "Home | Your Online Shop",
          description: "Explore top-quality products at your fingertips.",
      }
  }
}
 function Home({products}) {
  
  return(
    <div>
     <Layout title='Home Page' > 

     
    <Slider />
   <ProductsSlider products={products} />
   <ProductSlider products={products} />

     </Layout> 
  
    </div>
  )
}


export default Home

export async function getServerSideProps() {
  await db.connect()
  const products = await Product.find().lean()
  return{
   props : {products : products.map(db.convertToObj)},
  }

}