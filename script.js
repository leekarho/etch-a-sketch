let isDrawing = false;

function createGrid(num) {
    const container = document.querySelector('#container');

    if (num > 100 || num < 2) {
        alert("Please choose a number between 2 and 100")
        return
    } 

    for (let i=0; i<num; i++) {
        let grid = document.createElement('div');
        grid.classList.add('row');
        container.appendChild(grid)
    }
    
    let row = document.querySelectorAll('.row')
    
    for (let i=0; i<row.length; i++) {
        for (let j=0; j<num; j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row[i].appendChild(square)
        }
    }
    colourGrid()  
}

function colourGrid() {
    togglePen()
    if (isDrawing) {
        let div = document.querySelectorAll('.square')
        div.forEach((squ) => squ.addEventListener('mouseover', function() {
            squ.classList.add('hover')
        }))
    }

}

function reset() {
    let rows = document.querySelectorAll('.row')
    rows.forEach((row) => row.remove())
}

function togglePen() {
    let activePen = document.querySelector('#container')
    activePen.addEventListener('click', function() {
        isDrawing = !isDrawing
        console.log(isDrawing)
    })
}

function etchASketch(num) {
    createGrid(num)
    let button = document.querySelector('.button')
    button.addEventListener('click', function() {
        let gridSize = prompt('Please enter you grid size')
        reset()
        createGrid(gridSize)
    })

    let resetGrid = document.querySelector('.reset')
    resetGrid.addEventListener('click', function() {
        reset()
        createGrid(16)
    })
}

etchASketch(16)