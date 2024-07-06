
import {id} from "./login.js"

//MODAL-----------------------------------------------------------------------

const $modal = document.getElementById("ventanaModal");


const $boton = document.querySelector(".cambiar__contraseña");


const $cerrar = document.getElementById("Cerrar__Modal");


$boton.addEventListener("click",function() {
  $modal.style.display = "block";
});

$cerrar.addEventListener("click", function () {
    $modal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
});

console.log(id);


/* Validar Inputs del modal cambair contraseña que no esten vacios */ 

const $cambiar = document.querySelector(".Cambiar")

$cambiar.addEventListener("click", async function () {
    const $input = document.querySelectorAll("div.div__form > input.modal__input")
    $input.forEach(x => {
        if (x.value.length == 0) {
            x.classList.add("alert")
        }
        else{
            x.classList.remove("alert")
        }
    });
})

//----------------------------------------------------------------------------