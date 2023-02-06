let worksData = [];
//Récupération des données de l'API et convertis en JSON puis intégré au format ARRAY (tableau)
const fetchWorks = async () => {
	await fetch("http://localhost:5678/api/works")
		.then((res) => res.json())
		.then((promise) => {
			worksData = promise;		
		});		
};

const worksDisplay = async () => {
	await fetchWorks();
	
	document.querySelector('.gallery').innerHTML = worksData.map(
		(works) => 
		`<figure id="${works.id}" class="displayOn" data-${works.category.name}>
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

const worksFilter = async () => {
	await fetchWorks();

	let filters = document.querySelectorAll('.button_filters_block div');
	for(let filter of filters){
		filter.addEventListener("click", function(){
			let tag = this.id;
			let figures = document.querySelectorAll('.gallery figure');
			for(let figure of figures){
				figure.classList.replace("displayOn", "displayNone");
				
				if(tag in figure.dataset || tag === "Tous"){
					figure.classList.replace("displayNone", "displayOn");
				}
				console.log(figure);
			}
		});
	}


};
worksFilter();



function displayContent() {
if (isLoggedIn) {
	document.getElementById('.loginlink').innerHTML = "logout";
	document.getElementById('.loginlink').href = "/logout";
} else {
	document.getElementById('.loginlink').innerHTML = "login";
	document.getElementById('.loginlink').href = "/login";
}
}	
  
  