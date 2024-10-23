
import { getSession } from 'next-auth/react'
 import db from '../../../utils/db'
import Order from '../../../models/order'
 async function handler(req, res) {
    
  const session = await getSession({req,res})
 
    const {user} = session
      if(!session){
        res.send('session required')
    }
      else{ 
     db.connect()
    const newOrder =await new Order ({
        user:user._id,
        ...req.body,
       
    })
    const order = await newOrder.save()
         res.status(201).send(order)
} 
}  export default handler

    
   