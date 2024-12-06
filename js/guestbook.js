// "read more" button
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const comment = button.previousElementSibling; // Target the `.comment` div
            const isExpanded = comment.classList.contains("expanded");

            if (isExpanded) {
                // Collapse: Set max-height to the initial collapsed height
                comment.style.maxHeight = "3.2rem";
                button.textContent = "expand";
            } else {
                // Expand: Set max-height dynamically to fit content
                comment.style.maxHeight = comment.scrollHeight + "px";
                button.textContent = "collapse";
            }

            // Toggle the expanded class for styling purposes
            comment.classList.toggle("expanded");
        });
    });
});



// Smooth scroll to top 
document.getElementById("backToTop").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0, // Scroll to the top
        behavior: "smooth"
    });
});


// Show/hide the back to top button based on scroll position (disappear when user scrolls back up)
window.addEventListener("scroll", function () {
    const button = document.getElementById("backToTop");
    const logo = document.querySelector(".logo");



    button.style.display = "block";
    if (window.scrollY > logo.offsetHeight) {
        button.style.display = "block"; // Show button
    } else {
        button.style.display = "none"; // Hide button
    }
})

console.log("script loaded");
