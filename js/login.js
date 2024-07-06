
export {id}

let id = Math.floor(Math.random() * 5)

document.addEventListener('DOMContentLoaded', function() {
    const $cambiar = document.querySelector(".Ingresar");

    $cambiar.addEventListener("click", function() {
        const $input = document.querySelectorAll("div > input.login__input");
        let num = 0;
        $input.forEach(x => {
            let p = x.nextElementSibling
            if (x.value.length === 0) {
                x.classList.add("alert"); 
                p.classList.add("vacio--ver")        
            } else {
                x.classList.remove("alert");
                p.classList.remove("vacio--ver")   
                num += 1;
            }
        });

        if (num === $input.length) {
            window.location.href = 'Vistas/inicio.html';
        }
    });
});
