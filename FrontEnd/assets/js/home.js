
let worksData = [];

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
		 <div id="${works.userId}"></div>
		 <img src="${works.imageUrl}" crossOrigin="anonymous"/>
		 <figcaption>${works.title}</figcaption>
		 </figure>
		`,
	)
	.join("");
};

worksDisplay();
