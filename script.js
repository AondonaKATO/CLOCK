let is24Hour = true; // Track current format (default: 24-hour)

function updateClock() {
  const timeElement = document.getElementById('time');
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Convert to 12-hour format if needed
  const ampm = hours >= 12 ? 'PM' : 'AM';
  if (!is24Hour) {
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  }

  // Format time
  const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${is24Hour ? '' : ` ${ampm}`}`;

  // Update the time element
  timeElement.textContent = timeString;
}

// Toggle between 24-hour and 12-hour formats
document.getElementById('toggle-format').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggle-format').textContent = is24Hour ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
});

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
