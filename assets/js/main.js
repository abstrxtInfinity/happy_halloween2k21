// ! Show Menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// !Close menu on click

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ! Swiper Js

let swiper = new Swiper(".home-swiper", {

    spaceBetween: 16,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
    },
});

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 30,
    loop: 'true',
    centeredSlides: 'true',
    slidesPerView: 'auto',

});


// ! Change background header

function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)


// ! Scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ! Show scroll up icon
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 460)
        scrollUp.classList.add('show-scroll')
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ! Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home-swiper , .new-swiper , .newsletter__container')
sr.reveal('.category__data , .trick__content , .footer__content', { interval: 100 })
sr.reveal('.about__data , .discount__img', { origin: 'left' })
sr.reveal('.about__img , .discount__data', { origin: 'right' })