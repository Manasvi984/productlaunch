// Countdown Timer
const countdownDate = new Date("May 15, 2025 10:00:00 GMT+0000").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  if (timeRemaining <= 0) {
    timerElement.innerHTML = "The event is now live!";
    clearInterval(countdownInterval);
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Handle Form Submission
const form = document.getElementById("signup-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    alert(`Thank you for signing up, ${name}!`);
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
