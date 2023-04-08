const spanDays = document.querySelector([data - days]);
const spanHours = document.querySelector([data - hours]);
const spanMinutes = document.querySelector([data - minutes]);
const spanSeconds = document.querySelector([data - seconds]);
const fliper = document.querySelector(`#datetime-picker`);
console.log(spanDays);
const options = {
  enableTime: true,

  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// flatpickr(fliper, {});
