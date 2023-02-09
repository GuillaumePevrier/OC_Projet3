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
	document.querySelector('.galleryModal').innerHTML = worksData.map(
		(works) => 
		`<figure id="${works.id}" class="displayOn" data-${works.category.name}>
		 <div id="${works.categoryId}"></div>
		 <div id="${works.category.name}"></div>
		 <div id="${works.userId}"></div>
		 <img src="${works.imageUrl}" crossOrigin="anonymous"/>
		 <p>éditer</p>
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
			}
		});
	}


};
	  worksFilter();

let isLoggedIn = sessionStorage.getItem("isLoggedIn");
	if (sessionStorage.getItem("isLoggedIn") === null) {
	isLoggedIn = false;
	
	}

function displayContent() {
	
	if (isLoggedIn) {
	document.querySelector('.loginlink').innerHTML = "logout";
	document.querySelector('.header_admin_none').classList.replace("header_admin_none", "header_admin_visible");
	document.querySelector('.modifierAdd_none').classList.replace("modifierAdd_none", "modifierAdd_visible");
	} 
	
	else {
	document.querySelector('.loginlink').innerHTML = "login";
	document.querySelector('.loginlink').href = "./login.html";
	}
}
		displayContent();
  

const element = document.getElementById("loginId");
		element.addEventListener("click", myFunction);
		
		function myFunction() {
			sessionStorage.clear();
		}
		
const modalContainer = document.querySelector(".modal-container");
		const modalTriggers = document.querySelectorAll(".modal-trigger");
		
		modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
		
		function toggleModal(){
		  modalContainer.classList.toggle("active")
		}

const buttonNext = document.getElementById("bouttonValiderNext")	
	
		buttonNext.addEventListener("click", myFunctionNext);

		function myFunctionNext() {
			let modalElements = document.querySelectorAll('.modal div');
			for(let modalElement of modalElements){
					modalElement.classList.replace("modal1_visible", "modal1_none");
					modalElement.classList.replace("modal2_none", "modal2_visible");
				}
		}
const buttonBack = document.getElementById("bouttonValiderBack")	
		
		buttonBack.addEventListener("click", myFunctionBack);
		
		function myFunctionBack() {
			let modalElements = document.querySelectorAll('.modal div');
			for(let modalElement of modalElements){
					modalElement.classList.replace("modal1_none", "modal1_visible");
					modalElement.classList.replace("modal2_visible", "modal2_none");
				}
		}
		
let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let imageLoadDisplay = document.querySelector('.imageLoadVisible');
		uploadButton.onchange = () => {
			let reader = new FileReader();
			reader.readAsDataURL(uploadButton.files[0]);
			reader.onload = () => {
				chosenImage.setAttribute("src",reader.result);
				imageLoadDisplay.classList.replace("imageLoadVisible", "imageLoadNone");
			}
			fileName.textContent = uploadButton.files[0].name;
		
		}
		
		
		
		
document.getElementById("modal2Form").addEventListener("submit", function(e) {
			
			
			var erreur;
			
			var inputs = this.getElementsByTagName("input");
			console.log(inputs[i]);
			for (var i = 0; i < inputs.length; i++) {
				console.log(inputs[i]);
				if (!inputs[i].value) {
					erreur = "Veuillez renseigner tous les champs";
				}
			}
			
			if (erreur) {
				e.preventDefault();
				document.getElementById("erreur").innerHTML = erreur;
				return false;
			} else {
				alert('Formulaire envoyé !');
			}
			
			var champImage = document.getElementById("upload-button");
			var champTitre = document.getElementById("titreAdd");
			var champCategorie = document.getElementById("categoriesAdd");
		 
			if (!champImage.value) {
				erreur = "Veuillez renseigner une image";
			}
			if (!champTitre.value) {
				erreur = "Veuillez renseigner un Titre";
			}
			if (!champCategorie.value) {
				erreur = "Veuillez renseigner une Catégorie";
			}
			
		
		});
		
		