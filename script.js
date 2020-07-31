const decrease = document.querySelector("#btn-decrease");
const increase = document.querySelector("#btn-increase");
const counter = document.querySelector("#counter");
let count = 0;

window.addEventListener("load", () => {
    updateColor();
})

decrease.addEventListener("click", () => {
    count--;
    updateColor();
});

increase.addEventListener("click", () => {
    count++;
    updateColor();
});



function updateColor() {
    if (count < 0) {
        counter.classList.add("text-red");
    } else if (count === 0) {
        counter.className = "";
    } else {
        counter.classList.add("text-green");
    }
    counter.textContent = count;
}