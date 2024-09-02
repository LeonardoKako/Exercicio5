const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    calcula();
});

let numeroA = document.querySelector('#numberA');
let numeroB = document.querySelector('#numberB');
let msg = document.querySelector('.msg');

function calcula() {
    if (numeroA.value > numeroB.value) {
        msg.style.display = 'block'
        msg.innerHTML = "O número A é maior que o número B, tente outro valor!"
        msg.style.background = 'red'
    } else {
        msg.style.display = 'block'
        msg.innerHTML = "O número B é maior que o número A"
}};

const reset = document.querySelector('#reset')
reset.addEventListener('click', function() {
        numeroA.value = ''
        numeroB.value = ''
        msg.style.display = 'none'

})
