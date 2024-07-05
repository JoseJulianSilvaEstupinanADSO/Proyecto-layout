

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuList = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('menu__lista--active');
    });
});