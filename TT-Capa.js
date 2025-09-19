const text = "Welcome to Tec-Talk";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typed-text").textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = function () {
    setTimeout(typeEffect, 500);
};