import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import QuickInfo from "@/app/components/quickInfo";
import DividerMountain from "@/app/components/divider";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";

export default function Stepbystep(){
    return (
        <div>
            <HeroImage text={"StepByStep"} categorie={"Projets"}/>
            <Image src={"/img/run.svg"} alt={"photo projet picsou"} width={0} height={0} sizes="100vw" className={"w-full h-auto -mt-[14vw] relative -z-20"}/>
            <QuickInfo duration={"3 semaines"} nbPersonne={"4 personnes"} language={["Java", "XML"]} competence={["Organisation et repartition d'équipe", "Présentation et marketing d'un projet", "MVC"]} name={"Step By Step"}/>
            <div className={"mb-16"}>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Introduction</h1>
                <p className={"mx-20 text-black"}>{"Durant ce projet, il nous a été demandé de réaliser par groupe de 4 personnes une application en Java/JavaFX. Nous avons eu plusieurs délais de rendu à respecter. Le but de cette application est d'être une application en dur permettant la gestion d'un événement. Nous avons choisi de couvrir les événements de trail et plus généralement de course en extérieur. Afin de réaliser le marketing de cette application, il nous a fallu trouver un nom et une charte graphique. Cette application se nomme donc StepByStep."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Cadrage</h1>
                <p className={"mx-20 text-black"}>{"La première partie de ce projet avait pour but de trouver le thème et le but de notre application événementielle. Grâce à notre mise en commun et à l'expertise d'un de nos membres dans les trails, nous avons décidé de réaliser notre application sur la course à pied en extérieur. Afin de réaliser le marketing, il a fallu trouver un nom et une charte graphique cohérente avec notre projet. Nous avons donc choisi le nom de StepByStep. Ce nom met en avant le thème de l'application, la course, mais aussi sa simplicité d'utilisation, pas à pas. La charte graphique de notre application nous a ensuite menés à choisir les couleurs dominantes de notre application. Afin de représenter la nature, nous avons choisi d'utiliser le vert avec le blanc. Nous avons ensuite réalisé une présentation à l'oral en anglais dans un but marketing."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conception</h1>
                <p className={"mx-20 text-black"}>{"La deuxième partie de notre projet nous a menés à réaliser la conception de ce dernier. Nous avons dû réaliser des maquettes des vues de notre projet. Il a également fallu réaliser le modèle de données ainsi que plusieurs schémas UML de notre application. Afin de cibler au mieux notre application, il a été primordial de réaliser des personas permettant de définir le public auquel on s'adressait ainsi que les différentes contraintes que chacun impliquait. Afin de réaliser tout ce travail dans les temps, il a fallu réaliser le cadrage de notre projet avec l'utilisation d'un dossier de conception et de planning de rendu."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Développement</h1>
                <p className={"mx-20 text-black"}>{"La troisième étape de ce projet a été la réalisation logicielle de celui-ci. Afin de permettre une meilleure cohésion et une expertise plus poussée, chaque membre du groupe s'est vu attribuer un domaine d'expertise. Ce domaine visait à permettre, en cas de question ou de problèmes, d'avoir une personne expérimentée dans ce domaine. Cela a aussi permis une hiérarchie équilibrée au sein du projet. D'un point de vue réalisation, nous avons donc réalisé l'application à partir des critères fixés. Il a fallu réaliser différents correctifs en comparaison des projections durant la phase de conception. Il a par exemple fallu modifier le modèle de données afin de permettre une meilleure gestion de l'identification d'un événement. Durant cette phase de réalisation qui a duré 1 semaine, j'ai été chargé d'implémenter la gestion du budget de l'événement comprenant des graphiques mais aussi des listes d'objets possédant un coût d'achat ou de location."}</p>
                <h1 className={"text-4xl font-black text-black ml-20 mt-10 mb-6"}>Conclusion</h1>
                <p className={"mx-20 text-black"}>{"Pour conclure, nous avons réalisé un passage à l'oral de la démonstration de notre solution devant un jury. Ce projet a démontré que la répartition de l'autorité par points clés de l'application a été la bonne décision, permettant une meilleure gestion des conflits ainsi qu'un domaine d'expertise plus avancé dans les différents domaines de l'application."}</p>
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