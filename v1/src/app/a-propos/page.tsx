"use client"

import HeroImage from "@/app/components/heroImage";
import Competence from "@/app/components/competence";
import DividerMountain from "@/app/components/divider";
import Image from "next/image";
import { useState } from "react";

export default function APropos(){
    const [hover, setHover] = useState(false);

    return (
        <div>
            <HeroImage text={"À Propos"}/>
            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Language de programmation </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10"}>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
            </div>
            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Outils </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10"}>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
            </div>

            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Compétence transversales </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10 mb-32"}>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue flex flex-col justify-center items-center py-32 mt-[-5px]"}>
                <div className="relative border-l-8 border-white pb-8 ml-8 pl-32 space-y-8 bg-customBlue">
                    <img
                        src="/forme/fleche.svg"
                        alt="flèche décorative"
                        className="absolute left-[-36.4px] -bottom-[124px] w-16 h-auto"
                    />
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <p className="text-white text-2xl">Premier paragraphe de ta timeline.</p>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <p className="text-white text-2xl">Deuxième paragraphe ici.</p>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <Image className="absolute -left-[224px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                        <p className="text-white text-2xl">Troisième contenu avec un rond sur la flèche.</p>
                    </div>
                </div>
                <div className={"flex mt-48 items-center justify-center gap-4"}>
                    <h2 className={"text-3xl"}>Pour plus d'information :</h2>
                    <a className={`bg-gray-400 rounded-2xl flex items-center justify-center cursor-pointer transition duration-200 ease-in-out ${hover ? "scale-105" : "scale-100"}`}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                       href={"/cv_master.pdf"}>
                        <h4 className={"text-3xl font-black m-3"}>mon CV</h4>
                        <img
                            src="/forme/livre.svg"
                            alt="mon cv"
                            className="w-12 h-auto mr-3"
                        />
                    </a>
                </div>
            </div>

        </div>
)
}