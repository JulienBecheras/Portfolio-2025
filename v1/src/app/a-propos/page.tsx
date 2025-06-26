"use client"

import HeroImage from "@/app/components/heroImage";
import Competence from "@/app/components/competence";
import DividerMountain from "@/app/components/divider";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/app/components/footer";

export default function APropos(){
    const [hover, setHover] = useState(false);

    return (
        <div>
            <HeroImage text={"À Propos"}/>
            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Languages de programmation </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10"}>
                <Competence nom={"Python"} srcImage={"python.svg"}/>
                <Competence nom={"SQL"} srcImage={"sql.svg"}/>
                <Competence nom={"Java"} srcImage={"java.svg"}/>
                <Competence nom={"JavaScript"} srcImage={"js.svg"}/>
                <Competence nom={"C"} srcImage={"c.svg"}/>
                <Competence nom={"PostgreSQL"} srcImage={"postgres.svg"}/>
                <Competence nom={"C++"} srcImage={"c++.svg"}/>
                <Competence nom={"Html"} srcImage={"html.svg"}/>
                <Competence nom={"CSS"} srcImage={"css.svg"}/>
                <Competence nom={"Json"} srcImage={"json.svg"}/>
                <Competence nom={"PHP"} srcImage={"php.svg"}/>
                <Competence nom={"Symfony"} srcImage={"symfony.svg"}/>
                <Competence nom={"Kotlin"} srcImage={"kotlin.svg"}/>
                <Competence nom={"TypeScript"} srcImage={"tsx.svg"}/>
                <Competence nom={"Rust"} srcImage={"rust.svg"}/>
                <Competence nom={"Bash"} srcImage={"bash.svg"}/>
                <Competence nom={"Dart"} srcImage={"dart.svg"}/>
            </div>
            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Outils </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10"}>
                <Competence nom={"Git"} srcImage={"git.svg"}/>
                <Competence nom={"GitHub"} srcImage={"github.svg"}/>
                <Competence nom={"GitLab"} srcImage={"gitlab.svg"}/>
                <Competence nom={"Visual Studio Code"} srcImage={"vsc.svg"}/>
                <Competence nom={"Visual Studio"} srcImage={"vs.svg"}/>
                <Competence nom={"WebStorm"} srcImage={"webStorm.svg"}/>
                <Competence nom={"Intellij"} srcImage={"intellij.svg"}/>
                <Competence nom={"Figma"} srcImage={"figma.svg"}/>
                <Competence nom={"Canva"} srcImage={"canva.svg"}/>
                <Competence nom={"AndroidStudio"} srcImage={"androidStudio.svg"}/>
                <Competence nom={"Next.Js"} srcImage={"next.svg"}/>
                <Competence nom={"NodeJs"} srcImage={"node.svg"}/>
                <Competence nom={"Flutter"} srcImage={"flutter.svg"}/>
                <Competence nom={"Cypress"} srcImage={"cypress.svg"}/>
                <Competence nom={"Docker"} srcImage={"docker.svg"}/>
                <Competence nom={"AzureCloud"} srcImage={"azure.svg"}/>
                <Competence nom={"Android"} srcImage={"android.svg"}/>
                <Competence nom={"Linux"} srcImage={"linux.svg"}/>
            </div>

            <div>
                <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Compétences transversales </h1>
            </div>
            <div className={"flex flex-wrap justify-center gap-4 m-10 mb-32"}>
                <Competence nom={"Rigoureux"} srcImage={"work.svg"}/>
                <Competence nom={"Curieux"} srcImage={"loupe.svg"}/>
                <Competence nom={"Organisé"} srcImage={"folder.png"}/>
                <Competence nom={"Esprit critique"} srcImage={"question.svg"}/>
                <Competence nom={"Créatif"} srcImage={"art.svg"}/>
                <Competence nom={"Exigeant"} srcImage={"diamond.svg"}/>
                <Competence nom={"Autonome"} srcImage={"codeur.svg"}/>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue flex flex-col justify-center items-center py-20 mt-[-5px] px-96"}>
                <h2 className={"text-5xl font-black pb-12"}>Mon parcours</h2>
                <div className="relative border-l-8 border-white pb-8 ml-8 pl-32 space-y-8 bg-customBlue">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/forme/fleche.svg"
                        alt="flèche décorative"
                        className="absolute left-[-36.4px] -bottom-[124px] w-16 h-auto"
                    />
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2006 - 2013 / Talencieux 07340"}</h3>
                            <p className="text-white text-2xl">{"Ecole privée Saint Joseph"}</p>
                        </div>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2013 - 2017 / Annonay 07300 / Brevet des collège mention \"Très bien\""}</h3>
                            <p className="text-white text-2xl">{"Collège Notre-Dame"}</p>
                        </div>
                        <Image className="absolute -left-[224px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <Image className="absolute -left-[224px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2017 - 2020 / Annonay 07300 / Baccalauréat Physique - Math | mention \"Bien\""}</h3>
                            <p className="text-white text-2xl">{"Lycée Saint-Denis"}</p>
                        </div>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2020 - 2021 / Valence 26000"}</h3>
                            <p className="text-white text-2xl">{"Classe préparatoire aux Grandes Ecoles Math - Physique - Sience de l'Ingénieur (MPSI) | Camille Vernet"}</p>
                        </div>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2021 - 2022 / Grenoble 38000"}</h3>
                            <p className="text-white text-2xl">{"1ère année - Bachelor Universitaire de Technologie (BUT) Informatique - IUT2 Université Grenoble Alpes (UGA)"}</p>
                        </div>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <Image className="absolute -left-[224px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2023 - 2024 / Grenoble 38000 / Diplome Universitaire de Technologie (DUT) Informatique"}</h3>
                            <p className="text-white text-2xl">{"2ème année - Bachelor Universitaire de Technologie (BUT) Informatique - IUT2 Université Grenoble Alpes (UGA)"}</p>
                        </div>
                    </div>
                    <div className="relative py-6">
                        <div className="absolute -left-[156px] top-6 w-12 h-12 rounded-full bg-white border-4 border-customBlue" />
                        <Image className="absolute -left-[224px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                        <Image className="absolute -left-[290px] top-6" src={"/forme/etoile.svg"} alt={"etoile"} width={52} height={12} />
                        <div>
                            <h3 className={"text-2xl font-black"}>{"2024 - 2025 / Chicoutimi CANADA / Bachelor Universitaire de Technologie (BUT) Informatique - Baccalauréat Informatique (Canada)"}</h3>
                            <p className="text-white text-2xl">{"3ème année - Bachelor Universitaire de Technologie (BUT) Informatique - Echange universitaire avec une double diplomation à l'Université du Quebec à Chicoutimi (UQAC)"}</p>
                        </div>
                    </div>
                </div>
                <div className={"flex mt-48 items-center justify-center gap-4"}>
                    <h2 className={"text-3xl"}>{"Pour plus d'informations :"}</h2>
                    <a className={`bg-gray-400 rounded-2xl flex items-center justify-center cursor-pointer transition duration-200 ease-in-out ${hover ? "scale-105" : "scale-100"}`}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                       href={"/cv_master.pdf"}>
                        <h4 className={"text-3xl font-black m-3"}>mon CV</h4>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/forme/livre.svg"
                            alt="mon cv"
                            className="w-12 h-auto mr-3"
                        />
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
)
}