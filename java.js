// variable to determinue which event listerners are on
let classicOn = false;
let rainbowOn = false;
let shaderOn = false;
let erase = false;
// create initial grid and assign each block to a variable in array
let block = [];
const grid = document.querySelector('.grid');
makeGrid(16);

// add hover features to all buttons. See .highlight in stylesheet
let allBtns = document.querySelectorAll(".btn");
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("mouseenter", e => {
        e.target.classList.add("highlight");
    })
    allBtns[i].addEventListener("mouseout", e => {
        e.target.classList.remove("highlight");
    })
}


// get input from user
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', () => makeGrid(document.getElementById("input").value));
let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click', () => toRainbow());
let classicBtn = document.getElementById("classic");
classicBtn.addEventListener('click', () => toBlack());
let eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener('click', () => eraser());
let shaderBtn = document.getElementById("shader");
shaderBtn.addEventListener('click', () => shade());



function resetGrid() {
    // remove all current childeren of grid
    if (grid.firstChild) {
        console.log("Reset button pressed");
        while(grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
    console.log("...Previous grid deleted")
    }
}

function makeGrid(int) {
    if (int > 100) {alert("Please enter a number less than 100"); return 1;}
    else if (int < 1) {int = 16}
    resetGrid();
    console.log(`...Making new grid ${int}x${int}`);
    let blockid = 0; 
    // set css grid size
    grid.style.gridTemplateColumns = `repeat(${int}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${int}, 1fr)`; 
    console.log("...CSS grid set");
    // create new grid childeren
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            block[blockid] = document.createElement('div');
            block[blockid].classList.add('block');
            block[blockid].setAttribute('id', `${blockid}`);
            document.querySelector(".grid").appendChild(block[blockid]);
            block[blockid].style.filter = `brightness(1)`;
            blockid++;
        }
    }
    console.log(`...${blockid} divs created`)
    toBlack();
}

function toBlack() {
    // listen for mouseover
    classicOn = true;
    rainbowOn = false; 
    shaderOn = false;
    erase = false;
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", function black(e) {
            if (classicOn) {
                e.target.style.backgroundColor= `rgb(0, 0, 0`;
                e.target.style.opacity = "1";
            }
        })
    }
    console.log("Classic mode")
}

function eraser() {
    // listen for mouseover
    classicOn = false;
    rainbowOn = false; 
    shaderOn = false;
    erase = true;
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", e => {
            if(erase) {
                e.target.style.opacity = "0";
            }
        })
    }
    console.log("Eraser mode")
}

function toRainbow() {
        // listen for mouseover
        classicOn = false;
        rainbowOn = true; 
        shaderOn = false;
        erase = false;
        for (i = 0; i < block.length; i++) {
            block[i].addEventListener("mouseenter", function newRGB(e) {
                if(rainbowOn) {
                    e.target.style.opacity = "1";
                    let newR = randomColor();
                    let newG = randomColor();
                    let newB = randomColor();
                    e.target.style.backgroundColor= `rgb(${newR}, ${newG}, ${newB})`;
                    e.target.style.filter = `brightness(1)`;
                }
            })
        }
        console.log("Rainbow mode")
}
    function randomColor() {
    return(Math.floor(Math.random() * 255))
}

function shade() {
    classicOn = false;
    rainbowOn = false; 
    shaderOn = true;
    erase = false;
    for (i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", function shader(e) {
            if(shaderOn) {
                let newBrightness = (parseFloat(e.target.style.filter.slice(11, -1))) - 0.1;
                e.target.style.filter = `brightness(${newBrightness})`;
            }
        })    
    }
    console.log("Shader mode")
}