for (let i = 0; i < 16; i++) {
    for (let j =0; j < 16; j++) {
        const block = document.createElement('div');
        block.classList.add('block')
        document.querySelector(".grid").appendChild(block);
    }
}
