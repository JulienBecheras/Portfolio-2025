"use client"

import Link from "next/link";

export default function Navbar(){

    return(
        <div className={"flex justify-between items-center mt-[3vh] bg-customBlue h-[8vh]"}>
            <Link href="/" className={"text-[3vw] w-[10vw] mx-[5vw]"}>Home</Link>
            <div className={"flex justify-around text-center items-center mx-[10vw] grow"}>
                <Link href="/projets" className={"text-[3vw] mx[2vw]"}>Projets</Link>
                <Link href="/a-propos" className={"text-[3vw] mx[2vw]"}>A propos</Link>
                <Link href="/passions" className={"text-[3vw] mx[2vw]"}>Passion</Link>
                <Link href="/contact" className={"text-[3vw] mx[2vw]"}>Contact</Link>
            </div>
        </div>
    )
}