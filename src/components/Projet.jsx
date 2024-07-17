import React from 'react'

function Projet({projet}) {
  return (
    <div className=" mx-8 md:mx-12  grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-x-4 md:gap-x-12 ">
      <div>
        <img
          src={process.env.PUBLIC_URL + projet.image}
          alt={projet.nom}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className=' md:py-0 py-2'>
        <h1 className=" font-bold text-xl md:text-3xl mb-4 md:mb-6 text-primary">
          Le FabLab
			  </h1>
			  <p>
				{projet.description}
		</p>
      </div>
    </div>
  );
}

export default Projet