import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function Terraforma(){
    return (
        <div>
            <HeroImage text={"Terraforma"} categorie={"Projets"}/>
            <Image src={"/img/terra.jpg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"6 semaines"} nbPersonne={"7 personnes"} language={["JavaScipt", "Php", "Html", "Css", "PostgreSQL", "Figma"]} competence={["Organisation et repartition d'équipe", "MVC", "Conduire du cadrage à la démonstration un projet Web"]} name={"Terraforma"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Ce projet a été réalisé par un groupe de 7 personnes. Il a été demandé d'imaginer, étudier, concevoir et implémenter une solution web permettant la réalisation d'un serious game dans le but de permettre à une classe appartenant au collège/lycée de progresser au sein d'une matière. Ce serious game doit impérativement se plier aux règles du RGPD. Au-delà d'un aspect uniquement ludo-éducatif, il doit permettre la gestion et le suivi des élèves par un professeur."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Cible et Objectifs</h1>
                <p className={"mx-20 text-black"}>{"Dans un premier temps, il a fallu déterminer la classe et la matière auxquelles s'adresse le serious game que nous voulions créer. Nous avons donc décidé de nous intéresser à une classe de 3ème en SVT. Cette classe doit réaliser l'épreuve du brevet en fin d'année, d'où la pertinence d'un jeu ludo-éducatif. Après une analyse des jeux existants, nous avons souhaité réaliser un jeu collaboratif afin de permettre une cohésion au sein de la classe entre élèves de différents niveaux. Le but : l'entraide et non l'assistanat, avec un joueur qui pourrait réaliser seul le jeu à la place des autres. Pour cela, nous avons imaginé une planète évolutive en fonction des résultats de questionnaires où chaque élève membre de la planète doit obligatoirement obtenir un score assez élevé afin de faire évoluer visuellement cette planète. Afin de confirmer notre projet, nous avons donc dû vendre notre idée devant un jury."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conception</h1>
                <p className={"mx-20 text-black"}>{"Une fois notre thème et notre public cible trouvés, il a fallu réaliser la partie cadrage et conception du projet. Au sein de notre équipe, 6 élèves provenaient du parcours \"réalisation d'application\" et 1 provenait du parcours \"communication et sécurisation de données\". Nous avons chacun, par domaine de compétence, cherché les technologies existantes permettant de réaliser ce projet. Une fois l'étude des technologies réalisée, il a fallu passer à la partie conception du modèle de données ainsi que des différents contrôleurs et vues qui seront par la suite réalisés. Durant cette partie, chaque personne s'est occupée d'un domaine particulier. Afin de réaliser des quiz pertinents, il a fallu réaliser une banque de données avec des quiz adaptés à chaque chapitre du programme (représenté par des continents sur la planète)."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Développement</h1>
                <p className={"mx-20 text-black"}>{"Enfin, nous avons implémenté notre solution web durant 3 semaines. Nous avons réalisé un système de connexion et de création de compte enseignant, lui permettant la création de comptes élèves répartis au sein de groupes facilement modifiables. L'interface se veut simple d'utilisation et compréhensible. Pour permettre cela, nous avons pris en compte les critères de Bastien et Scapin. À la fin du temps imparti, la création et la gestion de compte étaient totalement fonctionnelles, de même que le suivi de chaque élève. Il était possible de jouer à des quiz permettant, grâce à un algorithme de répartition des points, de faire évoluer de manière graphique la planète 3D réalisée avec Three.js, une bibliothèque JavaScript, en fonction des résultats de l'équipe. Nous avons finalement réalisé des tests utilisateurs afin de permettre l'évaluation des problèmes d'interface pouvant subsister au sein de notre solution web."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Pour finir nous avons présenté et réalisé une démonstration de notre solution WEB devant un jury"}</p>
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