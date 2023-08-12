const button = document.querySelector("#saludar-button");
const div = document.querySelector("#saludo-div");
const nombre = document.querySelector("#nombre-usuario");
const gender = document.querySelector("#gender-selector");
const age = document.querySelector("#age-selector");

button.addEventListener("click", (event) =>{

  var vocativo = "";
  const edad = Number.parseInt(age.value);

  if( gender.value == "Masculino") vocativo = "Sr. ";
  else if( gender.value == "Femenino") vocativo = "Sra. ";

  if(edad <= 30) vocativo = "";

  div.innerHTML = "<h1>Hola "+vocativo+nombre.value+" 🙂</h1>";

});

