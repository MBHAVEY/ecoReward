const body = document.body;
const title = document.getElementById("title");
const message = document.getElementById("message");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resetButton = document.getElementById("resetButton");

const setScreen = (choice) => {
  const isYes = choice === "yes";

  body.className = `screen ${isYes ? "screen--yes" : "screen--no"}`;
  title.textContent = isYes ? "You clicked Yes" : "You clicked No";
  message.textContent = isYes
    ? "The screen is now green."
    : "The screen is now red.";
  resetButton.hidden = false;
};

const resetScreen = () => {
  body.className = "screen screen--idle";
  title.textContent = "Choose Yes or No";
  message.textContent = "Tap a button to change the whole screen.";
  resetButton.hidden = true;
};

yesButton.addEventListener("click", () => setScreen("yes"));
noButton.addEventListener("click", () => setScreen("no"));
resetButton.addEventListener("click", resetScreen);
