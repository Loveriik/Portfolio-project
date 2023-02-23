/* Burger animation */

const btnBurger = document.getElementById('burger')
const navigation = document.querySelector('.nav-list')

btnBurger.addEventListener('click', function() {
    btnBurger.classList.toggle('open')
    navigation.classList.toggle('slide')
})

/* Section appearance on scrolling */

window.addEventListener('scroll', reveal)

function reveal() {
    const reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const revealTop = reveals[i].getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
}


/* Intersection observer */

// const reveals = document.querySelectorAll('.reveal')
// const appearOptions = {}

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return
//         } else {
//             entry.target.classList.add('active')
//         }
//     })
// }, appearOptions)


/* Switch project and landing */

function landingChange(value) {
    const projectContainer = document.querySelector('.projects-container')
    const landingContainer = document.querySelector('.landing-container')

    if (value === 'projects') {
        landingContainer.style.display = 'none'
        projectContainer.style.display = 'grid'
    } else {
        landingContainer.style.display = 'grid'
        projectContainer.style.display = 'none'
    }

}

/* Scroll up btn */

const scrollUpBtn = document.querySelector('.scroll-up')

window.onscroll = function() {
    if (window.pageYOffset > 700) {
        scrollUpBtn.style.transform = 'scale(1)'
    } else {
        scrollUpBtn.style.transform = 'scale(0)'
    }
}
