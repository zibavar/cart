import { getSession } from 'next-auth/react'
import User from '../../../models/user'
import db from '../../../utils/db'

async function handler (req,res){
    const session =await getSession({req,res})
   
    if(!session || (session && !session.user.isAdmin)){
        return res.send('signin required').status(401)
    }
    await db.connect()
    const users =await User.find()
    res.send(users)

    
} export default handler