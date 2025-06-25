import Image from "next/image";
import HeroImage from "./components/heroImage";
import DividerMountain from "./components/divider";
import Link from "next/link";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";
import Competence from "@/app/components/competence";
export default function Home() {
  return (
      <div className={"flex flex-col overflow-hidden"}>
        <HeroImage text={"Julien"}/>
          <div>
              <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Language de programmation </h1>
          </div>
          <div className={"flex flex-wrap justify-center gap-4 m-10"}>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
          </div>
          <div>
              <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Outils </h1>
          </div>
          <div className={"flex flex-wrap justify-center gap-4 m-10"}>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
          </div>

          <div>
              <h1 className={"text-black font-black text-3xl mb-5 ml-10"}>Compétence transversales </h1>
          </div>
          <div className={"flex flex-wrap justify-center gap-4 m-10 mb-32"}>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
              <Competence nom={"SQL"} srcImage={"sql.svg"}/>
          </div>        <DividerMountain rotation={-180}/>
          <div className={"flex flex-row justify-center bg-customBlue pt-[10vh] pb-0 border-2 border-customBlue border-solid mt-[-5px]"}>
              <div className={"flex flex-col justify-center items-center w-[20vw]"}>
                  <div className={"h-[10%] w-[30%] relative m-0 p-0"}>
                      <Image
                          src={"/forme/rond.svg"}
                          alt={"rond"}
                          fill
                          className={"object-contain object-bottom"}
                      />
                  </div>
                  <div className={"h-[100%] w-[30%] relative m-[-2px]"}>
                      <Image
                          src={"/forme/ligne.svg"}
                          alt={"ligne"}
                          fill
                          className={"object-contain"}
                      />
                  </div>
              </div>
                <div className={"text-wrap wrap w-[40vw] text-[2vw] pb-[3vw]"}>
                    {"Je m'appelle Julien Becheras, étudiant en première année de Bachelor Universitaire de Technologie (BUT) en informatique à Grenoble. À l'âge de 20 ans, je suis un véritable passionné par le monde de l'informatique, du sport et de tous domaines touchant au spatial. Mon portfolio est le reflet de mon engagement dans ces domaines, où je cherche à combiner créativité, détermination et curiosité pour repousser les frontières de mes connaissances. Je suis impatient de relever de nouveaux défis, d'apprendre continuellement et de contribuer activement à l'évolution de la technologie."}
                </div>
          </div>
          <div className={"h-[30vw] w-full relative mt-[-5vw]"}>
              <Image
                  src={"/forme/clap_top.svg"}
                  alt={"clap de cinéma"}
                  fill
                  className={"object-cover"}
              />
          </div>

          {/* 1ere bande*/}

          <div className={"w-full h-[3.5vw] relative"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film haut"}
                  fill
                  className={"object-contain"}
              />
          </div>
          <div className={"w-full h-[20vw] flex justify-center bg-black outline outline-[1vw] outline-black"}>
              <Project nom={"Algorithme de tri de dépêches"} srcImage={"network.jpg"} resume={"Durant une semaine nous avons travailler en binome afin de produire un algrythme visant à catégoriser des dépêches. Le but? Qu'il soit le plus rapide et fiable !"} film={true} url={"algorithme tri"}/>
              <Project nom={"Réalisation d'un site-internet"} srcImage={"web.jpg"} resume={"En équipe de 3 notre but est de fournir un site web représentant de grandes entrprises. Notre public cible ? Les élève de 3ème afin de leurs permettre de se faire un avis sur leur choix d'orientation."} film={true} url={"site-internet"}/>
              <Project nom={"Extraction d'information d'une base de donées"} srcImage={"bd.jpg"} resume={"Nous sommes un duo de jeune adhérent d'une association qui lutte contre les accidents de la route. Notre mission? Consulter et trier une base de donnée en vue d'extraire des informations sur les personne de +65 ans en Nouvelle-Aquitaine."} film={true} url={"extraction bd"}/>
          </div>
          {/*<div className={"w-[150%] h-[20vw] items-center justify-center flex flex-row relative left-1/2 -translate-x-1/2 bg-customBlue"}>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white font-black"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
          </div>*/}
          <div className={"w-full h-[3.5vw] relative shadow-2xl mb-[2vw]"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film bas"}
                  fill
                  className={"object-contain"}
              />
          </div>

          {/* 2eme bande*/}

          <div className={"w-full h-[3.5vw] relative"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film haut"}
                  fill
                  className={"object-contain"}
              />
          </div>
          <div className={"w-full h-[20vw] flex justify-center bg-black outline outline-[1vw] outline-black"}>
              <Project nom={"Création d'un modèle de données grace à SQL"} srcImage={"titanic.jpg"} resume={"Naufrage du Titanic : créer et modéliser une base de données grâce à SQL."} film={true} url={"bd titanic"}/>
              <Project nom={"StepByStep"} srcImage={"course.jpg"} resume={"Réalisation d'une application évènementielle"} film={true}/>
              <Project nom={"GameJam"} srcImage={"game.jpg"} resume={"5 jours pour réaliser par groupe de 4 un jeu en Python"} film={true}/>
          </div>
          <div className={"w-full h-[3.5vw] relative shadow-2xl mb-[2vw]"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film bas"}
                  fill
                  className={"object-contain"}
              />
          </div>

          {/* 3eme bande*/}

          <div className={"w-full h-[3.5vw] relative"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film haut"}
                  fill
                  className={"object-contain"}
              />
          </div>
          <div className={"w-full h-[20vw] flex justify-center bg-black outline outline-[1vw] outline-black"}>
              <Project nom={"Terraforma"} srcImage={"terra.jpg"} resume={"Par équipe de 7, nous avons réaliser un serious game afin d'ameliorer le niveau de classes de 3ème en SVT"} film={true}/>
              <Project nom={"Picsou"} srcImage={"ISS.jpg"} resume={"Projet stage en duo visant à la réalisation d'une application de gestion de dépenses au sein d'un groupe"} film={true}/>
              <Project nom={"test"} srcImage={"ISS.jpg"} resume={"Ceci est le résumé de cette image"} film={true}/>
          </div>
          <div className={"w-full h-[3.5vw] relative shadow-2xl mb-[2vw]"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film bas"}
                  fill
                  className={"object-contain"}
              />
          </div>

          <div className={"h-[8vw] w-full relative"}>
              <Image
                  src={"/forme/clap_bot.svg"}
                  alt={"clap de cinéma"}
                  fill
                  className={"object-cover"}
              />
          </div>
          <div className={"w-full bg-customBlue p-[10vh]"}>
            <h2>Mes passions</h2>
            <div className={"flex flex-col flex-wrap justify-center"}>
                <div className={"flex flex-row justify-center"}>
                    <div className={"w-[30vw] h-[40vh] flex justify-center border-white border-t-[0.5vw] border-l-[0.5vw]"}>
                        <h3>IT</h3>
                    </div>
                    <div className={"w-[30vw] flex justify-center border-white border-t-[0.5vw] border-l-[0.5vw]"}>
                        <h3
                        >Sport</h3>
                    </div>
                    <div className={"w-[30vw] flex justify-center border-white border-t-[0.5vw] border-x-[0.5vw]"}>
                        <h3>Spacial</h3>
                    </div>
                </div>
                <div className={"flex flex-row justify-center"}>
                    <div className={"flex flex-col justify-center"}>
                        <div className={"w-[54vw] h-[10vh] flex justify-center items-center border-white border-t-[0.5vw] border-l-[0.5vw]"}>
                            <h3>Ma dernière découverte</h3>
                        </div>
                        <div className={"flex flex-row justify-center"}>
                            <div className={"w-[27vw] h-[10vh] flex justify-center items-center border-white border-t-[0.5vw] border-l-[0.5vw]"}>
                                <h3>Concepteur</h3>
                            </div>
                            <div className={"w-[27vw] flex justify-center items-center border-white border-t-[0.5vw] border-l-[0.5vw]"}>
                                <h3>Mistral</h3>
                            </div>
                        </div>
                    </div>
                    <div className={"w-[36vw] h-[20vh] flex justify-center items-center border-white border-t-[0.5vw] border-x-[0.5vw]"}>
                        <Link href={"https://chat.mistral.ai/chat"}><h3>Le chat</h3></Link>
                    </div>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                    <div className={"w-[63vw] h-[10vh] flex justify-between items-center border-white border-y-[0.5vw] border-l-[0.5vw]"}>
                        <h3>Projet actuellement en cours</h3>
                    </div>
                    <div className={"w-[27vw] h-[10vh] flex justify-center items-center border-white border-[0.5vw]"}>
                        <h3>App Mobile</h3>
                    </div>
                </div>
            </div>
            <Link className={"w-fit h-fit flex flex-row ml-[55vw] items-center justify-end mt-[10vh]"} href={"/passions"}>
                <div className={"flex justify-center items-center pl-[1vw] rounded-full bg-white w-[5.5vw] h-[5.5vw] hover:scale-110"}>
                    <div className={"w-0 h-0 border-t-[1.5vw] border-t-transparent border-b-[1.5vw] border-b-transparent border-l-[3vw] border-customBlue"}></div>
                </div>
                <h3 className={"text-[2vw] ml-[2vw]"}>En apprendre plus</h3>
            </Link>
          </div>
          <Footer/>
      </div>
  );
}
