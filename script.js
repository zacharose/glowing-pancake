var generateBtnEl = document.querySelector("#generate")


generateBtnEl.addEventListener("click", () => {
    var promptLength = prompt("Please choose a number between 8 and 128.")
        
        
    if (promptLength > 128 || promptLength < 8) {
        alert("password not within parameters")
        promptLength = prompt("Please choose a number between 8 and 128.")
        console.log(promptLength)
    }
    var confirmLower = confirm("Please choose 'OK' to select lowercase and 'Cancel' to un-select lowercase")
    
    var confirmUpper = confirm("Please choose 'OK' to select uppercase and 'Cancel' to un-select uppercase")
    
    var confirmNum = confirm("Please choose 'OK' to select numbers and 'Cancel' to un-select numbers")
    
     var confirmSym = confirm("Please choose 'OK' to select symbols and 'Cancel' to un-select symbols")
    
    
    
    if (confirmLower === true && confirmUpper === true && confirmNum === true && confirmSym === true) {
        alert(randomLower() + randomUpper() + randomNum() + randomSym() + randomLower() + randomUpper() + randomNum() + randomSym())
    
    
     } else if (confirmLower === true && confirmUpper === true) {
         alert(randomLower() + randomUpper() + randomLower() + randomUpper() + randomLower() + randomUpper() + randomLower() + randomUpper())
     } else if (confirmUpper === true) {
         alert(randomUpper())
     }
    
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
    // console.log(randomSym())
});


