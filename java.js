let block = [];
let blockid = 0; 
for (let i = 0; i < 16; i++) {  //Create grid
    for (let j = 0; j < 16; j++) {
        block[blockid] = document.createElement('div');
        block[blockid].classList.add('block');
        block[blockid].setAttribute('id', `${blockid}`);
        document.querySelector(".grid").appendChild(block[blockid]);
        blockid++;
    }
}

for (i = 0; i < block.length; i++) {
    block[i].addEventListener("mouseenter", e => {
        e.target.classList.add('hover')
    })
}