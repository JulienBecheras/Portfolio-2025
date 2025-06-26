"use client"

import DividerMountain from "@/app/components/divider";
import IconButton from "@/app/components/IconButton";

export default function Footer() {

    return (
      <div className={"m-[-5px] pb-16"}>
          <DividerMountain/>
          <div className={"flex  items-center gap-10"}>
              <div className={"w-[40%] flex flex-col ml-10"}>
                  <h2 className={"text-3xl font-black text-black"}>Remerciement</h2>
                  <h3 className={"text-lg font-bold text-black ml-6"}>{"Merci d'avoir étudié mon portfolio. J'espère que votre expérience s'est déroulée de manière agréable et bénéfique. Pour toute information supplémentaire, n'hésitez pas à me contacter par mail ou via mes réseaux sociaux."}</h3>
              </div>
              <div className={"flex justify-center items-center"}>
                    <IconButton url={"https://fr.linkedin.com/"} icon={"linkedin.png"}/>
                    <IconButton url={"https://github.com/JulienBecheras"} icon={"github.png"}/>
                    <IconButton url={"https://workspace.google.com/intl/fr/gmail/"} icon={"gmail.png"}/>
              </div>
          </div>
      </div>
    );
}