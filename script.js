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
        const rect = document.createElement("div")
        rect.classList.add("rect")
        grid.appendChild(rect)
    }
    rects = document.querySelectorAll(".rect")
    rects.forEach( rect => {
        rect.setAttribute("style", `flex:1 1 ${(100/gridSize)}%;`)
        rect.addEventListener("mouseover", function() {
            rect.classList.add("blue")
        })
    })
}
createGrid(gridSize)






const sizeButton = document.querySelector("#size")
sizeButton.addEventListener("click", function() {
    let size = window.prompt("Chose the size of the grid (e.g. 16x16):")
    sizeButton.textContent = size
    gridSize = Number(size.slice(0, 2))
    createGrid(gridSize)
})