import { getSession } from 'next-auth/react'
import Order from '../../../models/order'
import db from '../../../utils/db'

async function handler (req,res){
    const session =await getSession({req,res})
   
    if(!session || (session && !session.user.isAdmin)){
        return res.send('signin required').status(401)
    }
    await db.connect()
    const orders =await Order.find()
    res.send(orders)

    
} export default handler