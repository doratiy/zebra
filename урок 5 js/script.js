let border = document.querySelector(".road");
let white = document.querySelectorAll(".white");
let black = document.querySelectorAll(".black");
let button_up = document.querySelector(".button_up");
let button_down = document.querySelector(".button_down");

border.style.border = "2px solid black";
black.forEach(element => {
    element.style.backgroundColor = "black"
});

function add_arrow(direction) {
    white.forEach(element => {
        element.innerHTML = "";
        let img = document.createElement("img");
        img.src = "arrow.svg"; 
        img.style.display = "block";
        img.style.margin = "0 auto"
        img.style.width = "40px";
        img.style.height = "40px";
        if (direction==="down") {
            img.style.transform = "rotate(180deg)";
        }
        element.appendChild(img);
    });
}

button_down.addEventListener("click", () => add_arrow("down"));
button_up.addEventListener("click", () => add_arrow("up"));