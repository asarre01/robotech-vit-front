import React, { useState } from 'react'
import { sendMail } from '../services/mailer';

function ContactUs() {
	const [formData, setFormData] = useState({
		nom: "",
		email: "",
		message: "",
		sujet: ""
	})
	const sujets = [
	"Sélectionner un sujet",
    "Demande de Partenariat",
    "Sponsoring et Financement",
    "Collaboration sur Projets Technologiques",
    "Ateliers et Formations",
    "Événements et Compétitions",
    "Questions et Informations Générales",
    "Propositions de Bénévolat",
    "Adhésion au Club",
    "Réservations et Utilisation du FabLab",
	];
	
	const handleSendMail = async (e) => {
		e.preventDefault();
		const response = await sendMail(formData);
		if (response.status === 200) {
			alert("Votre message a bien été envoyé !");
			setFormData({
				nom: "",
				email: "",
				message: "",
				sujet: ""
			});
		} else {
			alert("Une erreur s'est produite. Veuillez réessayer.");
		}
	}

return (
	<section id="contact" className=" lg:max-h-[80vh] relative flex flex-1 shrink-0 items-center justify-center  py-6  md:py-12 ">
		<img
			src={process.env.PUBLIC_URL + "/assets/lab.jpg"}
			alt="arduino"
			className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
		/>
		<div className="w-full h-full z-50 grid grid-cols-1 lg:grid-cols-2 px-4 md:px-24 gap-x-24 max-md:gap-y-12 py-12">
			<div>
				<h1 className=" text-5xl font-bold text-alt-100">
					Rejoignez-Nous en Tant que Partenaire
				</h1>
				<p className=" text-alt-100 mt-8 text-xl">
					Rejoignez notre FabLab en tant que partenaire et soutenez
					l'innovation technologique. En collaborant avec nous, vous
					contribuerez à la réalisation de projets passionnants et
					bénéficierez d'une visibilité accrue. Contactez-nous pour découvrir
					les opportunités de partenariat.
				</p>
				<a href="#histoire">
					<button className=" rounded-xl bg-alt-100 py-4 px-6 shadow-lg font-bold text-xl text-primary mt-4">
						Qui sommmes-nous?
					</button>
				</a>
			</div>
			<div>
				<h1 className=" text-5xl font-bold text-alt-100">Contactez-Nous</h1>
				<form
					className=" flex flex-col max-w-xl py-12 space-y-4"
					onSubmit={handleSendMail}
				>
					<div className=" text-alt-100">
						<label htmlFor="name" className=" text-xl font-bold">
							Prénom & Nom
						</label>
						<input
							type="text"
							id="name"
							className="w-full bg-transparent border-2 border-alt-100 rounded-xl px-2 py-3 outline-none mt-2"
							value={formData.nom}
							onChange={(e) =>
								setFormData({ ...formData, nom: e.target.value })
							}
						/>
					</div>
					<div className=" text-alt-100">
						<label htmlFor="email" className=" text-xl font-bold">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full bg-transparent border-2 border-alt-100 rounded-xl px-2 py-3 outline-none mt-2"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
					</div>
					<div className=" text-alt-100">
						<label htmlFor="sujet" className=" text-xl font-bold">
							Sujet
						</label>
						<select
							id="sujet"
							className="w-full bg-transparent border-2 border-alt-100 rounded-xl px-2 py-3 outline-none mt-2 "
							value={formData.sujet}
							onChange={(e) =>
								setFormData({ ...formData, sujet: e.target.value })
							}
						>
							{sujets.map((sujet, i) => (
								<option
									className=" text-primary hover:text-alt-100 hover:bg-primary"
									key={i}
									value={sujet}
								>
									{sujet}
								</option>
							))}
						</select>
					</div>
					<div className=" text-alt-100">
						<label htmlFor="message" className=" text-xl font-bold">
							Message
						</label>
						<textarea
							type="message"
							id="message"
							className="w-full bg-transparent border-2 border-alt-100 rounded-xl px-2 py-3 outline-none mt-2"
							value={formData.message}
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
						></textarea>
					</div>
					<button className=" rounded-xl bg-alt-100 py-4 font-bold text-xl text-primary">
						Envoyer
					</button>
				</form>
			</div>
		</div>
		<div className=" absolute inset-0 w-full h-full bg-primary mix-blend-multiply"></div>
	</section>
);
}

export default ContactUs