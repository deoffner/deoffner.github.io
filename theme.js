const themeStorageKey = 'deoffner-theme';
const savedTheme = window.localStorage.getItem(themeStorageKey);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';

    document.querySelectorAll('.theme-toggle').forEach(toggle => {
        toggle.textContent = isDark ? 'Light mode' : 'Dark mode';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
}

applyTheme(initialTheme);

document.querySelectorAll('.theme-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        window.localStorage.setItem(themeStorageKey, nextTheme);
        applyTheme(nextTheme);
    });
});
