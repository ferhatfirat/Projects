const randomNumber = Math.floor(Math.random()*99) + 1;
// console.log(randomNumber);
const checkButton = document.getElementById("check");
// console.log(checkButton);
let counter = 0;

checkButton.addEventListener("click", () => {
    const inputNumber = document.getElementById("guess").value;
    const textArea = document.getElementById("hidden");

    if (isNaN(inputNumber)) {
        textArea.innerHTML = "Enter a valid number"
    } else if (inputNumber < 1 || inputNumber > 100) {
        textArea.innerHTML = "Enter a number between 1 and 100"
    } else if (inputNumber == randomNumber) {
        textArea.innerHTML = "CONGRATULATIONS! <br> That is Amazing!"
        checkButton.innerHTML = "RESET"
        counter += 1
        checkButton.addEventListener("click", () => {
            window.location.reload();
        })
    } else if (inputNumber < randomNumber) {
        textArea.innerHTML = "Enter a higher value"
        counter += 1
    } else if (inputNumber > randomNumber) {
        textArea.innerHTML = "Enter a lower value"
        counter += 1
    } else {
        textArea.innerHTML = "Enter a valid value"
    }

    document.getElementById("count").innerHTML = `${counter}`
})