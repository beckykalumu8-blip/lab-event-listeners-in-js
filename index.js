function changeBackgroundColor() {
 const colors = [`black`, `blue`, `red`, `green`, `yellow`];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}
document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor);
function displayKeyPress(event) {
document.getElementById('keyPressDisplay').textContent = `Key Pressed: ${event.key}`;
}

document.addEventListener('keydown', displayKeyPress);
function displayUserInput() {
const inputValue = document.getElementById('textInput').value;
    document.getElementById('inputDisplay').textContent = 'Real-time input: ' + inputValue;
}
document.getElementById('textInput').addEventListener('input', displayUserInput);
function setupEventListeners() {
    document
        .getElementById('changeColorButton')
        .addEventListener('click', changeBackgroundColor);

    document
        .getElementById('resetColorButton')
        .addEventListener('dblclick', resetBackgroundColor);

    document.addEventListener('keydown', displayKeyPress);

    document.getElementById('textInput').addEventListener('input', displayUserInput);

    document.getElementById('integrateBtn').addEventListener('click', toggleIntegration);
}

if (typeof window !== '') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}