//SELECTOR PARA COLETAR AS CLASSES
const pikachu = document.querySelector('.pikachu');
const ultraball = document.querySelector('.ultraball');

//
const jump = () => {
    pikachu.classList.add('jump');
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    
    }, 500);
}

const loop = setInterval(() => {
    const ultraballPosition = ultraball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    if (ultraballPosition >= 478 && pikachuPosition < 40) {
        ultraball.style.animation = 'none';
        ultraball.style.left = `${ultraballPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = './Images/pikachuMorto.png';
        pikachu.style.width = '90px';
        pikachu.style.marginBottom = '-13px'
    }
}, 10)

 
document.addEventListener('keydown', jump);