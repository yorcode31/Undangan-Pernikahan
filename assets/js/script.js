const card = document.querySelector('.card')

function clickRotate() {
    card.classList.toggle('rotated');;
}
card.addEventListener('click', clickRotate)
