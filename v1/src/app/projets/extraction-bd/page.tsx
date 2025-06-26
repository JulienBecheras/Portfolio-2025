import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function ExtractionBD(){
    return (
        <div>
            <HeroImage text={"Extraction de données"} categorie={"Projets"}/>
            <Image src={"/img/bd.jpg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"2 semaines"} nbPersonne={"2 personnes"} language={["SQL", "R"]} competence={["Interpreter un résultat", "Analyser les éléments essentiels d'une base de données", "Extraire sous le format csv", "Réaliser des graphes"]} name={"Extraction données"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Pour ce projet, le contexte était qu’en tant que deux jeunes d’une association, nous souhaitions sensibiliser aux dangers routiers. Afin de mener à bien notre mission, nous avions en notre possession une base de données officielle d’accidents réalisés en France allant de 2005 à 2021. Cette base de données a été réalisée par des officiers de police durant cette période. Chaque duo s’est vu attribuer des domaines de recherche plus précis afin de mener une campagne plus précise. Nous avons donc eu à réaliser une étude pour les personnes de plus de 65 ans dans la région Nouvelle-Aquitaine."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Nettoyage BD</h1>
                <p className={"mx-20 text-black"}>{"Pendant cette première partie, nous avons en premier lieu commencé par examiner la base de données fournie ainsi que les différents attributs la constituant. Suite à ce premier examen, nous avons pu remarquer que la base de données comportait parfois des erreurs de saisie mais aussi une différence de format pour certains attributs. Nous avons donc dû nettoyer cette base de données afin de créer des tables SQL comportant les différentes informations nécessaires à notre étude, tout en supprimant celles qui ne nous concernaient pas. Durant cette partie, nous avons été aidés par le sujet qui nous a guidés afin de mener à bien ce processus. Une fois les tables contenant les informations désirées, il a fallu les exporter sous un format CSV afin que ces données puissent être utilisées en R."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Interprétation des données</h1>
                <p className={"mx-20 text-black"}>{"Une fois le tri et l’extraction de données réalisés en SQL, il a fallu observer ces données et créer des paramètres intéressants afin de créer des graphiques en langage R. Ces graphiques devaient apporter des informations correctes et pertinentes pour notre cas d’étude. Cependant, il nous a vite semblé qu’il manquait un certain nombre de données essentielles afin de produire des graphiques pertinents. Nous avons notamment regretté qu’il n’y ait pas de données sur le nombre d’usagers total par tranche d'âge, cette inconnue nous empêchant un grand nombre d’analyses pertinentes. Il y a donc eu un long travail de recherche mais aussi d’apprentissage car le R est un langage dans lequel nous avons que très peu de connaissances et d’affinités, mon binôme et moi. Une fois ce travail de création de graphiques, nous avons généré un PDF contenant ces graphiques ainsi que leur analyse en anglais."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Ainsi, au cours de ce projet, nous avons trié, transformé, extrait et analysé une base de données afin de produire un compte rendu complet en anglais ayant pour but de sensibiliser les personnes de plus de 65 ans dans la région Nouvelle-Aquitaine aux risques auxquels elles sont le plus exposées sur la route."}</p>
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