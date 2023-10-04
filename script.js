//SELECTOR PARA COLETAR AS CLASSES
const pikachu = document.querySelector('.pikachu');
const ultraball = document.querySelector('.ultraball');
const jumpClass = document.querySelector('.jump')
const botaoReiniciar = document.querySelector('.reiniciar')


let score = 0;
//

const jump = () => {
    pikachu.classList.add('jump');
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    
    }, 500);
}

const loop = setInterval(() => {
    const ultraballPosition = ultraball.offsetLeft;
    // console.log(ultraballPosition)
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    if (ultraballPosition >= 478 && pikachuPosition < 20) {
        ultraball.style.animation = 'none';
        ultraball.style.left = `${ultraballPosition}px`;

        // pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = './Images/pikachuMorto2.png';
        pikachu.style.width = '85px';
        pikachu.style.marginBottom = ''
     
        botaoReiniciar.style.visibility = 'visible';

        // jogando = false;
        clearInterval(loop);
        // console.log(jogando)

    } else if (ultraballPosition <=-40){
        score += 1;
        console.log(score)
    }


}, 10)

const reiniciarJogo = () =>{
    window.location.reload();
}

//CÓDIGO PARA DESATIVAR AS TECLAS ALT E F12
document.addEventListener("keydown", function(event) {
    if (event.key === "Alt" || event.key === "F12") {
      event.preventDefault(); // Impede o comportamento padrão da tecla "Alt"
      // Você pode adicionar aqui qualquer código personalizado que desejar executar
      // quando a tecla "Alt" for pressionada.
    }
  });

document.addEventListener('keydown', jump);
