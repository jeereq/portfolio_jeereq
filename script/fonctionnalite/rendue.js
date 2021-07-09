import Card from "../component/Card.js";
import Description from "../component/Description.js";
import Identite from "../component/Identite.js";
import Image from "../component/Image.js";

import { replaceAllWord } from "./fonction.js";

const renderIdentite = (dataIdentite) => {
	let identite = document.querySelector("#about .moi");
	identite.innerHTML += Identite(dataIdentite);
};

const renderWorks = (dataWorks) => {
	let works = document.querySelector("#works");
	dataWorks.forEach((child) => {
		works.innerHTML += Card(child);
	});
};

const renderCompetences = (datacompetences, arrayKeyWord) => {
	let description = document.querySelector("#about .description");
	datacompetences = replaceAllWord(arrayKeyWord, datacompetences);
	description.innerHTML = Description(datacompetences);
};

const renderIcon = (dataIdentite) => {
	let icon = document.querySelector("header li.icon");
	icon.innerHTML = Image(dataIdentite);
};

export { renderCompetences, renderWorks, renderIdentite, renderIcon };
