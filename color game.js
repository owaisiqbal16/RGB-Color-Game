var noOfSquares = 6
var pickedColor;
var color;

var squares = document.querySelectorAll(".square")
var rgbDisplay = document.querySelector("#rgbDisplay")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var mode = document.querySelectorAll(".mode")

init();

function init() {
    setUpModeBtn();
    setUpSquares();
    resetAll()
}

function setUpModeBtn() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? noOfSquares = 3 : noOfSquares = 6
            resetAll();
        })
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor
            if (clickedColor === pickedColor) {
                message.innerHTML = "Correct"
                changeColor(clickedColor)
                h1.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again?"
            }
            else {
                this.style.backgroundColor = "#232323";
                message.innerHTML = "Try again"
            }
        })
    }
}

reset.addEventListener("click", function () {
    resetAll()
})

function resetAll() {
    color = generateRandomColors(noOfSquares)
    pickedColor = pickColor()
    rgbDisplay.textContent = " " + pickedColor
    for (var i = 0; i < squares.length; i++) {
        if (color[i]) {
            squares[i].style.backgroundColor = color[i]
            squares[i].style.display = "block"
        }
        else {
            squares[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = 'steelBlue'
    this.textContent = "New Colors"
    message.innerHTML = "";
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * color.length)
    return color[random];
}

function generateRandomColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")"
        arr.push(rgb);
    }

    return arr;
}