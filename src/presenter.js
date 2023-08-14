const button = document.querySelector("#saludar-button");
const div = document.querySelector("#saludo-div");
const nombre = document.querySelector("#nombre-usuario");
const gender = document.querySelector("#gender-selector");
const age = document.querySelector("#age-selector");
const btnES = document.querySelector("#es-button");
const btnEN = document.querySelector("#en-button");

const labelName = document.querySelector("#name-label");
const labelGender = document.querySelector("#gender-label");
const labelAge =  document.querySelector("#age-label");
var genderSelector = document.getElementById("gender-selector").options;

button.addEventListener("click", (event) =>{

  var vocativo = "";
  var periodo = "";

  const edad = Number.parseInt(age.value);
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  if(button.value == "Saludar"){
    if( gender.value == "Masculino") vocativo = "Sr. ";
    else if( gender.value == "Femenino") vocativo = "Sra. ";
  }else{
    if( gender.value == "Male") vocativo = "Mr. ";
    else if( gender.value == "Female") vocativo = "Mrs. "; 
  }
  

  if(edad <= 30) vocativo = "";
  
  if(button.value == "Saludar"){
    if(horaActual >= 5 && horaActual <= 11) periodo = "Buenos dias ";
    else if(horaActual >= 12 && horaActual <=18) periodo = "Buenas tardes ";
    else periodo = "Buenas noches ";
  }else{
    if(horaActual >= 5 && horaActual <= 11) periodo = "Good morning ";
    else if(horaActual >= 12 && horaActual <=18) periodo = "Good afternoon ";
    else periodo = "Good evening ";
    
  }

  div.innerHTML = "<h1>" + periodo + vocativo + nombre.value+" 🙂</h1>";

});

btnES.addEventListener("click", (event) =>{

  labelName.innerHTML = "<span id=\"name-label\">Nombre: </span>";
  labelGender.innerHTML = "<span id=\"gender-label\">Genero: </span>";
  labelAge.innerHTML = "<span id=\"age-label\">Edad: </span>";
  genderSelector[0].textContent = "Femenino";
  genderSelector[1].textContent = "Masculino";
  genderSelector[2].textContent = "Otro";
  button.value = "Saludar";
  div.innerHTML = "";
});


btnEN.addEventListener("click", (event) =>{

  labelName.innerHTML = "<span id=\"name-label\">Name: </span>";
  labelGender.innerHTML = "<span id=\"gender-label\">Gender: </span>";
  labelAge.innerHTML = "<span id=\"age-label\">Age: </span>";
  genderSelector[0].textContent = "Female";
  genderSelector[1].textContent = "Male";
  genderSelector[2].textContent = "Other";
  button.value = "Welcome";
  div.innerHTML = "";
});

