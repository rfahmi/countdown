const targetDate = new Date("February 16, 2025 00:00:00");
const countdownElement = document.getElementById("countdown-time");

let millisecondsLeft = targetDate.getTime() - new Date().getTime();

function updateCountdown() {
    if (millisecondsLeft <= 0) {
        countdownElement.textContent = "Countdown Over!";
    } else {
        const days = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((millisecondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((millisecondsLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((millisecondsLeft % (1000 * 60)) / 1000);
        const milliseconds = millisecondsLeft % 1000;

        const timeString = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
        countdownElement.textContent = timeString;

        millisecondsLeft -= 1;
    }

    requestAnimationFrame(updateCountdown);
}

updateCountdown();
