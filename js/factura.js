const $dom = document;

//Cambiar colores de las filas impares De las tablas //

(() =>{
    const $filas = $dom.querySelectorAll("tbody.body__tabla > tr.fila__tabla")
    $filas.forEach((fila,index) =>{
        if (index % 2 !== 0) {
            fila.style.background = "#DBDADA"
        }
    })
})
();


//Abrir modal y poner el id y fecha de facturachion el en modal//------------

const table = $dom.querySelector('.tabla--factura');

table.addEventListener('click', function(event) {
   if (event.target.classList.contains('FacturaDetalles')) {
    const $modal = $dom.getElementById("ventanaModal");
    $modal.style.display = "block";
     const row = event.target.closest('tr');
     const $id = row.querySelector('td.IdFactura');
     const $fecha = row.querySelector("td.Fecha")
     let id = Number($id.innerText);
     let fecha = $fecha.innerText;
     const $id_form = $dom.querySelector('.Numero_factura');
     const $fecha_factura = $dom.querySelector(".fecha__factura")
     $id_form.innerText = "Numero: " + id;
    $fecha_factura.innerText = "Fecha: " + fecha
   }
 });


 //CERRAR MODAL

 const $modal = $dom.getElementById("ventanaModal")

 const $cerrar = $dom.querySelector(".cerrar__x");
 
 
 $cerrar.addEventListener("click", function () {
      $modal.style.display = "none"
 })
 window.addEventListener("click",function(event) {
    if (event.target == $modal) {
      $modal.style.display = "none";
    }
  });
 

//----------------------------------------------------------------------------
