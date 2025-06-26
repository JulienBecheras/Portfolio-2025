"use client"

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

type info = {
    duration: string;
    nbPersonne: string;
    language: string[];
    competence: string[];
    name: string;
    urlFigma?: string;
    urlDoc?: string;
    urlGithub?: string;
    urlDownload?: string;
}
export default function QuickInfo({duration, nbPersonne, language, competence, name, urlFigma, urlDoc, urlDownload, urlGithub}: info) {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    return (
        <div className={"bg-gray-400 shadow-gray-700 shadow-md"}>
            <h1 className={"text-black text-4xl font-black pl-16 pt-6"}>Informations clefs</h1>
            <div className={"flex items-center w-full px-20 justify-between flex-wrap"}>
                <div className={"flex flex-col items-center justify-center my-[10vh]"}>
                    <div className={"flex justify-center items-center pb-6"}>
                        <Image src={"/forme/time.svg"} alt={"Durée"} width={32} height={32}/>
                        <h2 className={"text-black font-semibold pl-6"}>{duration}</h2>
                    </div>
                    <div className={"flex justify-center items-center pb-6"}>
                        <Image src={"/forme/user.svg"} alt={"Nombre de participant"} width={32} height={32}/>
                        <h2 className={"text-black font-semibold pl-6"}>{nbPersonne}</h2>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <Image src={"/forme/language.svg"} alt={"Language"} width={32} height={32}/>
                        <ul className={"list-disc pl-10"}>
                            {language.map((lang: string, index: number) => (
                                <li key={index} className={"text-black font-semibold"}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={"flex flex-col items-start justify-center my-[10vh]"}>
                    <div className={"flex justify-center items-center pb-6"}>
                        <Image src={"/forme/cube.svg"} alt={"Compétences"} width={32} height={32}/>
                        <ul className={"list-disc pl-10"}>
                            {competence.map((comp: string, index: number) => (
                                <li key={index} className={"text-black font-semibold"}>{comp}</li>
                            ))}
                        </ul>
                    </div>
                    {urlFigma && (<Link href={urlFigma} className={"flex justify-center items-center pb-6"}>
                        <Image src={"/forme/paint.svg"} alt={"Wireframe"} width={32} height={32}/>
                        <h2 className={"text-black font-semibold border-b-2 border-black ml-6"}>{"Wireframe"}</h2>
                    </Link>)}
                    {urlDoc && (<Link href={urlDoc} className={"flex justify-center items-center"}>
                        <Image src={"/forme/doc.svg"} alt={"Documentation"} width={32} height={32}/>
                        <h2 className={"text-black font-semibold border-b-2 border-black ml-6"}>{"Documentation"}</h2>
                    </Link>)}
                </div>
                <div className={"flex flex-col items-center justify-between gap-10 w-max[30%] my-[10vh]"}>
                    {urlGithub && (<Link href={urlGithub} className={`flex justify-center items-center bg-customBlue rounded-3xl ${hover ? "scale-105" : "scale-100"}`}
                         onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}>
                        <h2 className={"text-white text-xl font-black p-4 pl-6"}>{name}</h2>
                        <Image src={"/forme/github.svg"} alt={"Github"} width={46} height={46} className={"pr-4"}/>
                    </Link>)}
                    {urlDownload && (<Link href={urlDownload} className={`flex justify-center items-center bg-customBlue rounded-3xl ${hover2 ? "scale-105" : "scale-100"}`}
                       onMouseEnter={() => setHover2(true)}
                       onMouseLeave={() => setHover2(false)}>
                        <h2 className={"text-white text-xl font-black p-4 pl-6"}>{name}</h2>
                        <Image src={"/forme/download.svg"} alt={"Download"} width={46} height={46} className={"pr-4"}/>
                    </Link>)}
                </div>
            </div>
        </div>
    );
}