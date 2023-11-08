"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Explora, Saborea, Enamórate",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Enviamos tu orden hasta la puerta de tu casa",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Mordiscos Inolvidables. ¡Descubre el Arte en Cada Pizza!",
    image: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">

      {/* TEXT CONTAINER*/}
      <div className=" flex-1 flex items-center justify-center flex-col gap-8 text-red-900 font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-900 text-white py-4 px-8">Ordenar</button>
      </div>

      {/* IMG CONTAINER*/}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="objet-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
