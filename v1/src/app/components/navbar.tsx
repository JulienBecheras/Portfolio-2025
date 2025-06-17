"use client"

import Link from "next/link";

type SelectProp ={
    page: string
}



export default function Navbar({page}: SelectProp){

    function comparePage(compare : string){
        let styleCss = "text-[3vw] mx[2vw] hover:scale-110"
        if (compare == page){
            styleCss += "border-white border-solid border-b-[1vh] pt-[1vh]"
        }
        return styleCss
    }

    return(
        <div className={"flex justify-between items-center mt-[3vh] bg-customBlue h-[8vh]"}>
            <Link href="/" className={"text-[3vw] w-[10vw] mx-[5vw] hover:scale-110"}>Home</Link>
            <div className={"flex justify-around text-center items-center mx-[10vw] grow"}>
                <Link href="/projets" className={comparePage("Projets")}>Projets</Link>
                <Link href="/a-propos" className={comparePage("À Propos")}>À Propos</Link>
                <Link href="/passions" className={comparePage("Passions")}>Passions</Link>
                <Link href="/contact" className={comparePage("Contact")}>Contact</Link>
            </div>
        </div>
    )
}