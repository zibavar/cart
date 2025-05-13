import React, { useState } from 'react';  

const images = [  
    './images/70_inr.jpg',  
    './images/79_inr.jpg',  
    './images/83_inr.jpg',
    './images/85_inr.jpg',
     
];  

const Slider = () => {  
    const [current, setCurrent] = useState(0);  

    const nextSlide = () => {  
        setCurrent(current === images.length - 1 ? 0 : current + 1);  
    };  

    const prevSlide = () => {  
        setCurrent(current === 0 ? images.length - 1 : current - 1);  
    };  

    return (  
        <div className="flex mt-10 mb-10 ">  
             
            <button onClick={prevSlide}><img src='./images/previous.png' className=' absolute w-12 ml-4'/></button> 
           
            <img src={images[current]} alt='Slide' className="w-full" />  
            <button onClick={nextSlide}><img src='./images/next.png' className=' absolute w-12 right-0 mr-8'/></button> 
        </div>  
    );  
};  

export default Slider;