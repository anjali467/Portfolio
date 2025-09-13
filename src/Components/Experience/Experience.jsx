import React from 'react'
import {FaCss3, FaHtml5, FaJs} from "react-icons/fa";
//import {SiRadis} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Skills & Experience</h1>
        <div className="flex felx-wrap items-center justify-around">
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiCplusplus color="#E34F26" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaHtml5 color="#1572b6" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaCss3 color="#1572b6" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaJs color="#F7DF1E" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaReact color="#61DAF8" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiTensorflow color="#FF6F00" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiScikitlearn color="#F89939" size={50}/>
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiPython color="#3776AB" size={50}/>
            </span>
            </div>
            <div>
              <div className="flex gap-10 w-70 h-40 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            
                <span className="text-white">
                    <h2 className="leading-tight">Web-Application Developer, Adikriti Apparels</h2>
                    <p className="text-sm leading-tight font-thin">May 2025 - July 2025 </p>
                    <ul className="text-sm p-2">
                        <li>Worked as a Developer in a Consultancy Project</li>
                        <li>Developed Accessory Recommendation System and its Try'on</li>
                    </ul>
                </span>
            </div>
              <div className="flex gap-10 w-70 h-40 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                
                <span className="text-white">
                    <h2 className="leading-tight">Worked in my self Project</h2>
                    <p className="text-sm leading-tight font-thin"></p>
                    <ul className="text-sm p-2">
                        <li>Worked as a Developer</li>
                    </ul>
                </span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Experience