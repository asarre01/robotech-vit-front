import React from 'react'
import { FaRobot } from "react-icons/fa";

function Event() {
  return (
    <section
      id="evenement"
      className="min-h-screen flex items-center justify-center  overflow-hidden py-8 md:py-16 container mx-auto"
    >
      <div className="">
        <div className="container grid grid-cols-12 mx-auto">
          {/* Evénement à venir */}
          <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
            <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
              <span>12 June</span>
              <h1 className="py-4 text-5xl font-bold">
                Les Journées de la robotique
              </h1>
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                iste fugit quas consequatur maiores, modi saepe et iusto dolore
                ab quae veniam provident libero voluptatum nihil odio placeat
                corrupti dicta.
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-block rounded-lg bg-alt-100 px-8 py-3 text-center text-sm font-semibold text-alt-200  md:text-base"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
          {/* Evénements passés */}
          <div className="flex flex-col col-span-12 p-6 divide-y divide-secondary lg:col-span-6 lg:p-10 ">
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <FaRobot className="text-2xl text-primary" />
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <FaRobot className="text-2xl text-primary" />
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                a!
              </p>
              <FaRobot className="text-2xl text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event