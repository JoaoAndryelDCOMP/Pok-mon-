//SELECTOR PARA COLETAR AS CLASSES
const pikachu = document.querySelector('.pikachu');
const ultraball = document.querySelector('.ultraball');
const botaoReiniciar = document.querySelector('.reiniciar')

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

    if (ultraballPosition >= 478 && pikachuPosition < 50 ) {
        ultraball.style.animation = 'none';
        ultraball.style.left = `${ultraballPosition}px`;

        // pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = './Images/pikachuMorto2.png';
        pikachu.style.width = '85px';
        pikachu.style.marginBottom = ''

        botaoReiniciar.style.visibility = 'visible';
        // clearInterval(loop);

    }
}, 10)

const reiniciarJogo = () =>{
    window.location.reload();
}

document.addEventListener('keydown', jump);
