import React from "react";
import { FaToolbox } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
function AboutUs() {
  return (
  
      <section
        id="histoire"
        className=" container min-h-screen mx-auto flex flex-col lg:flex-row flex-1 shrink-0 items-center justify-center py-6  md:py-10 text-alt-200"
      >
        {/* Section 1 */}
        <div className=" min-h-[85vh] grid grid-rows-2 max-w-lg rounded-xl overflow-hidden ">
          <div className="  bg-red-500 hover:z-50 transition-all">
            <img
              src={process.env.PUBLIC_URL + "/assets/lab.jpg"}
              alt="arduino"
              className=" mx-auto h-full w-full object-cover object-center "
            />
          </div>
          <div className="  bg-red-500 hover:z-50 transition-all">
            <img
              src={process.env.PUBLIC_URL + "/assets/arduino.jpeg"}
              alt="arduino"
              className=" mx-auto h-full w-full object-cover object-center "
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className=" min-h-[85vh] max-w-lg bg-primary py-12 px-6 text-alt-100 rounded-xl -translate-y-12 lg:-translate-x-24">
          <h1 className=" font-bold text-xl md:text-3xl mb-4 md:mb-8">
            Notre Histoire{" "}
          </h1>

          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi
            minus rem officia animi non, iure accusamus porro cumque! Aperiam
            sapiente totam distinctio? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusantium aliquid culpa, labore ut ad esse,
            necessitatibus quasi minus rem officia animi non, iure accusamus
            porro cumque! Aperiam sapiente totam distinctio?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi
            minus rem officia animi non, iure accusamus porro cumque! Aperiam
            sapiente totam distinctio? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam fugiat ipsam tempora accusantium a
            molestiae? Distinctio voluptatem quo tempore asperiores veniam
            aspernatur molestias rerum corporis odio, magnam, saepe labore?
            Vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates ex, deleniti nihil harum facere, qui exercitationem ipsum
            aut illum, beatae a numquam? Iste eos nisi, neque error dolorum
            eaque? Impedit?Voluptates ex, deleniti nihil harum facere, qui
            exercitationem ipsum aut illum, beatae a numquam? Iste eos nisi,
            neque error dolorum eaque? Impedit?Voluptates ex, deleniti nihil
            harum facere, qui exercitationem ipsum aut illum, beatae a numquam?
            Iste eos nisi, neque error dolorum eaque? Impedit?
            <br />
          </p>
          <a href="#contact">
            <button className=" bg-secondary text-alt-100 shadow-xl px-6 py-3 font-bold mt-4 rounded-xl">
              Contactez-nous
            </button>
          </a>
        </div>
        {/* Section 3 */}
        <div className="  min-h-[85vh] min-w-lg md:max-w-lg lg:max-w-xl m py-12 px-12 shadow-xl rounded-xl border -mt-12 lg:-ml-28">
          <h1 className=" font-bold text-xl md:text-3xl mb-4 md:mb-6 text-secondary">
            Le FabLab
          </h1>
          <p className=" text-justify">
            Notre FabLab est un espace de création et d'innovation dédié à la
            conception de robots et de projets technologiques. Elle permet aux
            membres de donner vie à leurs idées et de développer des compétences
            en ingénierie et en programmation.
          </p>
          <div className=" flex flex-col items-center justify-center mt-4 space-y-2 lg:mt-6">
            <div className=" w-full px-4 py-2 ">
              <div className="flex items-center space-x-2 font-bold text-xl">
                <span className="  bg-secondary size-12 flex justify-center items-center rounded">
                  <FaToolbox className=" text-alt-100 text-3xl" />
                </span>{" "}
                <h2 className=" flex items-center space-x-2 font-bold text-xl text-secondary">
                  Équipements
                </h2>
              </div>
              <p className=" text-justify mt-4">
                Notre FabLab est équipé de machines de pointe, telles que des
                imprimantes 3D, des découpeuses laser et des fraiseuses CNC.
                Nous offrons également un large éventail de kits Arduino, de
                capteurs, de Raspberry Pi, ainsi que des outils électroniques.
              </p>
            </div>
            <div className=" w-full px-4 py-2 ">
              <div className="flex items-center space-x-2 font-bold text-xl">
                <span className="  bg-secondary size-12 flex justify-center items-center rounded">
                  <FaBusinessTime className=" text-alt-100 text-3xl" />
                </span>{" "}
                <h2 className=" flex items-center space-x-2 font-bold text-xl text-secondary">
                  Horaires et Accès
                </h2>
              </div>
              <p className=" text-justify mt-4">
                Le FabLab, <b>ouvert aux étudiants ayant un projet</b>, est
                accessible les <b>jours ouvrables de 8h à 00h</b> .
              </p>
            </div>
            <div className=" w-full px-4 py-2 ">
              <div className="flex items-center space-x-2 font-bold text-xl">
                <span className="  bg-secondary size-12 flex justify-center items-center rounded">
                  <BiSolidHelpCircle className=" text-alt-100 text-3xl" />
                </span>{" "}
                <h2 className=" flex items-center space-x-2 font-bold text-xl text-secondary">
                  Espace de Partage et d'Innovation
                </h2>
              </div>
              <p className=" text-justify mt-4">
                Le FabLab est un lieu de partage où les membres sont toujours
                disponibles pour vous aider et vous soutenir dans vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutUs;
