/* Burger animation */

const btnBurger = document.getElementById('burger')
const navigation = document.querySelector('.nav-list')

btnBurger.addEventListener('click', function() {
    btnBurger.classList.toggle('open')
    navigation.classList.toggle('slide')
})

/* Intersection observer */

const reveals = document.querySelectorAll('.reveal')
const motions = document.querySelectorAll('.motion')

const appearOptions = {
    threshold:0.25,
    rootMargin:'0px 0px -200px 0px'
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('active')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions)

reveals.forEach(reveal => {
    appearOnScroll.observe(reveal)
})

motions.forEach(entry => {
    appearOnScroll.observe(entry)
})


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
