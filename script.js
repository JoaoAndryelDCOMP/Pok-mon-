const pikachu = document.querySelector('.pikachu');

const jump = () => {
    pikachu.classList.add('jump');
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    
    }, 500);
}

document.addEventListener('keydown', jump);