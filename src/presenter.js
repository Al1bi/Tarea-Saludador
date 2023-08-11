const button = document.querySelector("#saludar-button");
const div = document.querySelector("#saludo-div");
const nombre = document.querySelector("#nombre-usuario");

button.addEventListener("click", (event) =>{

  div.innerHTML = "<h1>Hola "+nombre.value+" 🙂</h1>";

});

