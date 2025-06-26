"use client"

import HeroImage from "@/app/components/heroImage";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function Contact(){
    return (
        <div>
            <HeroImage text={"Contact"}/>
            <div className={"bg-customBlue mt-[-14vw] pt-[20vw] pb-16"}>
                <div className={"flex justify-end items-center mx-[20vw] mb-10"}>
                    <h2 className={"text-white text-4xl font-black mr-[8vw]"}>Nom</h2>
                    <input type={"text"} placeholder={"Nom"} className={"bg-white text-black w-[30vw] rounded-3xl py-2 px-4"}/>
                </div>
                <div className={"flex justify-end items-center mx-[20vw] mb-10"}>
                    <h2 className={"text-white text-4xl font-black mr-[8vw]"}>Prénom</h2>
                    <input type={"text"} placeholder={"Prénom"} className={"bg-white text-black w-[30vw] rounded-3xl py-2 px-4"}/>
                </div>
                <div className={"flex justify-end items-center mx-[20vw] mb-10"}>
                    <h2 className={"text-white text-4xl font-black mr-[8vw]"}>Organisation</h2>
                    <input type={"text"} placeholder={"Organisation"} className={"bg-white text-black w-[30vw] rounded-3xl py-2 px-4"}/>
                </div>
                <div className={"flex flex-col justify-end items-center mx-[20vw] mb-10"}>
                    <h2 className={"text-white text-4xl font-black mb-6 mr-[40vw]"}>Message</h2>
                    <textarea placeholder={"Votre message"} className={"bg-white text-black w-[60vw] h-[40vw] rounded-3xl py-2 px-4 text-wrap"}/>
                </div>
                <div className={"flex justify-center items-center p-4 bg-gray-300 w-fit rounded-3xl mr-[10vw] ml-auto"}>
                    <h3 className={"text-black text-xl font-bold px-6"}>Envoyer</h3>
                    <Image src={"/forme/send.svg"} alt={"envoyer le mail"} width={32} height={32}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}