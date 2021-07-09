const NUMBER = 10;
//code a executer des le chargement de la page
window.onload = () => {
	// declaration des variables
	let AllLiens = document.querySelectorAll("li a");
	let menu = document.querySelector(".menu");
	let icon = document.querySelector("li.icon");
	let main = document.querySelector(".corps");
	let hidden = document.querySelector(".hidden");
	let slogant = document.querySelector(".image");
	let mark = document.querySelector(".mark.color");

	//appel des fonctions
	hash();

	//les events
	hidden.addEventListener("click", (e) => {
		e.stopPropagation();
	});

	main.addEventListener("click", (e) => {
		let hidden = document.querySelector(".hidden");
		let icon = document.querySelector("li.icon");
		let menu = document.querySelector(".menu");
		if (hidden.classList.contains("active")) {
			hidden.classList.remove("active");
			icon.querySelector("img").classList.toggle("icon");
			menu.classList.toggle("active");
		}
		e.stopPropagation();
	});

	mark.addEventListener("click", (e) => {
		let icon = document.querySelector("header .icon img");
		let markShow = document.querySelector(".mark-show");
		let mark = document.querySelector(".mark.color");
		let cloneIcon = icon.cloneNode(true);

		if (markShow.classList.contains("show")) {
			markShow.classList.remove("show");
			markShow.querySelector("img").remove();
			mark.classList.remove("red");
		} else {
			markShow.classList.add("show");
			mark.classList.add("red");
			markShow.appendChild(cloneIcon);
		}
	});

	menu.addEventListener("click", function (e) {
		let hidden = document.querySelector(".hidden");
		let icon = document.querySelector("li.icon");
		hidden.classList.toggle("active");
		icon.querySelector("img").classList.toggle("icon");
		this.classList.toggle("active");
		e.stopPropagation();
		aleatoirePoint(slogant, NUMBER);
	});

	icon.addEventListener("click", function (e) {
		let hidden = document.querySelector(".hidden");
		let menu = document.querySelector(".menu");
		this.querySelector("img").classList.toggle("icon");
		hidden.classList.toggle("active");
		menu.classList.toggle("active");
		e.stopPropagation();
		aleatoirePoint(slogant, NUMBER);
	});

	// executions d'autre script
	for (var lien of AllLiens) {
		lien.addEventListener("click", changementLienActive);
	}
};

// declaration des fonctions

function changementLienActive() {
	var parent = this.parentNode;
	var grandParent = parent.parentNode;
	if (parent.classList.contains("active")) return false;
	grandParent.querySelector("li.active").classList.remove("active");
	parent.classList.add("active");
}

const aleatoirePoint = (lieux, nombre) => {
	let Max = 15;
	let AleatMax = lieux.offsetWidth - Max;
	let AleatHeight = lieux.offsetHeight - Max;
	if (!lieux.querySelector(".boule"))
		for (var i = 0; i < nombre; i++) {
			let element = document.createElement("div");
			let aleat = Math.random();
			Math.round(Math.random())
				? element.classList.add("boule")
				: element.classList.add("bouleW");
			lieux.appendChild(element);
			element.style.height = aleat * Max + "px";
			element.style.width = aleat * Max + "px";
			element.style.top = Math.random() * AleatHeight + "px";
			element.style.left = Math.random() * AleatMax + "px";
		}
};

const hash = () => {
	if (location.hash) location.hash = "";
};
