export function cat() {
    // Hide the cat if the screen width is less than 800px
    const cat = document.querySelector('.cat');
    if (window.innerWidth < 1025) {
        cat.style.display = 'none'; // Hide the cat
    } else {
        cat.style.display = 'block'; // Ensure the cat is visible on larger screens
    }

    // Make the cat's pupils follow the cursor
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth >= 1025) { // Only run if screen width is >= 800px
            const pupils = document.querySelectorAll('.pupil');
        
            const mouseX = e.clientX;
            const mouseY = e.clientY;
        
            // Get the cat's position
            const catRect = cat.getBoundingClientRect();
            const catX = catRect.left + catRect.width / 2;
            const catY = catRect.top + catRect.height / 2;
        
            // Calculate the distance between the cursor and the cat
            const distance = Math.sqrt((mouseX - catX) ** 2 + (mouseY - catY) ** 2);
        
            // If the cursor is within 100px of the cat, move the cat and eyes down
            if (distance < 100) {
                cat.classList.add('move-down');
            } else {
                cat.classList.remove('move-down');
            }
        
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
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const traits = document.querySelectorAll('.trait');

        traits.forEach(trait => {
            const percent = trait.getAttribute('data-percent');
            const circle = trait.querySelector('.circle');
            const angle = (percent / 100) * 360;

            trait.style.background = `conic-gradient(#4caf50 ${angle}deg, #e0e0e0 ${angle}deg)`;

            const radius = 100; // Radius of the circle
            const radians = (angle - 90) * (Math.PI / 180); // Convert degrees to radians
            const x = radius + radius * Math.cos(radians);
            const y = radius + radius * Math.sin(radians);

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        });
    });

    // Listen to window resize to show or hide the cat
    window.addEventListener('resize', () => {
        if (window.innerWidth < 800) {
            cat.style.display = 'none';
        } else {
            cat.style.display = 'block';
        }
    });
}
