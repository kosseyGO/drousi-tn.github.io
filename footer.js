// Define footer content in multiple languages
var footerContent = {
    ar: "© 2024 Drousi.tn جميع الحقوق محفوظة.",
};

// Function to get the current language based on the URL
function getLanguage() {
    var path = window.location.pathname;
    if (path.includes("/ar/")) return 'ar';
    if (path.includes("/fr/")) return 'fr';
    if (path.includes("/en/")) return 'en';
    return null; // No language found
}

// Function to update the URL to the selected language and reload the page
function changeLanguage(lang) {
    var path = window.location.pathname;
    path = path.replace(/\/(en|ar|fr)\//, `/${lang}/`);
    window.location.href = path; // Reload with the new URL
}

// Function to create and append the footer
function createFooter() {
    var footer = document.createElement("footer");
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = "center";

    var lang = getLanguage();
    var paragraph1 = document.createElement("p");
    paragraph1.style.textAlign = "center";

    if (lang) {
        // If a language is found, set the corresponding copyright text
        paragraph1.textContent = footerContent[lang];
    } else {
        // If no language is found, cycle through the languages every 3 seconds
        let languages = Object.keys(footerContent);
        let index = 0;

        const updateLanguage = () => {
            paragraph1.textContent = footerContent[languages[index]];
            index = (index + 1) % languages.length; // Cycle through languages
        };

        updateLanguage(); // Initial display
        setInterval(updateLanguage, 3000); // Update every 3 seconds
    }

    footer.appendChild(paragraph1);

    // Add version information
    var paragraph2 = document.createElement("p");
    paragraph2.style.textAlign = "right";
    paragraph2.textContent = "V1.0 beta"; // Version remains the same
    footer.appendChild(paragraph2);
    
    document.body.appendChild(footer);
}

// Call the function to create the footer when the DOM is ready
document.addEventListener("DOMContentLoaded", createFooter);
