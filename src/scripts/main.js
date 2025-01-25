'use strict';

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
  });


  ///CAT

  // Make the cat's pupils follow the cursor
  document.addEventListener('mousemove', (e) => {
    const cat = document.querySelector('.cat');
    const pupils = document.querySelectorAll('.pupil');

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the cat's position
    const catRect = cat.getBoundingClientRect();
    const catX = catRect.left + catRect.width / 2;
    const catY = catRect.top + catRect.height / 2;

    // Calculate the angle between the cat and the cursor
    const angle = Math.atan2(mouseY - catY, mouseX - catX);

    // Calculate the distance the pupils should move
    const maxDistance = 5; // Maximum distance the pupils can move
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    // Move the pupils
    pupils.forEach(pupil => {
      pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
  });