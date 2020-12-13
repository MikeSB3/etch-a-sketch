const container = document.querySelector('#container');
const reset = document.querySelector('.reset');

for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const grid = document.querySelectorAll('.square');

grid.forEach((square) => {
   square.addEventListener('mouseenter', () => {
        square.classList.add('blue');
   });
});

reset.addEventListener('click', () => {
   console.log('clicked button');
});