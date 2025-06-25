"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/img/image1.jpg",
  "/img/image2.jpg",
  "/img/image3.jpg",
  "/img/image4.jpg",
];

export default function DiaporamaImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // toutes les 3 secondes

    return () => clearInterval(interval); // nettoyage
  }, []);

  return (
    <div className="w-full h-64 relative overflow-hidden">
      <Image
        src={images[index]}
        alt={`Image ${index}`}
        fill
        className="object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
}
