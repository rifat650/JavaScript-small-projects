const Minimum = 10;
const Maximum = 100;
const randomNumber = Math.floor(Math.random() * (Maximum - Minimum) + 1) + Minimum;

let attempts = 0;
let guess;
let running = true;
while (running) {
        guess = Number(prompt(`Guess a Number Between ${Minimum}-${Maximum}`));
        if (isNaN(guess) || guess < Minimum || guess > Maximum) {
                alert(`Guess a Valid Number Between ${Minimum} And ${Maximum}`);
        } else {
                if (guess > randomNumber) {
                        alert(`Your Guess is Too High`);
                } else if (guess < randomNumber) {
                        alert(`Your Guess is Too Low`);
                } else {
                        alert(`🎉 Congratulations You Guessed The Correct Number It Took You ${attempts} Attempts`);
                        running = false;
                }
        }
        attempts++


}