import React from 'react'
import AboutImg from "../../assets/7358653-removebg-preview.png"
import {IoArrowForward} from "react-icons/io5"

const About = () => {
  return (
    <div id="About"className="text-white overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl md:mx-20 bg-opacity-30 rounded-lg pd-12">
        <div>
            <h2 className="text-2xl md:text-4xl ml-60 mt-10 font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="ms:h-80 ml-40 " src={AboutImg} alt="About Image"/>
                
                <ul>
                    <div className="flex gap-3 py-4 ml-40 ">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Programmer</h1>
                            <p className="text-5m md:text-md leading-tight">Proficient in C++ programming language with a strong understanding of 
                                 data structures, algorithms andobject-oriented programming concepts. Experienced in developing efficient and maintainable code for various applications, 
                                 including software and performance-critical tasks. 
                                 </p>
                        </span>
                    </div>
                     <div className="flex gap-3 py-4 ml-40 ">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                            <p className="text-5m md:text-md leading-tight">Experienced Frontend Developer skilled in creating responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. 
                                Proficient in modern frontend frameworks and libraries such as React. Committed to writing clean,
                                 maintainable code and continuously learning emerging frontend technologies.</p>
                        </span>
                    </div>
                     <div className="flex gap-3 py-4 ml-40 ">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Software Developer</h1>
                            <p className="text-5m md:text-md leading-tight">
                                Skilled Software Developer with expertise in designing, developing, and maintaining software applications.
                                Proficient in multiple programming language including C++ and python. My strong foundation is on C++.
                                Experienced in writing clean, efficient, and scalable code, as well as debugging and optimizing existing software solutions. 
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About