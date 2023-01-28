
fetch('http://localhost:5678/api/works')
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
  console.log(error);
});