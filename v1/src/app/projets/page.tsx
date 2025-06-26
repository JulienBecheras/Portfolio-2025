"use client"

import HeroImage from "@/app/components/heroImage";
import Project from "@/app/components/project";
import DividerMountain from "@/app/components/divider";
import Footer from "@/app/components/footer";

export default function Projets(){
    return (
        <div>
            <HeroImage text={"Projets"}/>
            <div className={"flex flex-wrap justify-around items-center"}>
                <Project nom={"Algorithme de tri de dépêches"} srcImage={"network.jpg"} resume={"Durant une semaine nous avons travailler en binome afin de produire un algrythme visant à catégoriser des dépêches. Le but? Qu'il soit le plus rapide et fiable !"} url={"algorithme tri"}/>
                <Project nom={"Réalisation d'un site-internet"} srcImage={"web.svg"} resume={"En équipe de 3 notre but est de fournir un site web représentant de grandes entrprises. Notre public cible ? Les élève de 3ème afin de leurs permettre de se faire un avis sur leur choix d'orientation."} url={"site-internet"}/>
                <Project nom={"Extraction d'information d'une base de donées"} srcImage={"bd.jpg"} resume={"Nous sommes un duo de jeune adhérent d'une association qui lutte contre les accidents de la route. Notre mission? Consulter et trier une base de donnée en vue d'extraire des informations sur les personne de +65 ans en Nouvelle-Aquitaine."} url={"extraction bd"}/>
                <Project nom={"Création d'un modèle de données grace à SQL"} srcImage={"titanic.jpg"} resume={"Naufrage du Titanic : créer et modéliser une base de données grâce à SQL."} url={"bd titanic"}/>
                <Project nom={"StepByStep"} srcImage={"run.svg"} resume={"Réalisation d'une application évènementielle"}/>
                <Project nom={"GameJam"} srcImage={"game.jpg"} resume={"5 jours pour réaliser par groupe de 4 un jeu en Python"}/>
                <Project nom={"Terraforma"} srcImage={"terra.jpg"} resume={"Par équipe de 7, nous avons réaliser un serious game afin d'ameliorer le niveau de classes de 3ème en SVT"}/>
                <Project nom={"Picsou"} srcImage={"picsou.svg"} resume={"Projet stage en duo visant à la réalisation d'une application de gestion de dépenses au sein d'un groupe"}/>
                <Project nom={"Canada"} srcImage={"canada.jpg"} resume={"Ceci est le résumé de cette image"}/>
            </div>

            <DividerMountain rotation={-180}/>
            <div className={"bg-customBlue m-[-5px] pb-20"}>
                <h1 className={"ml-10 pt-12 text-4xl font-black"}>Projet actuellement en cours</h1>
                <div className={"flex justify-center items-center mt-10 m-20"}>
                    <Project nom={"Picsou"} srcImage={"picsou.svg"} resume={"Projet stage en duo visant à la réalisation d'une application de gestion de dépenses au sein d'un groupe"}/>
                    <p className={"text-white text-xl w-[60%] text-wrap m-20"}>{"Projet stage en duo visant à la réalisation d'une application de gestion de dépenses au sein d'un groupe. Nous sommes actuellement à la phase d'ajout des méthodes de remboursement simplifiés."}</p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}