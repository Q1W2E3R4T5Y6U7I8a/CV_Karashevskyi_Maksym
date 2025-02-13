export function change_theme() {
    const settingsBtn = document.getElementById("settings-btn");
    const themeButtons = document.querySelectorAll('.theme-btn');
    const themeContainer = document.getElementById("theme-buttons");

    // Check if elements exist
    if (!settingsBtn || !themeButtons.length || !themeContainer) {
        console.error("Theme changer elements not found!");
        return;
    }

    // Toggle theme buttons visibility
    settingsBtn.addEventListener("click", () => {
        themeContainer.classList.toggle("hidden");
        settingsBtn.classList.toggle("active");
    });

    // Function to apply the theme
    function applyTheme(theme) {
        const root = document.documentElement;

        const themes = {
            default: ['#1D92B6', '#2A87A5', '#3B8A99', '#1A64A4', '#2D2D2D'],
            dark: ['#1A1A1A', '#2D2D2D', '#444444', '#FF7B7B', '#B0B0B0'],
            yellow: ['#F9D342', '#E2B300', '#FFDD4A', '#FFB300', '#4D4D00'],
            green: ['#4CAF50', '#388E3C', '#66BB6A', '#2E7D32', '#1B5E20'],
        };

        if (themes[theme]) {
            ['--main-color-1', '--main-color-2', '--background-of-date', '--link-hover', '--link-color']
                .forEach((prop, i) => root.style.setProperty(prop, themes[theme][i]));
        }

        localStorage.setItem('selectedTheme', theme);
    }

    // Function to set the selected button
    function setSelectedButton(theme) {
        themeButtons.forEach(button => {
            if (button.dataset.theme === theme) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    }

    // Load the saved theme
    function loadTheme() {
        const savedTheme = localStorage.getItem('selectedTheme') || 'default';
        applyTheme(savedTheme);
        setSelectedButton(savedTheme);
    }

    // Theme button event listeners
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            applyTheme(theme);
            setSelectedButton(theme);
        });
    });

    loadTheme();
}