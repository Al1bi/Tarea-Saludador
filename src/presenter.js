const button = document.querySelector("#saludar-button");
const div = document.querySelector("#saludo-div");
const nombre = document.querySelector("#nombre-usuario");
const gender = document.querySelector("#gender-selector");
const age = document.querySelector("#age-selector");

button.addEventListener("click", (event) =>{

  var vocativo = "";
  var periodo = "";

  const edad = Number.parseInt(age.value);
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();


  if( gender.value == "Masculino") vocativo = "Sr. ";
  else if( gender.value == "Femenino") vocativo = "Sra. ";

  if(edad <= 30) vocativo = "";

  if(horaActual >= 5 && horaActual <= 11) periodo = "Buenos dias ";
  else if(horaActual >= 12 && horaActual <=18) periodo = "Buenas tardes ";
  else periodo = "Buenas noches ";

  div.innerHTML = "<h1>" +periodo+vocativo+nombre.value+" 🙂</h1>";

});

