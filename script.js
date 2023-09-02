const navlinks = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

menu.addEventListener('click', ()=> {
    if (navlinks.classList.contains('active')) {
        navlinks.classList.remove('active')
    }
    else {
        navlinks.classList.add('active')
    }
})