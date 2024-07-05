
const $dom = document;

/*Se cambia el color de las filas inpares */
(() =>{
    const $filas = $dom.querySelectorAll("tbody.body__tabla > tr.fila__tabla")
    $filas.forEach((fila,index) =>{
        if (index % 2 !== 0) {
            fila.style.background = "#DBDADA"
        }
    })
})
();

const $modal = $dom.getElementById("ventanaModal");








/*Se abra el modal con toda la imformacion de la fila de la tabla
en la que se encontraba el boton editar*/ 

const table = $dom.querySelector('.tabla--factura');

table.addEventListener('click', function(event) {
   if (event.target.classList.contains('button__tabla')) {
    const $modal = $dom.getElementById("ventanaModal");
    const $btn = $dom.querySelector(".button__modal--inventario")
    $btn.innerText = "Guardar Cambios"


    $modal.style.display = "block";
    const row = event.target.closest('tr');
    const $id = row.querySelector('td.IdUsuario');
    const $nombre = row.querySelector("td.NombreUsuario")
    const $documento = row.querySelector("td.DocumentoUsuario")
    const $rol = row.querySelector("td.Rol")
    const $user = row.querySelector("td.UsuarioUser")
    const $tel = row.querySelector("td.TelUser")
    const $direccion = row.querySelector("td.DireccionUser")
    const $email = row.querySelector("td.EmailUser")

    

    let id = Number($id.innerText);
    let nombre = $nombre.innerText;
    let documento = $documento.innerText;
    let rol = Number($rol.innerText);
    let user = $user.innerText;
    let tel = $tel.innerText;
    let direccion = $direccion.innerText;
    let email = $email.innerText;

    const $id_user = $dom.querySelector('.form_Id');
    const $nombre_user = $dom.querySelector(".form_Nombre")
    const $doc_user = $dom.querySelector(".form_Doc")
    const $rol_user = $dom.querySelector(".form_Rol")
    const $user_user = $dom.querySelector(".form_User")
    const $tel_user = $dom.querySelector(".form_Tel")
    const $direc_user = $dom.querySelector(".form_Direc")
    const $email_user = $dom.querySelector(".form_Email")


    $id_user.value = id;
    $nombre_user.value = nombre;
    $doc_user.value = documento;
    if (rol === 1) {
        $rol_user.value = "valor1";
    }
    else{
        if (rol === 2) {
            $rol_user.value = "valor2";
        }
        else{
            $rol_user.value = "sleccionar";
        }
    }
    $user_user.value = user;
    $tel_user.value = tel;
    $direc_user.value = direccion;
    $email_user.value = email;

    $id_user.setAttribute("readonly","");
    $nombre_user.setAttribute("readonly","");
    $doc_user.setAttribute("readonly","")
    $user_user.setAttribute("readonly","")
    $tel_user.setAttribute("readonly","")
    $direc_user.setAttribute("readonly","")
    $email_user.setAttribute("readonly","")

   }
 });




/**
 * Se crean los eventos para cerrar el modal
 * 
 */

const $cerrar = $dom.querySelector(".cerrar__x");

const $cancelar = $dom.querySelector(".modal__cancelar")

$cerrar.addEventListener("click", function () {
    $modal.style.display = "none"
})
$cancelar.addEventListener("click", function () {
    $modal.style.display = "none"
})
window.addEventListener("click",function(event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
});