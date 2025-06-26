"use client"

import Navbar from "@/app/components/navbar";
import DividerMountain from "@/app/components/divider";
import {useEffect, useState} from "react";

type DisplayProp = {
    text: string;
    categorie?: string;
}

const images = [
    "/img/mer.jpg",
    "/img/foret.jpg",
    "/img/automne.jpg",
    "/img/lac.jpg",
    "/img/foret_enneigee.jpg",
    "/img/lac_enneigee.jpg",
    "/img/pasteque.jpg",
];

export default function HeroImage({text, categorie}: DisplayProp) {
    categorie = categorie ?? text
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // toutes les 3 secondes

        return () => clearInterval(interval); // nettoyage
    }, []);
    return (
        <div>
            <div className={"flex flex-col h-screen bg-customBlue"}>
                <Navbar page={categorie}/>
                <div className={"flex items-center justify-center grow"}>
                    <h1
                        className={" bg-clip-text bg-cover bg-center bg-no-repeat text-transparent text-[18vw] text-center inline-block font-montserrat leading-none"}
                        style={{ backgroundImage: `url('${images[index]}')` }}>
                        {text}
                    </h1>
                </div>
            </div>
            <DividerMountain/>
        </div>
    );
}
