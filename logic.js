// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById('guess').value);

    // Get the message element
    const messageElement = document.getElementById('message');

    // Check if the user's guess matches the random number
    if (userGuess === randomNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
        messageElement.style.color = 'green';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try guessing a higher number.';
        messageElement.style.color = 'orange';
    } else {
        messageElement.textContent = 'Too high! Try guessing a lower number.';
        messageElement.style.color = 'orange';
    }
}

