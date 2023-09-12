let field = document.getElementById('field');
let kubiks = document.getElementById('kubiks');
let btn = document.getElementById('poga');

let counter = 0;

btn.addEventListener('click', function(){
    counter++;
    btn.textContent = "Spied te: " + counter;

    let maxX = field.clientWidth - kubiks.offsetWidth - 100;
    let maxY = field.clientHeight - kubiks.offsetHeight - 100;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    let randomRotation = Math.random() * 360;

    let percentX = (randomX / field.clientWidth) * 100 + 2;
    let percentY = (randomY / field.clientHeight) * 100 + 2;

    kubiks.style.left = percentX + "%";
    kubiks.style.top = percentY + "%";
    kubiks.style.transform = `rotate(${randomRotation}deg)`;

    console.log(percentX);
    console.log(percentY);
})