/** script.js */

// Obtenir le bouton
var backToTopBtn = document.getElementById("backToTopBtn");

// Lorsque l'utilisateur fait défiler vers le bas de 20px depuis le haut du document, afficher le bouton
window.onscroll = function() {
    scrollFunction();
};

/**
 * Affiche le bouton "Haut" lorsque necessaire
 */
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

/**
 * Lorsque l'utilisateur clique sur le bouton, faire défiler vers le haut du document
 */
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/**
 * Gère le menu hamburger.
 */
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu-box a');
    var menuToggle = document.getElementById('menu-toggle');
    var headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior

            var targetId = item.getAttribute('href'); // Get the target section ID
            var targetSection = document.querySelector(targetId); // Find the target section

            // Calculate the position to scroll to, offset by the header height
            var targetPosition = targetSection.offsetTop - headerHeight;

            // Scroll to the adjusted position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close the menu
            menuToggle.checked = false;
        });
    });
});

// Add an animation to the sub sections
const entries = document.querySelectorAll('.timeline-entry');

const observer = new IntersectionObserver(entriesList => {
    entriesList.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
});

entries.forEach(entry => observer.observe(entry));
