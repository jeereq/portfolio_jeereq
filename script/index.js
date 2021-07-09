import {
	renderCompetences,
	renderWorks,
	renderIdentite,
	renderIcon
} from "./fonctionnalite/rendue.js";

(async () => {
	const Identite = await fetch("http://localhost:3000/Identite").then((res) =>
		res.json()
	);
	const works = await fetch("http://localhost:3000/works").then((res) =>
		res.json()
	);
	const keyWord = await fetch("http://localhost:3000/keyWord").then((res) =>
		res.json()
	);
	const competences = await fetch("http://localhost:3000/competences").then(
		(res) => res.json()
	);

	setTimeout(() => {
		let load = document.querySelector("#load");

		load.classList.add("hide");
		load.addEventListener("transitionend", (e) => {
			e.target.remove();
		});

		renderCompetences(competences, keyWord);
		renderIdentite(Identite);
		renderWorks(works);
		renderIcon(Identite);
	}, 2000);
})();
