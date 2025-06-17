"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

type DisplayProject = {
    nom: string;
    srcImage: string;
    resume: string
    film?: boolean;
    url?: string;
}

export default function Project({ nom, srcImage, resume, film = false , url}: DisplayProject) {
    url = url ?? nom;
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`relative w-[30vw] h-[20vw] group overflow-hiddenn 
                ${ film ? "outline outline-customBlue outline-[1vw]" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link href={`/projets/${url.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="relative w-full h-full">
                    {/* Image avec overlay sombre au survol */}
                    <Image
                        src={`/img/${srcImage}`}
                        alt={nom}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                    />
                    <h3 className={` absolute inset-0 flex items-start justify-center text-white text-[2vw] transition-all duration-500 bg-black bg-opacity-40
                        ${ hover ? "items-start pt-4" : "items-center"}`}
                        style={{
                            background: "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)"
                        }}>
                        {nom}
                    </h3>
                    {/* Texte `<h4>` affiché au survol */}
                    <h4
                        className={`m-[1vw] absolute inset-0 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300 ${
                            hover ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {resume}
                    </h4>
                </div>
            </Link>
        </div>
    );
}