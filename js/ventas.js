

//MODAL-----------------------------------------------------------------------

const $modal = document.getElementById("ventanaModal");


const $boton = document.getElementById("abrirModal");


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


//----------------------------------------------------------------------------