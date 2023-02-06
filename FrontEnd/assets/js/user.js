const form = {
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  submit: document.getElementById('submit'),
};

var isLoggedIn = false;
 sessionStorage.setItem("isLoggedIn", isLoggedIn);
 
let button = form.submit.addEventListener("click", (e) => {
  e.preventDefault();
 const login = "http://localhost:5678/api/users/login";

  fetch(login, {
	method: "POST",
	headers: {
	   'Accept': 'application/json, text/plain, */*',
	   'Content-Type': 'application/json',
	},
	body: JSON.stringify({
	  email: form.email.value,
	  password: form.password.value,
	}),
  })
	.then((response) => response.json())
	.then((data) => {
	  
	  if (data.message === "user not found") {
		alert("Erreur dans l’identifiant ou le mot de passe");
	  } 
		if (sessionStorage.getItem("loggedIn") === "true") {
		isLoggedIn = true;
		}
		else {
			location.assign("index.html"); 
	  }
		var token = data.token;
		sessionStorage.setItem("token", token);
		
		
		console.log(token, isLoggedIn);
	})
	.catch((err) => {
	  console.log(err);
	});
});




//var isLoggedIn = false;
//if (localStorage.getItem("loggedIn") === "true") {
//	isLoggedIn = true;
//}
//if (isLoggedIn) {
//	console.log("L'utilisateur est connecté");
//} else {
//	console.log("L'utilisateur n'est pas connecté");
//}
