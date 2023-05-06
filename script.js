const container = document.querySelector('#container');

for (let i=0; i<16; i++) {
    let grid = document.createElement('div');
    grid.classList.add('row');
    container.appendChild(grid)
}

let row = document.querySelectorAll('.row')

for (let i=0; i<row.length; i++) {
    for (let j=0; j<16; j++) {
        let square = document.createElement('div')
        square.classList.add('square')
        row[i].appendChild(square)
    }
}

let squares = document.querySelectorAll('.square')
squares.forEach((square) => square.addEventListener('mousemove', function(e) {
    square.classList.add('hover')
}))