// create initial grid and assign each block to a variable in array
let block = [];
const grid = document.querySelector('.grid');
makeGrid(16);

// get input from user
let gridSize = document.getElementById("input").value;
gridSize = parseInt(gridSize);
let btn = document.getElementById("reset");
btn.addEventListener('click', () => makeGrid(document.getElementById("input").value));  //ADDING THIS LINE BREAKS CODE

function resetGrid() {
    // remove all current childeren of grid
    if (grid.firstChild) {
        console.log("Reset button pressed");
        while(grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
    console.log("Previous grid deleted")
    }
}

function makeGrid(int) {
    if (int > 100) {alert("Please enter a number less than 100"); return 1;}
    resetGrid();
    console.log(`Making new grid ${int}x${int}`);
    let blockid = 0; 
    // set css grid size
    grid.style.gridTemplateColumns = `repeat(${int}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${int}, 1fr)`; 
    console.log("CSS grid set");
    // create new grid childeren
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            block[blockid] = document.createElement('div');
            block[blockid].classList.add('block');
            block[blockid].setAttribute('id', `${blockid}`);
            document.querySelector(".grid").appendChild(block[blockid]);
            blockid++;
        }
    }
    console.log(`${blockid} divs created`)
    // listen for mouseover, add .hover css class when detected
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", e => {
            e.target.classList.add('hover')
        })
    }
    console.log("Hover class added")
}