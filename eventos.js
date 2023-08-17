function saludo(event) {
  alert("Hola!");
  event.stopPropagation(); // Evita que el evento se propague hacia arriba en el DOM
}

document.addEventListener("DOMContentLoaded", function(){
  let elDiv = document.getElementById("eldivboton");
  let elBoton = elDiv.querySelector("button");

  elBoton.addEventListener("click", saludo);
  elDiv.addEventListener("click", ClickDiv);
});
