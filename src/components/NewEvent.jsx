import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

function NewEvent() {
  return (
    <div className=" bg-alt-100 overflow-hidden rounded-xl shadow-xl max-w-5xl border w-full mx-auto  ">
      <div className="grid grid-cols-12 mx-auto ">
        <div className="relative bg-no-repeat bg-cover bg-primary col-span-full lg:col-span-4">
          <img
            src={process.env.PUBLIC_URL + "/assets/equipe.jpg"}
            loading="lazy"
            alt=" by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <div className="flex justify-start">
            <span className="px-2 py-1 text-xs rounded-full bg-secondary text-alt-100">
              A venir
            </span>
          </div>
          <h1 className="text-3xl font-semibold">
            Les Journées de la robotique
          </h1>
          <p className="flex-1 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            reprehenderit adipisci tempore voluptas laborum quod.
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <FaCalendarCheck className=" text-secondary text-2xl" />
              <span className="self-center text-sm">Bientôt</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdPlace className=" text-secondary text-2xl" />
              <span className="self-center text-sm">FabLab ESP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEvent