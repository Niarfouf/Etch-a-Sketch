
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
let opacity = true

const colorButton = document.querySelectorAll("input[type=radio]")
let color = "black"
colorButton.forEach(button => {
    button.addEventListener("change", function() {
        if (button.checked) {
            color = button.value
            if (color === "random") {
                color = randomColor()
            }
        }
    })})

function colorFunction(e) {
    if (!isMouseDown) {
        return
    }
    if (opacity) {
        e.target.style.opacity = 1
    } else {
        let opacityValue = Number(e.target.style.opacity)
        if (opacityValue < 1) {
            e.target.style.opacity = opacityValue + 0.1
        }
    }
    if (color === "psyche") {
        e.target.style.backgroundColor = randomColor() 
    }
     else {
        e.target.style.backgroundColor = color 
    }
}
const grid = document.querySelector("#grid")
let gridSize = 16
function createGrid(gridSize) {
    let rects = document.querySelectorAll(".rect")
    if (rects) {
        rects.forEach( rect => {
            grid.removeChild(rect)
        })
    }

    for (let i = 0; i < (gridSize*gridSize); i++) {
        const divRect = document.createElement("div")
        divRect.classList.add("rect")
        divRect.setAttribute("style", `flex:1 1 ${(100/gridSize)}%;`)
        divRect.style.opacity = 0
        divRect.addEventListener("mouseover", colorFunction) 
        grid.appendChild(divRect)
    }  
}
createGrid(gridSize)
let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);
const sizeButton = document.querySelector("#range")
sizeButton.addEventListener("change", function(e) {
    let size
    size = e.target.value
    gridSize = Number(size)
    sizeButton.textContent = `${gridSize}x${gridSize}`
    createGrid(gridSize)
    
})

const reset = document.querySelector("#reset")
reset.addEventListener("click", function() {
    document.querySelector(".menu").reset()
})

const checkBox = document.querySelector("input[type=checkbox]")
checkBox.addEventListener("change", function() {
    if (checkBox.checked) {
        opacity = false
    } else {
        opacity = true
        
        }
})