"use client"

import Image from "next/image";
import { useState } from "react";

type Competence = {
    nom: string;
    srcImage?: string;
};

export default function Competence({ nom, srcImage }: Competence) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`p-4 rounded-2xl flex items-center w-fit transform transition duration-200 ease-in-out py-2 ${
                hover ? "bg-gray-300 scale-105" : "bg-gray-200 scale-100"
            } cursor-pointer`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {srcImage ? (
                <Image
                    src={`/logo/${srcImage}`}
                    alt={nom}
                    width={42}
                    height={42}
                />
            ) : (
                <div className="w-16 h-16 bg-gray-400 mx-auto rounded" />
            )}
            <h1 className="text-2xl text-black ml-4">{nom}</h1>
        </div>
    );
}
