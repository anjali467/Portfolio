import React from 'react'
import imgjpg from './img.jpg'
import TextChange from "../TextChange"


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"><TextChange /></h1>
        <h2 className="text-2xl md:text-4xl text-[#ADD8E6] mt-4 font-bold flex leading-normal tracking-tighter">Software Intern</h2>
        <p className="text-sm md:text-2xl pt-10 tracking-tight">I am a dedicated and passionate 4th-year B.Tech student specializing in Computer Science and Engineering. 
            Throughout my academic journey, I have developed strong skills in Programming language specified in C++, Frontend, Data Structure and Algorithms, 
            Machine Learning and also acquiring soft skill in English and Spanish Language and gained practical experience through projects and internships. 
            I enjoy solving complex problems and continuously learning new technologies. I am eager to apply 
            my knowledge and enthusiasm to contribute effectively in a professional engineering environment.</p>
            <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
        <div className="ml-10 "><img className="w-90 h-80 mr-40 object-contain rounded-full bg-black mt-10" src={imgjpg} alt="img"></img></div>
    </div>
  )
}

export default Home