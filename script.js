let container = document.querySelector('.container');

for(let i = 1; i <= 3003; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}