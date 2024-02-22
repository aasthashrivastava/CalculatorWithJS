
let display = document.getElementById('display');
let result = document.getElementById('result');
let deleteValue = document.getElementById('delete');
let solve = document.getElementById('solve');
let buttons = document.querySelectorAll('.btn')
let clearAll = document.getElementById('clear');

buttons.forEach((elem) => {
    elem.addEventListener("click", function (e) {
        if (display.textContent === '0' || result.textContent) {
            display.textContent = e.target.textContent
            result.textContent = ""
        } else {
            display.textContent += e.target.textContent
        }
    });
})

clearAll.onclick = function clear() {
    display.textContent = ""
    result.textContent = ""
}

deleteValue.onclick = function deleteLastValue() {
    display.textContent = display.textContent.slice(0, -1)
}

solve.onclick = function solve() {
    try {
        let calculatedValue = display.textContent
        let calculatedResult = eval(calculatedValue)
        result.textContent = calculatedResult
    } catch (error) {
        result.textContent = "Error"
    }
} 
