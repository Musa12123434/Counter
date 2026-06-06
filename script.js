let textplace = document.querySelector('p');
let incrementButton = document.getElementById("increment")
let decrementButton = document.getElementById("decrement")
let count = 0;

incrementButton.addEventListener("click", () => {
    count += 1;
    textplace.textContent = count;
})

decrementButton.addEventListener("click", () => {
    count -= 1;
    textplace.textContent = count;
})