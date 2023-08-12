const button = document.querySelector("#saludar-button");
const div = document.querySelector("#saludo-div");
const nombre = document.querySelector("#nombre-usuario");
const gender = document.querySelector("#gender-selector")

button.addEventListener("click", (event) =>{

  var vocativo = "";

  if( gender.value == "Masculino") vocativo = "Sr. ";
  else if( gender.value == "Femenino") vocativo = "Sra. "

  div.innerHTML = "<h1>Hola "+vocativo+nombre.value+" 🙂</h1>";

});

