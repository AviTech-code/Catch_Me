let boxes = document.querySelector('.box');

let ballX = 0;
let ballY = 0;


window.addEventListener('load', () => {
    boxes.style.position = 'absolute';
    boxes.style.left = 0;
    boxes.style.top = 0;
    // // circle.style.margin = 55 + 'px';
})

window.addEventListener('mouseover', (e) => {
    if (e.relatedTarget) {
        ballX = Math.random() * 1000;
        ballY = Math.random() * 500;
        console.log(ballX + ' ' + ballY);
    }


    boxes.style.left = ballX + 'px';
    boxes.style.top = ballY + 'px';

})