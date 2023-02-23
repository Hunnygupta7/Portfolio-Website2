import React from "react";
import {FaGithub, FaLinkedin, FaInstagram, FaFacebookF} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialHandles = () =>{
    const links = [
        {
            id: 1,
            child: (
            <>
                <FaInstagram size={25} />
            </>
            ),
            href: "https://www.instagram.com/hunny._.gupta/",
            },
        {
            id: 2,
            child: (
              <>
                <FaFacebookF size={25} />
              </>
            ),
            href: "https://www.facebook.com/hunny.gupta.0315",
            style: "rounded-br-md",
            download: true,
          },
        {
            id: 3,
            child: (
                <>
                    <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/nishant-gupta-2a220a22a/",
            style: "rounded-tr-md",
        },
        {
            id: 4,
            child: (
              <>
                <FaGithub size={25} />
              </>
            ),
            href: "https://github.com/hunnygupta7",
          },


    ];

    return(
        <div className="w-full h-screen">
            <div className="flex flex-row p-4 justify-center  h-full">

               
               {links.map(({id, child, href}) =>(
                    <a
                       href={href}
                       className="flex justify-between items-center m-2 text-white"
                       target="_blank"
                       rel="noreferrer"
                    >
                       {child}     
                    </a>
               ))}
                 
            </div>
        </div>
    )
}


export default SocialHandles;