let yuyo = document.getElementById('pasto')
let gg = document.getElementById('nube')


window.addEventListener('scroll', function () {
    let value = window.scrollX;
    yuyo.style.top = value * 0.05 + 'px';
    yuyo.style.right = value * 0.05 + 'px';
    gg.style.left = value * 0.03 + 'px';
})

/* Cambio de animacion */
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
        document.querySelector('.pokemonEve').classList.add('face-right');
    } else {
        document.querySelector('.pokemonEve').classList.remove('face-right')
    }
})
/* Movimiento */
let eve = document.getElementById('evee')
let cantidad = 0

window.addEventListener('keydown', (e) => {
    let tecla = e.key
    console.log(e.key)
    switch (tecla) {
        case 'ArrowRight':
            cantidad += 38
            eve.style.transform = `translateX(${cantidad}px)`
            break;
        case 'ArrowLeft':
            cantidad -= 38
            eve.style.transform = `translateX(${cantidad}px)`
        default:
            break;
    }
})