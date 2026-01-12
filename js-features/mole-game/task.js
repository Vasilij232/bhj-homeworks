function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deadElement.textContent = dead;
            if (dead === 10) {
                alert('Победа!');
                dead = 0;
                lost = 0;
                deadElement.textContent = dead;
                lostElement.textContent = lost;
            }
        } else {
            lost++;
            lostElement.textContent = lost;
            if (lost === 5) {
                alert('Поражение!');
                dead = 0;
                lost = 0;
                deadElement.textContent = dead;
                lostElement.textContent = lost;
            }
        }
    });
}
