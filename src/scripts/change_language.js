export function change_language() {
  document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.change_language h3');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-fr], [data-ua]');

    // Function to change language
    const changeLanguage = (language) => {
      elementsToTranslate.forEach((element) => {
        if (element.dataset[language]) {
          element.textContent = element.dataset[language];
        }
      });

      // Save the selected language to localStorage
      localStorage.setItem('selectedLanguage', language);
    };

    // Load the saved language from localStorage
    const loadLanguage = () => {
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if no language is saved
      changeLanguage(savedLanguage);
    };

    // Add click event listeners to language buttons
    languageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const language = button.classList.contains('change_language_en') ? 'en' :
                         button.classList.contains('change_language_fr') ? 'fr' :
                         button.classList.contains('change_language_ua') ? 'ua' : null;

        if (language) {
          changeLanguage(language);
        }
      });
    });

    // Load the saved language when the page loads
    loadLanguage();
  });
}