import React from "react";

function Accueil() {
  return (
    <section className="min-h-[80vh] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 mt-24 container mx-auto">
      
      <img
        src={process.env.PUBLIC_URL + "/assets/equipe.jpg"}
        loading="lazy"
        alt=" by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      
      <div className="absolute inset-0 opacity-50 bg-primary mix-blend-multiply" />
      
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-alt-100 font-semibold sm:text-xl md:mb-8">
          We do Robolution!
        </p>
        <h1 className="mb-8 uppercase text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Robotech ESP
        </h1>
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
