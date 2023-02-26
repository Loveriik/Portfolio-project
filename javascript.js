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

/* Form validation */
const form = document.querySelector('.form')

const textInput = document.querySelector('#text-input')
const textError = document.querySelector('.name-error')
const mailInput = document.querySelector('#form-mail')
const mailError = document.querySelector('.email-error')
const message = document.querySelector('.form-input')

function errorRemover(errorStyle, errorText) {
    errorStyle.classList.remove('error')
    errorText.textContent = ''
}

function setError(inputType, errorText, message) {
    inputType.classList.add('error')
    errorText.textContent = message
}


function formValidation(e) {
    e.preventDefault()

    if (textInput.value === '') {
        setError(textInput, textError, 'Please, enter your name and surname')
    } else {
        errorRemover(textInput, textError)
    }

    if (mailInput.value === '') {
        setError(mailInput, mailError, 'Please, enter your e-mail')
    } else if (!mailInput.value.includes('@')) {
        setError(mailInput, mailError, 'Your e-mail should contain @ sign')
    } else {
        errorRemover(mailInput, mailError)
    }

    if (textInput.value === '' || mailInput.value === '' || !mailInput.value.includes('@')) {
        return
    }
    
}

form.addEventListener('submit', formValidation)

