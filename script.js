let gridContainer = document.querySelector('.gridContainer')

function createGrid(sizeOfGrid){
    for(let rows = 0; rows < sizeOfGrid; rows++){
        for(let columns = 0; columns < sizeOfGrid; columns++){
            let gridDiv = document.createElement('div')
            gridDiv.classList.add('grid')
            gridContainer.append(gridDiv)
        };
    };
}


createGrid(16)