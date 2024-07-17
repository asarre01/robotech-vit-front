import React, { useState, useEffect } from "react";
import { AiFillRobot } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

function Header() {
  const [currentSection, setCurrentSection] = useState("accueil");
  const [showNav, setShowNav] = useState(false);

  const handleOpenNav = () => {
    setShowNav(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseNav = () => {
    setShowNav(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="fixed top-0 z-10 px-6 lg:px-32 py-4 w-screen  flex items-center justify-between backdrop-blur-2xl backdrop-opacity-80 ">
      <div>
        <h1 className="text-xl text-primary font-bold">ROBOTECH</h1>
      </div>
      <div>
        <AiFillRobot
          onClick={handleOpenNav}
          className=" text-3xl text-primary md:hidden"
        />
        <nav
          className={`${
            showNav
              ? " absolute inset-0 h-screen w-auto backdrop-blur-xl backdrop-opacity-80 bg-white/75"
              : "max-md:hidden"
          } `}
        >
          <BsTools
            onClick={handleCloseNav}
            className=" text-3xl text-primary md:hidden top-2 right-2 absolute "
          />
          <ul className=" flex items-center justify-center md:space-x-2 flex-col md:flex-row max-md:h-screen ">
            <li>
              <a
                href="#accueil"
                className={` font-bold ${
                  currentSection === "accueil" ? "text-primary" : "text-alt-200"
                } hover:text-primary px-4 py-2`}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#histoire"
                className={` font-bold ${
                  currentSection === "histoire"
                    ? "text-primary"
                    : "text-alt-200"
                } hover:text-primary px-4 py-2`}
              >
                Histoire
              </a>
            </li>
            <li>
              <a
                href="#equipe"
                className={` font-bold ${
                  currentSection === "equipe" ? "text-primary" : "text-alt-200"
                } hover:text-primary px-4 py-2`}
              >
                Bureau
              </a>
            </li>
            <li>
              <a
                href="#projet"
                className={` font-bold ${
                  currentSection === "projet" ? "text-primary" : "text-alt-200"
                } hover:text-primary px-4 py-2`}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#evenement"
                className={` font-bold ${
                  currentSection === "evenement"
                    ? "text-primary"
                    : "text-alt-200"
                } hover:text-primary px-4 py-2`}
              >
                Evénements
              </a>
            </li>
          </ul>
          <div className=" -z-10 h-screen w-full absolute inset-0 sm:hidden"></div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
