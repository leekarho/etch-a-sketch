function createRow(num) {
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
            square.addEventListener('mouseover', function(e) {
                square.classList.add('hover')
            })
            row[i].appendChild(square)
        }
    }
}

function reset() {
    let rows = document.querySelectorAll('.row')
    rows.forEach((row) => row.remove())
}

function etchASketch(num) {
    createRow(num)
    let button = document.querySelector('.button')
    button.addEventListener('click', function() {
        let gridSize = prompt('Please enter you grid size')
        reset()
        createRow(gridSize)
    })

    let resetGrid = document.querySelector('.reset')
    resetGrid.addEventListener('click', function() {
        reset()
        createRow(16)
    })
}

etchASketch(16)