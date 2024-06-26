const targetDate = new Date("February 16, 2025 00:00:00");
const countdownElement = document.getElementById("countdown-time");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeString = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    countdownElement.textContent = timeString;

    if (diff <= 0) {
        countdownElement.textContent = "Countdown Over!";
    }

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
