//Constants
const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
const grid = document.querySelectorAll('.square');

//Functions
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function newGrid() {
     let gridNumber = Number(prompt('How many squares per side would you like?'));
     startingGrid(gridNumber);
}

function startingGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

        container.insertAdjacentElement('beforeend', square);

        square.addEventListener('mouseenter', () => {
            square.classList.add('blue');
        });
    }
}

//Listeners
reset.addEventListener('click', () => {
    removeAllChildNodes(container);
    newGrid();
});

startingGrid(16);