const btnStart = document.querySelector([data - start]);
const btnStop = document.querySelector([data - stop]);

btnStart.addEventListener(click, startColorSwitch);
btnStop.addEventListener(click, stopColorSwitch);

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
