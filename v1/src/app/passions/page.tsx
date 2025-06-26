"use client"

import HeroImage from "@/app/components/heroImage";
import DividerMountain from "../components/divider";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Project from "@/app/components/project";

export default function Passions(){
    return (
        <div>
            <HeroImage text={"Passions"}/>
            <h1 className={"font-black text-4xl text-black ml-10"}>Sports</h1>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"flex justify-center items-center m-16"}>
                    <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Basket</h2>
                        <p className={"text-black text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Boxe</h2>
                        <p className={"text-black text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                    </div>
                    <Image src={"/img/ISS.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Ski</h2>
                        <p className={"text-black text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Randonnée</h2>
                        <p className={"text-black text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                    </div>
                    <Image src={"/img/ISS.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                </div>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue m-[-5px] pt-10"}>
                <h1 className={"text-white font-black text-4xl ml-10"}>Spatiale</h1>
                <p className={"m-16"}>{"Passionné par l'espace depuis plus de 6 ans j'adore suivre activement les avancées, théories, missions mais aussi hypothétique projets liés à ce domaine. Ce vaste monde dans lequel nous évoluons et dont nous ne connaissons qu'une infime partie et aussi passionant que boulversant. Les projets d'exploration spatial sont l'aboutissement de nombreuses connaissance acquises par l'humanité. Son accès y est aussi difficile que les informations collectés sont cruciales et gratifiantes. Ce domaine est voué à de nombreuses découvertes qui devraient boulverser notre vision du monde qui nous entoure."}</p>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>ESA</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>NASA</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>CNSA</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>James Web Telescope</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>Perseverance</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>SpaceX</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>HyPrSpace</h2>
                                <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                            </div>
                            <p className={"text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                        </div>
                    </div>
                </div>
            </div>
            <DividerMountain/>
            <div>
                <h1 className={"text-black font-black text-4xl ml-10"}>Les nouvelles technologies</h1>
                <div className={"flex justify-center items-center m-16"}>
                    <Image src={"/img/ISS.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <div className={"flex items-center mb-4"}>
                            <h2 className={"text-2xl font-extrabold text-black"}>HyPrSpace</h2>
                            <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                        </div>
                        <p className={"text-xl text-black"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau."}</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center"}>
                    <h2 className={"text-2xl font-extrabold text-black"}>Ma dernière découverte : </h2>
                    <Link href={"https://www.lynx-r.com/en-fr"} className={"text-black font-extrabold text-2xl border-b-2 border-solid border-black mx-16"}>LINX</Link>
                </div>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue mt-[-5px] pt-10"}>
                <div className={"flex"}>
                    <h1 className={"font-black text-4xl mr-6 ml-10"}>Mon année au Canada</h1>
                    <Image src={"/img/ISS.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-2xl"}/>
                </div>
                <p className={"ml-16 py-12"}>hsgqfsgdf jsdgf jsdgfj sqkdgfjk sqdgf qsdgkf sgkdfqsg dfjgqsdfg jsqgd sddfjgsd dfgqsdf sjfg jsqdgfjs dfsd</p>
                <div className={"flex justify-center items-center pb-20"}>
                    <h2 className={"text-2xl font-black pr-28"}>Retrouver mon projet en détail : </h2>
                    <Project nom={"Canada"} srcImage={"ISS.jpg"} resume={"Durant un an j'ai pu partir à la découverte du Quebèc grace à un échange universitaire en BUT3 au sein de l'UQAC menant à une double diplomation"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}