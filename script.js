const stickyBar = document.querySelector('sticky-bar');
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
  body.classList.add('morning');
} else if (hour < 18) {
  body.classList.add('afternoon');
} else {
  body.classList.add('evening');
}
