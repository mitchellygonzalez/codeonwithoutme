const timer = document.querySelector('#timer')

const STARTING_MIN= 5
var time = STARTING_MIN * 60

setInterval(() => {
    updateTimer()
}, 1000);

function updateTimer () {
    let minutes = time/60
    let seconds = time - minutes * 60
    timer.innerHTML = `${minutes}:${seconds}`;
    time -= 1
}
