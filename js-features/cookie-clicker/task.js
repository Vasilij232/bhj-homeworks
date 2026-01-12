const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let clickCount = 0;
let isBig = false;

let lastClickTime = null;
let cps = 0;

cookie.addEventListener("click", function(){
    clickCount++;
    counter.textContent = clickCount;

    if (isBig) {
        cookie.width = 200;
        cookie.height = 200;
        isBig = false;
    }else {
        cookie.width = 150;
        cookie.height = 150;
        isBig = true;
    }

    const now = Date.now();
    if (lastClickTime !== null) {
        const timeDiff = (now - lastClickTime) / 1000;
        cps = Math.round(1 / timeDiff * 10) /10;

        speed.textContent = cps;
    }
    lastClickTime = now;

    console.log(clickCount);
    console.log(cps);
});