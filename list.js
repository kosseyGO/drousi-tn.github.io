document.addEventListener("DOMContentLoaded", function () {
    function toggleSection(sectionId, toggleImgId) {
        const section = document.getElementById(sectionId);
        const toggleImg = document.getElementById(toggleImgId);
        const courseList = section.querySelector(".course-list");

        if (courseList.style.display === "none" || courseList.style.display === "") {
            courseList.style.display = "block";
            toggleImg.src = "/img/up.png"; // Switch to the "close" image
        } else {
            courseList.style.display = "none";
            toggleImg.src = "/img/down.png"; // Switch back to the "open" image
        }
    }

    // Make the toggle function available globally
    window.toggleSection = toggleSection;
});
