export function toggle_button() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle__btn');

    // Add click event listeners to each toggle button
    toggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling
        const popupText = button.previousElementSibling; // Get the popup text element

        // Toggle the active class on the popup text and the toggle button
        popupText.classList.toggle('active');
        button.classList.toggle('active');

        // Change the toggle button text
        if (button.classList.contains('active')) {
          button.textContent = '>'; // Change text when active
        } else {
          button.textContent = '⌵'; // Change text when inactive
        }
      });
    });

    // Hide popup text when clicking outside
    document.addEventListener('click', () => {
      toggleButtons.forEach(button => {
        const popupText = button.previousElementSibling;
        if (popupText.classList.contains('active')) {
          popupText.classList.remove('active');
          button.classList.remove('active');
          button.textContent = '⌵'; // Reset button text when closing
        }
      });
    });
  });
}
