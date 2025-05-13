import Image from 'next/image'
import pre from '../public/images/previous.png'
import next from '../public/images/next.png'


function description ({clickPrev,clickNext,currentIndex,products}){
 
    return(
        <div className='grid place-item-start w-full relative bg[#e7dfd9] rounded-tr-3xl rounded-br-3xl'>
            <div className='uppercase text-sm absolute right-4 top-2 underline-offset-4 underline'>
                Cofee COfeeeee
            </div>
            {products.map((item,index)=>(
              <div className={`${index===currentIndex 
                ?'block w-full h-[80vh] object-cover transition-all  ease-in-out'
                :'hidden'
            }`}
                key={index}>
                <div className='py-12 px-5 text-5xl font-extrabold '>{item.title}</div>
                <div className='px-5 leading-relaxed font-medium text-base tracking-wide h-40  w-full italic text-gray-600'>{item.description}</div>

                <button className="bg-[#ecae7e] text-white uppercase px-3 py-2 ml-2 rounded-md my-10">
                     Order Now 
                </button>
                <div className="absolute bottom-4 w-full  justify-center items-center ">
                    <div onClick={clickPrev} className="absolute bottom-4 right-14 cursor-pointer">
                        <Image 
                        src={pre}
                        alt=''
                        width={40}
                        height={40}
                        />

                    </div>
                    <div onClick={clickNext} className="absolute bottom-4 right-2 cursor-pointer">
                        <Image
                         src={next}
                         alt=''
                        width={40}
                        height={40}
                         />

                    </div>
                </div>
              </div>
             
            ))}


        </div>
    )

}export default description
