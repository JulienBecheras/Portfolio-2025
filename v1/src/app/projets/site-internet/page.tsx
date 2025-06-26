import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function SiteInternet(){
    return (
        <div>
            <HeroImage text={"Site web"} categorie={"Projets"}/>
            <Image src={"/img/web.jpg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"2 semaines"} nbPersonne={"3 personnes"} language={["Html", "Css"]} competence={["Recherche détaillé sur internet", "Conception d'un wireframe", "Réalisation d'un site internet", "Passage à l'oral"]} name={"Site Web"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Durant ce projet, réalisé par un groupe de 3, notre objectif était de permettre à des élèves de 3ème d’acquérir des informations sur de grandes entreprises du secteur informatique. Ce site leur permettra donc d’avoir accès à des informations concernant ces entreprises dans un langage technique mais aussi suffisamment simple pour permettre la pleine compréhension des informations. Notre groupe s’est vu attribuer l’entreprise IBM."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Recherche</h1>
                <p className={"mx-20 text-black"}>{"Durant la première partie, nous avons dû réaliser des recherches afin de collecter des informations sur IBM. Pendant cette phase, nous avons parcouru l'entièreté du site IBM, mais aussi de nombreux sites annexes, complétant ainsi les informations récoltées sur cette entreprise. À la fin de cette partie, nous avons dû réaliser un compte rendu des différentes informations de l'entreprise, mais aussi sur sa transition écologique et les projets qu'elle met en place."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Wireframe</h1>
                <p className={"mx-20 text-black"}>{"Une fois l'ensemble des informations collectées, nous avons dû réaliser une maquette du site que nous souhaitions créer. Cette maquette nous a permis de commencer à mettre en forme notre site en créant les pages et les emplacements des éléments principaux. Tout cela afin d'avoir un plan clair de notre site et de réaliser la conception de manière plus structurée. Cette maquette nous permet aussi de voir les premières modifications à réaliser sur nos plans initiaux de notre site principal. Cette dernière nous oblige aussi à commencer une sélection des données acquises lors de la phase précédente afin de mettre en avant les plus utiles. Pour finir, cette maquette nous a permis de commencer à réfléchir à la répartition du travail pour la prochaine partie afin d'optimiser notre temps."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Réalisation</h1>
                <p className={"mx-20 text-black"}>{"C’est durant cette troisième partie que nous avons réalisé l’entièreté du site. Nous nous sommes réparti le travail : chacun avait une page à réaliser et une dernière page serait réalisée par la personne la plus rapide. Nous nous sommes donc lancés pleinement dans la programmation de ce site. Cependant, nos connaissances en HTML et CSS étaient récentes et encore fragiles. Ainsi, de nombreux aspects du site nous ont pris du temps à réaliser car il y avait des décalages importants entre notre vision et le résultat produit. À la fin de notre temps de réalisation de ce site, nous avons dû accélérer notre rythme de développement car nous avions pris du retard en comparaison de notre planning initial. Une de nos erreurs fut de ne pas mettre en commun nos règles de styles (fichier CSS) plus tôt dans la conception, ce qui nous a amenés à un rush final particulièrement stressant afin de rendre notre travail à temps."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Pour finir, nous sommes passés présenter notre site lors d’un oral afin d’en expliquer les choix graphiques et du contenu présenté. Suite à cela, nous avons pu recevoir divers retours nous permettant de voir nos réussites et nos éléments à modifier."}</p>
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