// sticky bar sky
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

// gathering user time
function getTimeAndTimezone() {
  try {
      const date = new Date();

      // Get the time of day in HH:MM:SS format
      const time = date.toLocaleTimeString();

      // Get the user's timezone offset in minutes
      const timezoneOffset = date.getTimezoneOffset();
      const timezone = `UTC${timezoneOffset <= 0 ? '+' : '-'}${Math.abs(timezoneOffset) / 60}`;

      // Display the time and timezone on the page
      document.getElementById('time').innerText = `Time: ${time}`;
      document.getElementById('timezone').innerText = `Timezone: ${timezone}`;
  } catch (error) {
      console.error("Error getting time and timezone:", error);
  }
}

// Call the function to display the time and timezone after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', getTimeAndTimezone);
