const $cambiar = document.querySelector(".Registrar")

$cambiar.addEventListener("click", function () {
    const $input = document.querySelectorAll("div > input.login__input")
    let num = 0
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
        window.location.href = '../index.html';
    }
})
