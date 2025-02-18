"use client"

import Navbar from "@/app/components/navbar";

type DisplayProp = {
    text: string;
}

export default function HeroImage({text}: DisplayProp) {
    return (
        <div className={"flex flex-col h-screen bg-customBlue"}>
            <Navbar />
            <div className={"flex items-center justify-center grow"}>
                <h1
                    className={" bg-clip-text bg-cover bg-center bg-no-repeat text-transparent text-[20vw] text-center inline-block"}
                    style={{ backgroundImage: "url('/img/test.jpg')" }}>
                    {text}
                </h1>
            </div>
        </div>
    );
}
