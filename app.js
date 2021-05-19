let button = document.querySelector("button");

const myFirst = function() {
    alert("I made JavaScript work!");
}

button.addEventListener("click", () => myFirst());