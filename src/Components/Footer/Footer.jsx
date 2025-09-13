import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="Contacts" className="flex justify-arround bg-[#465697] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contacts</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel Free To Reach Out</h3>
        </div>
        <ul className="flex gap-20 text-sm md:text-xl pl-80">
            <li className="flex gap-1 items-center"><MdOutlineEmail size={20}/>
            kachhapanjali450@gmail.com
            </li>
            <li className="flex gap-1 items-center"><CiLinkedin />
            <a href="https://www.linkedin.com/in/anjali-kachhap-3103b6264/">Linkedin</a>
            </li>
            <li className="flex gap-1 items-center"><FaGithub />
            <a href="https://github.com/anjali467">GitHub</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer