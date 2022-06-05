// create initial grid and assign each block to a variable in array
let block = [];
const grid = document.querySelector('.grid');
makeGrid(16);
toBlack();

// get input from user
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', () => makeGrid(document.getElementById("input").value));
let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click', () => toRainbow());
let classicBtn = document.getElementById("classic");
classicBtn.addEventListener('click', () => toBlack());
let eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener('click', () => eraser());



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
    else if (int < 1) {int = 16}
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
    toBlack();
}

function toBlack() {
    // listen for mouseover, add .hover css class when detected
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", e => {
            e.target.style.backgroundColor= `rgb(0, 0, 0`;
            e.target.style.opacity = "1";
        })
    }
    console.log("Color set to black")
}

function eraser() {
    // listen for mouseover, add .hover css class when detected
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", e => {
            e.target.style.opacity = "0";
        })
    }
    console.log("Eraser mode")
}

function toRainbow() {
        // listen for mouseover, add .hover css class when detected
        for (i = 0; i < block.length; i++) {
            block[i].addEventListener("mouseenter", e => {
                e.target.style.opacity = "1";
                let newR = randomColor();
                let newG = randomColor();
                let newB = randomColor();
                e.target.style.backgroundColor= `rgb(${newR}, ${newG}, ${newB})`;
            })
        }
        console.log("Color set to rainbow")
}
    function randomColor() {
    console.log("color created")
    return(Math.floor(Math.random() * 255))
}

let allBtns = document.querySelectorAll(".btn");
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("mouseenter", e => {
        e.target.classList.add("highlight");
    })
    allBtns[i].addEventListener("mouseout", e => {
        e.target.classList.remove("highlight");
    })
}
