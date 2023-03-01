/* Burger animation */

const btnBurger = document.getElementById('burger')
const navigation = document.querySelector('.nav-list')

btnBurger.addEventListener('click', function() {
    btnBurger.classList.toggle('open')
    navigation.classList.toggle('slide')
})


/* Closing burger after using nav links */

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach( link => {
    link.addEventListener('click', function() {
        btnBurger.classList.remove('open')
        navigation.classList.remove('slide')
    })
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


/* Form validation  */

function errorRemover(errorStyle, errorText) {
    errorStyle.classList.remove('error')
    errorText.textContent = ''
}

function setError(inputType, errorText, message) {
    inputType.classList.add('error')
    errorText.textContent = message
}


const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const textInput = document.querySelector('#text-input')
    const textError = document.querySelector('.name-error')
    const mailInput = document.querySelector('#form-mail')
    const mailError = document.querySelector('.email-error')
    const message = document.querySelector('#form-textArea')

    const module = document.querySelector('.module')
    const moduleCloseBtn = document.querySelector('.module-btn')

    moduleCloseBtn.addEventListener('click', () => {
        module.style.display = 'none'
    })

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
        return false
    }

    let body =`
    <b>Name: </b> ${textInput.value}
    <br>
    <b>Email: </b> ${mailInput.value}
    <br>
    <br>
    <b>Message: </b> ${message.value}
    <br>
    `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sancho2140@gmail.com",
        Password : "8C4F712E3DADB3E2DB5B9921525EDF762B83",
        To : 'sancho2140@gmail.com',
        From : "sancho2140@gmail.com",
        Subject : 'Portfolio form: E-mail from ' + mailInput.value,
        Body : body
    }).then(
        module.style.display = 'grid'
    );
})
