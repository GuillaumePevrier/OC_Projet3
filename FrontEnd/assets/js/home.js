let worksData = [];
//Récupération des données de l'API et convertis en JSON puis intégré au format ARRAY (tableau)
const fetchWorks = async () => {
	await fetch("http://localhost:5678/api/works")
		.then((res) => res.json())
		.then((promise) => {
			worksData = promise;
			console.log(worksData);
		});
};
const worksDisplay = async () => {
	await fetchWorks();
	
	document.querySelector('.gallery').innerHTML = worksData.map(
		(works) => 
		`<figure id="${works.id}">
		 <div id="${works.categoryId}"></div>
		 <div id="${works.category.name}"></div>
		 <div id="${works.userId}"></div>
		 <img src="${works.imageUrl}" crossOrigin="anonymous"/>
		 <figcaption>${works.title}</figcaption>
		 </figure>
		`,
	)
	.join("");
};
worksDisplay();

//Création d'une fonction FILTRE pour filtrer les catégories
function filterWorks(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button_filters");
  buttons.forEach((button) => {
	//vérifier si la valeur est égale à innerText
	if (value.toUpperCase() == button.innerText.toUpperCase()) {
	  button.classList.add("active");
	} else {
	  button.classList.remove("active");
	}
  });

  //Sélectionner tous les travaux
	let elements = document.querySelectorAll(".gallery");
	//parcourir toutes les travaux
	elements.forEach((element) => {
	  //afficher toutes les cartes en cliquant sur le bouton "tous"
	  if (value == "Tous") {
		element.classList.remove("hide");
	  } else {
		//Vérifier si l'élément contient une class de la catégorie
		if (element.classList.contains(value)) {
		  //Afficher les travaux basé sur leur catégorie
		  element.classList.remove("hide");
		} else {
		  //Caché les autres travaux.
		  element.classList.add("hide");
		}
	  }
	});
  }
  

