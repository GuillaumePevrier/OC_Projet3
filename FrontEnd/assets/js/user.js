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
	  console.log(data);
	  // code here //
	  if (data.message === "user not found") {
		alert("Erreur dans l’identifiant ou le mot de passe"); /*displays error message*/
	  } else {
		window.open(
		  "index.html"
		); /*opens the target page while Id & password matches*/
	  }
	})
	.catch((err) => {
	  console.log(err);
	});
});