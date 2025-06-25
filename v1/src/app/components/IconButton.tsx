"use client"

import Image from "next/image";
import {useState} from "react";


type Icon = {
    url: string,
    icon: string,
}
export default function IconButton({url, icon}: Icon) {
    const [hover, setHover] = useState(false);
    return (
       <div className={"mx-2"}>
           <a href={url}>
               <div className={`rounded-full bg-customBlue p-2 ${hover ? "scale-105" : "scale-100"}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                   <Image src={`/img/${icon}`} alt={icon} width={36} height={36}/>
               </div>
           </a>
       </div>
     );
}