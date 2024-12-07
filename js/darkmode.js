document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle"); // Replace with your actual toggle button ID
    const body = document.body;

    // Load saved mode
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
        body.classList.add(savedMode); // Apply saved mode
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            if (body.classList.contains("darkmode")) {
                body.classList.remove("darkmode");
                localStorage.setItem("theme", ""); // Save light mode
            } else {
                body.classList.add("darkmode");
                localStorage.setItem("theme", "darkmode"); // Save dark mode
            }
        });
    }
});
