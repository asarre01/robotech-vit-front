import React from "react";
import Fade from "react-reveal/Fade";


function Accueil() {
  return (

    <section className="min-h-[80vh] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden lg:rounded-3xl bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 lg:mt-24 mt-16 container mx-auto">
      <img
        src={process.env.PUBLIC_URL + "/assets/lab.jpg"}
        loading="lazy"
        alt=" by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 opacity-50 bg-primary mix-blend-multiply backdrop-blur-xl" />

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className=" text-center text-lg text-alt-100 font-semibold sm:text-xl animate-pulse">
          We do Robolution!
        </p>
        <h1 className=" mb-4 md:mb-8 uppercase text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Robotech ESP
        </h1>
        <p className="mb-4 text-center text-lg text-alt-100 font-semibold sm:text-xl md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          pariatur nemo libero neque vero nulla, repellendus a molestias quidem
          perspiciatis qui. Ullam soluta a dolor enim accusamus tenetur cumque
          sed?
        </p>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#histoire"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100  md:text-base"
          >
            Qui sommes-nous?
          </a>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-alt-100 px-8 py-3 text-center text-sm font-semibold text-alt-200  md:text-base"
          >
            Contactez-nous
          </a>
        </div>
      </div>
        {/* text end */}
    </section>
  );
}

export default Accueil;
