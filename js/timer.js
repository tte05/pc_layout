const daysBlock = document.querySelector(".timer__days");
const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");

let interval = null;

const numWord = (value, words) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];
  return words[2];
};

const updateTimer = () => {
  // Ensure DOM nodes exist
  if (!daysBlock || !hoursBlock || !minutesBlock || !secondsBlock) return;

  const now = Date.now();
    const dateDeadline = new Date("2025-11-12").getTime();
  const timeRemaining = dateDeadline - now;

  if (timeRemaining <= 0) {
    if (interval) clearInterval(interval);
    daysBlock.textContent = "00";
    hoursBlock.textContent = "00";
    minutesBlock.textContent = "00";
    secondsBlock.textContent = "00";
    const secLabel = secondsBlock.nextElementSibling;
    if (secLabel) secLabel.textContent = numWord(0, ["секунда", "секунды", "секунд"]);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  const fDays = days < 10 ? "0" + days : String(days);
  const fHours = hours < 10 ? "0" + hours : String(hours);
  const fMinutes = minutes < 10 ? "0" + minutes : String(minutes);
  const fSeconds = seconds < 10 ? "0" + seconds : String(seconds);

  daysBlock.textContent = fDays;
  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;

  const secLabel = secondsBlock.nextElementSibling;
  if (secLabel) secLabel.textContent = numWord(seconds, ["секунда", "секунды", "секунд"]);
};

// Run immediately and then every second
updateTimer();
interval = setInterval(updateTimer, 1000);
