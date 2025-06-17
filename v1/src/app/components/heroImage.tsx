"use client"

import Navbar from "@/app/components/navbar";
import DividerMountain from "@/app/components/divider";

type DisplayProp = {
    text: string;
    categorie?: string;
}

export default function HeroImage({text, categorie}: DisplayProp) {
    categorie = categorie ?? text
    return (
        <div>
            <div className={"flex flex-col h-screen bg-customBlue"}>
                <Navbar page={categorie}/>
                <div className={"flex items-center justify-center grow"}>
                    <h1
                        className={" bg-clip-text bg-cover bg-center bg-no-repeat text-transparent text-[18vw] text-center inline-block font-montserrat leading-none"}
                        style={{ backgroundImage: "url('/img/test.jpg')" }}>
                        {text}
                    </h1>
                </div>
            </div>
            <DividerMountain/>
        </div>
    );
}
