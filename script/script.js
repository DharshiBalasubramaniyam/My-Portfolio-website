const header = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");
const navLinks = header.querySelectorAll("a");
const sections = document.querySelectorAll("section");
const preloader = document.querySelector(".preloader");
const logo = document.querySelector('.logo');
console.log(menu);

document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(()=>{
        preloader.style.display = "none";
        sections.forEach(section => {
            section.style.opacity = "1";
        });
        sections[0].classList.add("reveal");
    }, 2000)
})


navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        header.classList.remove('active');
    })
});

menu.addEventListener('click', handleNav)

function handleNav() {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
        document.querySelector('.logo').innerHTML = `<a href="#home">Dharshi</a><i class="fa fa-bars menu" aria-hidden="true" onclick="handleNav()"></i>`;
        console.log(logo);
    }
    else {
        header.classList.add('active');
        document.querySelector('.logo').innerHTML = `<a href="#home">Dharshi</a><i class="fa fa-times menu" aria-hidden="true" onclick="handleNav()"></i>`;
    }
}

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let sectionOffset = section.offsetTop - 300;
        let sectionHeight = section.offsetHeight;

        let id = section.getAttribute('id');
        if (top >= sectionOffset && top <= sectionHeight + sectionOffset) {
            header.querySelector('.active').classList.remove('active');
            header.querySelector('#' + id + '-link').classList.add('active');
            section.classList.add("reveal");
        }
        else {
            section.classList.remove("reveal");

        }

    });
    
})

var swiper = new Swiper(".projects-slider", {
    cssMode: true,
    slidesPerView:3,
    spaceBetween:20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        750: {
            slidesPerView:2,
        },
        1000: {
            slidesPerView:3,
        },
    },
});



