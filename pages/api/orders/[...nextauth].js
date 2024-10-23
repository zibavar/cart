import NextAuth from "next-auth";  
import Providers from "next-auth/providers"; // For NextAuth v3  
// import { AuthOptions } from "next-auth"; // For NextAuth v4  

export const authOptions = {  
  providers: [  
    // Configure one or more authentication providers  
    Providers.Google({  
      clientId: process.env.GOOGLE_CLIENT_ID,  
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  
    }),  
    // Add more providers as needed  
  ],  
  // Optional: Add database adapter, sessions, pages, callbacks, etc.  
};  

export default NextAuth(authOptions);  