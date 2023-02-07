const form = {
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  submit: document.getElementById('submit'),
};
 
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
	  var token = data.token;
	  var isLoggedIn = true;
	  if (data.message === "user not found") {
		alert("Erreur dans l’identifiant ou le mot de passe");
	  } 
		else {
			sessionStorage.setItem("isLoggedIn", isLoggedIn);
			sessionStorage.setItem("token", token);
			//open("index.html");
			location.assign("index.html"); 
	  }		
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
