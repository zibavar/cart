import nextAuth  from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import db from '../../../utils'
import User from '../../../Models/user'
import bcrypt from 'bcryptjs'

export default nextAuth ({
    session :{
        strategy: "jwt"
    },
    callbacks:{
        async jwt ({token,user}){
            if(user?._id) token._id = user._id
            if (user?.isAdmin) token.isAdmin = user.isAdmin 
            return token
        },
        async session(session,token){
            if(session?._id) session.user._id = token._id
            if(session?.isAdmin) session.user.isAdmin = token.isAdmin
            return session 
        }
    },
    providers:[
        CredentialsProviders({
            async authorize(credentials){
                await db.coonect()
                const user =await User.findOne({
                    email:credentials.email,
                })
                if(user && bcrypt.compareSync(credentials.password,user.password)){
                    return{
                        _id : user._id,
                        name :user.name,
                        email :user.email,
                        image : 'f',
                        isAdmin :user.isAdmin
                    }
                }
                throw new error('invalid email or password')
            }
        })
    ]
})