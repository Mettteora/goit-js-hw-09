// const spanDays = document.querySelector([data - days]);
// const spanHours = document.querySelector([data - hours]);
// const spanMinutes = document.querySelector([data - minutes]);
// const spanSeconds = document.querySelector([data - seconds]);
// const fliper = document.querySelector(`#datetime-picker`);
// console.log(spanDays);
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  enableTime: true,

  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// Select elements
const spanDays = document.querySelector('.value[data-days]');
const spanHours = document.querySelector('.value[data-hours]');
const spanMinutes = document.querySelector('.value[data-minutes]');
const spanSeconds = document.querySelector('.value[data-seconds]');
const buttonStart = document.querySelector('[data-start]');
const datePicker = document.querySelector('#datetime-picker');

let targetDate;

// Initialize flatpickr
flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0];
  },
});

// Update timer every second
setInterval(() => {
  if (!targetDate) {
    return;
  }

  const currentDate = new Date();
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  if (timeDiff <= 0) {
    spanDays.textContent = '00';
    spanHours.textContent = '00';
    spanMinutes.textContent = '00';
    spanSeconds.textContent = '00';
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((timeDiff / 1000) % 60)
    .toString()
    .padStart(2, '0');

  spanDays.textContent = days;
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
}, 1000);

// Add event listener to start button
buttonStart.addEventListener('click', () => {
  if (!targetDate) {
    alert('Please select a target date and time.');
    return;
  }

  buttonStart.disabled = true;
});

// flatpickr(fliper, {});
