import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function Titanic(){
    return (
        <div>
            <HeroImage text={"Titanic"} categorie={"Projets"}/>
            <Image src={"/img/titanic.jpg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"1.5 semaines"} nbPersonne={"2 personnes"} language={["SQL"]} competence={["Réaliser des recherches précises", "Concevoir un SEA", "Questionner une base de données", "Peupler une base de données"]} name={"Titanic"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Le but de ce projet était de modéliser une base de données en SQL, mettant en évidence les facteurs influençant les chances de survie des passagers à bord du Titanic. Ce projet a été réalisé par un groupe de 2 personnes."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Recherche</h1>
                <p className={"mx-20 text-black"}>{"Pour commencer ce projet, nous avons dû réaliser un travail de recherche sur cette tragédie afin de nous imprégner pleinement des différents éléments et de comprendre tout en apportant du sens à chaque paramètre que nous allions étudier. Une fois ce travail de recherche effectué, nous avons dû réaliser le modèle entité-association (MEA) du projet. Cette partie fut sûrement la plus complexe car nous étions assez libres et fournir le schéma exact attendu nous a semblé complexe au vu de la différence d'interprétation de certaines contraintes."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Base de données</h1>
                <p className={"mx-20 text-black"}>{"Durant cette deuxième partie, nous avons dû créer notre base de données à partir de notre schéma précédemment réalisé. Ainsi, nous avons dû créer toutes les tables avec les contraintes nécessaires en SQL. Une fois tout ce travail réalisé, nous avons peuplé nos tables grâce à un fichier de données sous format CSV qui nous était fourni. Cette partie fut assez rapide même si quelques erreurs de débutants nous ont suivis et ralentis tout au long du projet."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Requêtes SQL</h1>
                <p className={"mx-20 text-black"}>{"Une fois les tables créées et peuplées, nous avons commencé à réaliser des requêtes SQL permettant d’interroger la base et ainsi faire ressortir certaines données mettant en lumière les informations nécessaires à notre étude. Une fois l’entièreté des requêtes réalisée, il nous a fallu rendre un document réponse avec les requêtes et les réponses que l’on avait obtenues."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Ainsi, lors de ce projet, nous avons pu découvrir de nombreuses facettes de cette tragédie historique tout en mettant en œuvre nos compétences afin de réaliser une étude correcte des paramètres qui ont joué sur les chances de survie des naufragés."}</p>
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