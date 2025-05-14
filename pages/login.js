import Layout from '../components/layout'
import { useRouter } from 'next/router' 
import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { signIn,useSession } from 'next-auth/react'
import Link from 'next/link'
function LoginPage(){

  const {data:session} = useSession()

    const router =useRouter()
    const {redirect} = router.query

    useEffect(()=>{
     if(session?.user){
       router.push(redirect || '/')
     }
    },[router,session,redirect]) 


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
 

    


     const submitHandler =async  ({email,password}) => {
    
    const result = await signIn('credentials',{
      email,
      password,
      redirect: false,
    })
    if (result.error){
       <p>feild</p>
    }
   

    }
return (
    <Layout title='Login'>
    <form className='mx-auto max-w-xs'
     onSubmit={handleSubmit(submitHandler)}>
        <h2 className='mb-4 text-xl-center'>Login</h2>
        <div className='mb-4 '>
            <input
            {...register('email',{required:true})}

            type='email' className='w-full rounded-xl p-2 outline-0' id='email' placeholder='Email' autoFocus/>
            </div>
            {errors.email &&(
                <div className="text-red-500">Please Enter Email!</div>
            )}
            <div className='mb-4  '>

            <input
             {...register('password', {
                required: true,
                minLength: {
                  value: 5,
                  message: 'Password mut be at least 5 chars.',
                },
              })}
             type='password' 
             className='w-full rounded-xl p-2 outline-0' 
             id='password' 
             placeholder='password' 
             autoFocus
             />
             {errors.password &&(
                <div className='text-red-500'>{errors.password.message} </div>
            )}
            </div>
            <div className='mb-4   '>
            <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>
               Login
            </button>
            </div>
            <div className='mb-4 flex '>
                <p className='px-1 py-1' >If you haven&apos;t registered yet! </p>
            <Link href='register' className='ml-3 rounded-xl bg-red-700 text-white px-4 py-1 w-24 h-8'>
              Register 
            </Link>
            </div>

    </form>

    </Layout>
)

}export default LoginPage