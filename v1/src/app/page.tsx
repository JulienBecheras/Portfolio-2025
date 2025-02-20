import Image from "next/image";
import HeroImage from "./components/heroImage";
import DividerMountain from "./components/divider";

export default function Home() {
  return (
      <div className={"flex flex-col overflow-visible"}>
        <HeroImage text={"Julien"}/>
        <DividerMountain/>
        <div className={"h-full w-full bg-white"}>test</div>
        <DividerMountain rotation={-180}/>
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
                    Je m'appelle Julien Becheras,
                    étudiant en première année de Bachelor Universitaire de Technologie (BUT) en informatique à Grenoble. À l'âge de 20 ans, je suis un véritable passionné par le monde de l'informatique, du sport et de tous domaines touchant au spatial. Mon portfolio est le reflet de mon engagement dans ces domaines, où je cherche à combiner créativité, détermination et curiosité pour repousser les frontières de mes connaissances. Je suis impatient de relever de nouveaux défis, d'apprendre continuellement et de contribuer activement à l'évolution de la technologie.
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
          <div className={"w-full h-[3.5vw] relative"}>
              <Image
                  src={"/forme/bande_film.svg"}
                  alt={"bande de film haut"}
                  fill
                  className={"object-contain"}
              />
          </div>
          <div className={"w-[150%] h-[20vw] items-center justify-center flex flex-row relative left-1/2 -translate-x-1/2 bg-customBlue"}>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
            <div className={"w-[30vw] h-full outline outline-customBlue outline-[1vw] bg-white"}></div>
          </div>
          <div className={"w-full h-[3.5vw] relative shadow-2xl"}>
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
                        <h3>Sport</h3>
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
                        <h3>Le chat</h3>
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
          </div>
          <DividerMountain/>
      </div>
  );
}
