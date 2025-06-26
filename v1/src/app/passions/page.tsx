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
                    <Image src={"/img/bcna.png"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Basket</h2>
                        <p className={"text-black text-xl"}>{"Durant 12 ans j'ai pratiquer ce sport au sein du Basket Club Nord Ardèche (BCNA). J'ai ainsi pu évoluer à différents poste mais également différents niveau. J'ai ainsi développer mon esprit d'equipe mais également le sens de la stratégie ainsi que le dépassement de soi. La pandémie de covid-19 a stoppé mon activité mais je suis toujours activement les franchises NBA des Spurs, avec nottament Victor Wembanyama, ou encore les Lakers."}</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Boxe</h2>
                        <p className={"text-black text-xl"}>{"Durant un an j'ai également pu m'investir au sein d'un club de boxe française me permettant de découvrir ce sport que j'ai grandement apprécié. Après un an de pause suite à mon échange universitaire au Canada je compte poursuivre cette aventure."}</p>
                    </div>
                    <Image src={"/img/gbf.png"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl bg-customBlue"}/>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <Image src={"/img/ski.jpg"} alt={"Photo ski"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Ski</h2>
                        <p className={"text-black text-xl"}>{"Le ski est une passion que j'ai depuis l’enfance. J’ai toujours aimé la sensation de liberté qu’il procure ainsi que l'adrenaline de sport dde glisse. Récemment, j’ai eu la chance de passer un an au Québec, où j’ai découvert des conditions de glisse exceptionnelles sur des pistes enneigées pendant des mois. Cette expérience m’a aussi permis d’explorer une nouvelle pratique : le ski de randonnée, qui m’a offert une autre dimension du sport, mêlant effort physique, dépassement de soi et aventure en pleine nature. Ces moments sur les skis restent pour moi parmi les plus marquants, autant sur le plan sportif que personnel."}</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center m-16"}>
                    <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                        <h2 className={"text-black text-2xl mb-4 font-extrabold"}>Randonnée</h2>
                        <p className={"text-black text-xl"}>{"Durant mon séjour au Québec j'ai pu développer une nouvelle passion pour la randonnée. J'ai ainsi pu explorer les montagnes aux couleurs flamboyantes de l'automne Canadien ou bien explorer les forets recouvertes d'un manteau neigeux grace à des raquettes."}</p>
                    </div>
                    <Image src={"/img/automne.jpg"} alt={"Photo randonnée"} width={300} height={300} className={"rounded-3xl"}/>
                </div>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue m-[-5px] pt-10"}>
                <h1 className={"text-white font-black text-4xl ml-20"}>Spatiale</h1>
                <p className={"mx-32 mt-12 text-xl"}>{"Passionné par l'espace depuis plus de 6 ans j'adore suivre activement les avancées, théories, missions mais aussi hypothétique projets liés à ce domaine. Ce vaste monde dans lequel nous évoluons et dont nous ne connaissons qu'une infime partie et aussi passionant que boulversant. Les projets d'exploration spatial sont l'aboutissement de nombreuses connaissance acquises par l'humanité. Son accès y est aussi difficile que les informations collectés sont cruciales et gratifiantes. Ce domaine est voué à de nombreuses découvertes qui devraient boulverser notre vision du monde qui nous entoure."}</p>
                <div className={"flex flex-col justify-center items-center"}>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/esa.png"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>ESA</h2>
                                <Image src={"/img/euro.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                            </div>
                            <p className={"text-xl"}>{"L’ESA (Agence spatiale européenne) est l’organisation intergouvernementale chargée de coordonner les activités spatiales des pays européens. Elle mène des missions scientifiques, d’observation de la Terre, de télécommunications et d’exploration spatiale. L’ESA collabore régulièrement avec la NASA, SpaceX et d’autres agences pour développer des technologies avancées, comme les satellites, les sondes interplanétaires ou les modules de station spatiale. Elle joue un rôle clé dans l’exploration de l’espace et le progrès scientifique européen."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>NASA</h2>
                                <Image src={"/img/usa.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                            </div>
                            <p className={"text-xl"}>{"La NASA (National Aeronautics and Space Administration) est l’agence spatiale des États-Unis, créée en 1958. Elle est à l’origine de grandes avancées dans l’exploration spatiale, comme les missions Apollo sur la Lune, les télescopes spatiaux comme Hubble, ou les robots envoyés sur Mars comme Perseverance. La NASA joue un rôle clé dans la recherche scientifique, le développement technologique et la préparation de futures missions habitées vers la Lune et Mars."}</p>
                        </div>
                        <Image src={"/img/nasa.svg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/cnsa.png"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>CNSA</h2>
                                <Image src={"/img/chine.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                            </div>
                            <p className={"text-xl"}>{"La CNSA est l’agence spatiale chinoise, chargée de planifier et de mener les missions spatiales du pays. Elle s’est imposée comme un acteur majeur de la conquête spatiale grâce à des projets ambitieux : l’exploration lunaire avec le programme Chang’e, l’envoi de sondes vers Mars comme Tianwen-1, ou encore la construction de sa propre station spatiale, Tiangong. La CNSA symbolise l’essor technologique de la Chine dans l’espace et sa volonté de rivaliser avec les grandes agences comme la NASA ou l’ESA."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>James Web Telescope</h2>
                                <div className={"flex items-center justify-center gap-4"}>
                                    <Image src={"/img/usa.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                                    <Image src={"/img/euro.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                                </div>
                            </div>
                            <div>
                                <p className={"text-xl"}>{"JWST est un téléscope envoyé le 25 décembre 2021 à bord d'une fusée européenne Ariane 5. Voici quelques un de ses objectifs : "}</p>
                                <ul className={"list-disc pl-10"}>
                                    <li className={"text-xl"}>{"rechercher les premières étoiles et galaxies qui sont apparues dans l'Univers après le Big Bang"}</li>
                                    <li className={"text-xl"}>{"déterminer comment les galaxies évoluent, de leur formation jusqu'à nos jours"}</li>
                                    <li className={"text-xl"}>{"observer la formation des étoiles depuis les premières étapes jusqu'à la formation des systèmes planétaires"}</li>
                                    <li className={"text-xl"}>{"mesurer les caractéristiques physiques et chimiques des systèmes planétaires, y compris le Système solaire, et rechercher les composants nécessaires à l'apparition de la vie dans l'atmosphère des exoplanètes."}</li>
                                </ul>
                            </div>
                        </div>
                        <Image src={"/img/jwst.png"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/perseverance.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>Perseverance</h2>
                                <div className={"flex items-center justify-center gap-4"}>
                                    <Image src={"/img/usa.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                                    <Image src={"/img/euro.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl"}/>
                                </div>
                            </div>
                            <p className={"text-xl"}>{"Perseverance est le robot marsien de la NASA envoyé le 30 juillet 2020 afin de récolté des échantillons de la planète rouge. Cependant ce rover n'est pas seul il a avec lui un démonstrateur de vol qui n'est rien d'autre qu'un petit hélicoptère dénommé Ingenuity."}</p>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <div className={"flex flex-col justify-center w-[60%] mr-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>SpaceX</h2>
                                <Image src={"/img/usa.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                            </div>
                            <p className={"text-xl"}>{"Veritable pionnière du \"New Space\", SpaceX ne cesse de faire parler d'elle. Première à croire en une technologie permettant de récupérer ses lanceurs grace à un type de moteur novateur ainsi que des algorithmes de vol révolutionnaires. Alors que cette entreprise à était beaucoup décriée au début des années 2010 elle est aujourd'hui sans conteste en avance de plusieurs années sur tous ses concurrents. Aujourd'hui l'entreprise continue d'innover nottament avec ce qui devrait être une nouvelle révolution dans le monde spatial avec leurs nouveau projet nommée \"Starship\"."}</p>
                        </div>
                        <Image src={"/img/hotstagging.jpg"} alt={"Photo Boxe"} width={300} height={300} className={"rounded-3xl"}/>
                    </div>
                    <div className={"flex justify-center items-center m-16"}>
                        <Image src={"/img/ob1.jpg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                        <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                            <div className={"flex items-center mb-4"}>
                                <h2 className={"text-2xl font-extrabold"}>HyPrSpace</h2>
                                <Image src={"/img/fr.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                            </div>
                            <p className={"text-xl"}>{"HyPrSpace est une start-up française spécialisée dans les lanceurs spatiaux hybrides. Elle développe Baguette One, un micro-lanceur innovant conçu pour envoyer de petits satellites en orbite. Sa propulsion hybride, combinant carburant solide et oxydant liquide, offre une solution plus simple, plus sûre et plus économique que les moteurs traditionnels. Avec ce projet, HyPrSpace vise à rendre l’accès à l’espace plus accessible, tout en s’inscrivant dans une dynamique européenne d’innovation et de souveraineté spatiale."}</p>
                        </div>
                    </div>
                </div>
            </div>
            <DividerMountain/>
            <div>
                <h1 className={"text-black font-black text-4xl ml-10"}>Les nouvelles technologies</h1>
                <p className={"text-xl font-semibold text-black m-10 mx-20"}>{"Passionné par les nouvelles technologies, j'aime explorer et découvrir toutes sortes de nouveautés, allant du gadget peu utile à des projets qui révolutionneront notre manière de vivre. Afin d'assouvir cette curiosité pour les nouvelles technologies, je m'informe et me divertis notamment avec un média dédié à la tech qui se nomme Underscore."}</p>
                <div className={"flex justify-center items-center m-16"}>
                    <Image src={"/img/tokamac.jpeg"} alt={"Photo Basket"} width={300} height={300} className={"rounded-3xl"}/>
                    <div className={"flex flex-col justify-center w-[60%] ml-16"}>
                        <div className={"flex items-center mb-4"}>
                            <h2 className={"text-2xl font-extrabold text-black"}>Nouveau record de durée pour le plasma</h2>
                            <Image src={"/img/fr.png"} alt={"photo iss"} width={50} height={50} className={"rounded-3xl ml-4"}/>
                        </div>
                        <p className={"text-xl text-black"}>{"Le tokamak WEST, à Cadarache, a maintenu un plasma de fusion à plus de 50 millions de degrés pendant 22 minutes (1337 secondes) le 12 février 2025, un record mondial, marquant une amélioration de 25% par rapport au précédent record chinois. Ce jalon est crucial pour la maîtrise à long terme du plasma, étape clé avant le lancement d’ITER."}</p>
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
                    <Image src={"/img/canada.jpg"} alt={"photo iss"} width={50} height={50} className={"rounded-2xl"}/>
                </div>
                <p className={"ml-16 py-12 text-xl"}>{"Durant ma 3ème année de BUT j'ai pu dans le cadre d'un échange universitaire entre l'IUT2 Grenoble et l'Université du Quebec à Chicoutimi (UQAC), réaliser ma dernière année de formation au Canada. Durant cette année j'ai pu recevoir la double diplomation avec mon BUT Informatique ainsi que l'équivalent Canadien: le Baccalauréat Informatique. J'ai pu découvrir une culture nouvelle ainsi qu'une méthodologie de travail différentes de ce que j'avais connu jusqu'à présent. Dans un pays étranger, j'ai du réaliser le démarche nécessaire afin que mon année se déroule bien ce qui ma grandement aidé à prendre en responsabilité."}</p>
                <div className={"flex justify-center items-center pb-20"}>
                    <h2 className={"text-2xl font-black pr-28"}>Retrouver mon projet en détail : </h2>
                    <Project nom={"Canada"} srcImage={"canada.jpg"} resume={"Durant un an j'ai pu partir à la découverte du Quebèc grace à un échange universitaire en BUT3 au sein de l'UQAC menant à une double diplomation"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}