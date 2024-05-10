import React from 'react'
import HeroImage from "../../assets/hero/heroImage.png"
function Hero() {
    return (
        <>
            <div 
            className='flex flex-col-reverse 
            md:flex-row mt-5 z-10'>
            <div 
            className='basis-1/2 flex 
            flex-col gap-1 px-10 justify-center items-start'>
                <h1 
                className='heroH1 text-[50px] md:text-[80px] font-bold'
                >
                Hi, I'm Chandan
                <span className='text-sm text-green-500'>Dutta</span>
                </h1>
                <p className='text-white text-xl'>
                I'm a <span className='text-green-400'>Frontend Web Developer </span> with over a year of experience creating websites using React.js. 
                Currently seeking new opportunities. Feel free to contact me if you're interested! 
                </p>
            </div>
            <div className='basis-1/2 heroImg'>
                <img src={HeroImage} alt="" />
            </div>
        </div>
        <div className='topBlur'></div>
        </>
    )
}

export default Hero
