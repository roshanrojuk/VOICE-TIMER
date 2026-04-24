let seconds = 0;
let interval;

const messages = {
  5: "You started.",
  15: "Stay here.",
  30: "Don't switch.",
  45: "Mind will wander. Ignore it.",
  60: "Good. You crossed the first minute.",

  120: "Still here. That matters.",
  180: "Focus is forming.",
  240: "Don't check your phone.",
  300: "You broke friction.",

  420: "Now it becomes easier.",
  600: "You are working, not starting.",
  720: "Stay steady.",
  900: "Most people quit before this.",

  1080: "You are gaining control.",
  1200: "Stay locked in.",
  1320: "No distractions.",
  1500: "You killed one pomodoro.",
  1800: "Half hour done. Strong work.",

  2100: "You are ahead of your past self.",
  2400: "This is real discipline.",
  2700: "Stay calm. Stay focused.",
  3000: "Don't slow down.",
  3300: "One hour is close.",
  3600: "One hour complete. Respect.",

  3900: "Most people would stop.",
  4200: "You continue. That’s rare.",
  4500: "Stay focused.",
  4800: "Fatigue is normal. Ignore it.",
  5100: "You are stronger than your excuses.",
  5400: "Ninety minutes. Elite zone.",

  5700: "Keep pushing.",
  6000: "You are not average right now.",
  6300: "This is how toppers work.",
  6600: "Almost there.",
  6900: "Finish strong.",
  7200: "Two hours complete. You dominated."
};

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function startTimer() {
  clearInterval(interval);
  seconds = 0;

  interval = setInterval(() => {
    seconds++;

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("time").innerText =
      String(mins).padStart(2, '0') + ":" +
      String(secs).padStart(2, '0');

    if (messages[seconds]) {
      speak(messages[seconds]);
    }

  }, 1000);
}
