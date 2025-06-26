import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function GameJam(){
    return (
        <div>
            <HeroImage text={"GameJam"} categorie={"Projets"}/>
            <Image src={"/img/game.jpg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"5 jours"} nbPersonne={"4 personnes"} language={["Python", "Pygame"]} competence={["Apprentissage dans un temps limité", "Réalisaion dans un temps court", "Inventivité"]} name={"GameJam"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Le projet de GameJam que j'ai réalisé était destiné à permettre d'apprendre le langage Python au sein d'un envrionneùent de concours dans le but de réaliser un jeu par équipe de 4 en 5 jours."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Objectifs</h1>
                <p className={"mx-20 text-black"}>{"Dans un temps limité il nous a été demandé de réaliser un jeu sur le thème \"le monde merveilleux de l'IUT\". Ce jeu a donc du être réalis sur un temps extrêmement limité. Il a fallut apprendre le language Python ainsi que l'utilisation de le librairie Pygame, imaginer, concevoir et implémenter un jeu fonctionnel. Moi ety mon équipe avons donc choisi de modéliser une map ressemblant à notre IUT ou le joueur devait parcourir les différentyes salle et réaliser differnets minJeu afin de monter en compétence. Ce système de sompétence devait se rapprocher du système de Ressources, notation de notre IUT. La prticularité du héro incarné par le joueur était son appartennance à une autre planète. Ici le but état donc qu'il monte en compétences afin de pouvoir réparer son vaisseau qui s'était écrasé devant l'IUT."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Développement</h1>
                <p className={"mx-20 text-black"}>{"Suite à 4 jours de réalisation il a fallut réaliser une démonstration de notre jeu devant un jury composé de professeurs et d'élèves."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Cette expérience m'a permis de développer une vision d'optimisation du temps afin de hiérarchiser l'importance des attendus. Malgrès le temps très limité ainsi que notre besoin de fprùation sur la tehnologie nous avons pu réaliser une démonstration fonctionnelle, cette expérience intense nous a aussi permis de vivre un scénario de rush."}</p>
            </div>
            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue px-20 mt-[-5px] py-10"}>
                <h1 className={"text-white font-black text-4xl pb-10"}>Mes autres projets</h1>
                <div className={"flex justify-around items-center"}>
                    <Project nom={"Canada"} srcImage={"canada.jpg"} resume={"Durant un an j'ai pu partir à la découverte du Quebèc grace à un échange universitaire en BUT3 au sein de l'UQAC menant à une double diplomation"}/>
                    <Project nom={"Picsou"} srcImage={"picsou.svg"} resume={"Projet stage en duo visant à la réalisation d'une application de gestion de dépenses au sein d'un groupe"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}