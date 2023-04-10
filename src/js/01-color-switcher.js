const startButton = document.querySelector('button[data-start]');

const btnStop = document.querySelector('button[data-stop]');
console.log(startButton);
startButton.addEventListener('click', startColorSwitch);
btnStop.addEventListener('click', stopColorSwitch);

let timeoutId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function startColorSwitch() {
  timeoutId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitch() {
  clearInterval(timeoutId);
  timeoutId = null;
  console.log('stopColorSwitch called');
}
