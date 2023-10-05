// JavaScript for dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        // Dark mode is enabled
        document.body.classList.add('dark-mode');
    } else {
        // Dark mode is disabled
        document.body.classList.remove('dark-mode');
    }
});

// JavaScript to update the current year
const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
