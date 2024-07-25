import React from "react";
import { GiSkills } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { TbBulb } from "react-icons/tb"
import {FaPeopleRoof} from "react-icons/fa6"

function Banner() {
  return (
    <div className=" lg:max-h-72 max-h-full max-w-4xl xl:max-w-5xl -translate-y-24 mx-auto bg-primary px-4 md:px-12 lg:rounded-xl shadow-lg grid grid-cols-2 lg:grid-cols-4 items-center text-alt-100 ">
      <div className="flex flex-col items-center h-60 lg:h-72 space-y-2 hover:bg-secondary w-fit py-2 md:py-4 px-2 md:px-4 hover:shadow-xl  hover:h-78 hover:rounded-lg hover:-translate-y-8 hover:transform transition-all">
        <GiSkills className=" text-2xl md:text-4xl mb-2" />
        <h1 className=" text-sm md:text-lg font-bold text-center ">
          Expertise interdisciplinaire
        </h1>
        <p className=" text-sm md:text-lg max-w-xs text-center">
          Fusion de compétences en mécanique, informatique, électrique, civil,
          chimique et gestion pour des solutions robotiques avancées.
        </p>
      </div>
      <div className="flex flex-col items-center h-60 lg:h-72 space-y-2 hover:bg-secondary w-fit py-4 md:py-8 px-2 md:px-4 hover:shadow-xl  hover:h-78 hover:rounded-lg hover:-translate-y-8 hover:transform transition-all">
        <BsTools className=" text-2xl md:text-4xl mb-2" />
        <h1 className=" text-sm md:text-lg font-bold text-center">
          Technologie de pointe
        </h1>
        <p className=" text-sm md:text-lg max-w-xs text-center">
          Découvrez nos projets innovants et notre utilisation de technologies
          de pointe.
        </p>
      </div>
      <div className="flex flex-col items-center h-60 lg:h-72 space-y-2 hover:bg-secondary w-fit py-4 md:py-8 px-2 md:px-4 hover:shadow-xl  hover:h-78 hover:rounded-lg hover:-translate-y-8 hover:transform transition-all">
        <TbBulb className=" text-2xl md:text-4xl mb-2" />
        <h1 className=" text-sm md:text-lg font-bold text-center">
          Projets inspirants
        </h1>
        <p className=" text-sm md:text-lg max-w-xs text-center">
          Explorez nos réalisations et projets qui repoussent les limites de la
          technologie robotique.
        </p>
      </div>
      <div className="flex flex-col items-center h-60 lg:h-72 space-y-2 hover:bg-secondary w-fit py-4 md:py-8 px-2 md:px-4 hover:shadow-xl  hover:h-78 hover:rounded-lg hover:-translate-y-8 hover:transform transition-all">
        <FaPeopleRoof className=" text-2xl md:text-4xl mb-2" />
        <h1 className=" text-sm md:text-lg font-bold text-center">
          Engagement Communautaire
        </h1>
        <p className=" text-sm md:text-lg max-w-xs text-center">
          Notre impact dans la communauté à travers l'éducation et la
          sensibilisation à la robotique.
        </p>
      </div>
    </div>
  );
}

export default Banner;
