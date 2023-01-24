const toggleButton = document.getElementsByClassName('fa-bars')[0]
const navbar = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})