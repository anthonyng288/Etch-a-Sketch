let gridContainer = document.querySelector('.gridContainer')

function createGrid(sizeOfGrid){
    for(let rows = 0; rows < sizeOfGrid; rows++){
        for(let columns = 0; columns < sizeOfGrid; columns++){
            let gridDiv = document.createElement('div')
            gridDiv.classList.add('grid')
            gridContainer.append(gridDiv)
            gridDiv.addEventListener('mouseover', () => {
                gridDiv.setAttribute('style', 'background-color: black;')
            })
        };
    };




}
createGrid(16);

let resetButton = document.querySelector('.resetButton')


resetButton.addEventListener('click', () => {
    document.querySelector('.grid').remove();
})


const cells = document.querySelectorAll('.grid');

console.log(cells.length)


