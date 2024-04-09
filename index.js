// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Function to move the dodger to the right
function moveDodgerRight() {
    // Extract the current left position of the dodger and convert it to a number
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Check if the dodger is not at the rightmost edge of the screen
    if (left < window.innerWidth - dodger.offsetWidth) {
        // Move the dodger 1 pixel to the right
        dodger.style.left = `${left + 1}px`;
    }
}

// Event listener to detect when the right arrow key is pressed
document.addEventListener("keydown", function (e) {
    // Check if the pressed key is the right arrow key
    if (e.key === "ArrowRight") {
        // If so, call the moveDodgerRight function
        moveDodgerRight();
    }
});