const container = document.querySelector('#container');

for (let i=0; i<16; i++) {
    let grid = document.createElement('div');
    grid.classList.add('row');
    container.appendChild(grid)
}

let row = document.querySelectorAll('.row')

for (let i=0; i<row.length; i++) {
    for (let j=0; j<16; j++) {
        let column = document.createElement('div')
        column.textContent = "1"
        row[i].appendChild(column)
    }
}