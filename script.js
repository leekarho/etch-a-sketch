function createRow(num) {
    const container = document.querySelector('#container');

    if (num > 99) {
        alert("Grid too big")
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
            square.addEventListener('mousedown', function(e) {
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

let button = document.querySelector('.button')
button.addEventListener('click', function() {
    let gridSize = prompt('Please enter you grid size')
    reset()
    createRow(gridSize)
})

