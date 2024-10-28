import {getSession} from 'next-auth/react'
import Order from '../../../models/order'
import db from '../../../utils/db'


async function handler (req,res){
   const session = await getSession({req,res})
 
    const {user} = session
    if(!session){
      return res.send('sigin required ')
    }
    await db.connect()
   const orders =await Order.find({user :user._id})
   
   res.send(orders)
}
export default handler 