var generateBtnEl = document.querySelector("#generate")

const randomChar = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNum,
    symbol: randomSym
}
generateBtnEl.addEventListener("click", () => {
    prompt("Please choose a number between 1 and 128."),
    confirm("Please choose 'OK' to select lowercase and 'Cancel' to un-select lowercase"),
    confirm("Please choose 'OK' to select uppercase and 'Cancel' to un-select uppercase"),
    confirm("Please choose 'OK' to select numbers and 'Cancel' to un-select numbers"),
    confirm("Please choose 'OK' to select symbols and 'Cancel' to un-select symbols")
});

function randomLower() {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    return lower[Math.floor(Math.random() * lower.length)]
}

function randomUpper() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upper[Math.floor(Math.random()* upper.length)]
}

function randomNum() {
    const number = '123456789'
    return number[Math.floor(Math.random() * number.length)]
}

function randomSym() {
    const symbol = '!@#$%^&*'
    return symbol[Math.floor(Math.random() * symbol.length)]
}
console.log(randomSym())
