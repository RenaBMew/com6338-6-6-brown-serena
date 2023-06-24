// Establish Variables
var hamburgerBtn = document.querySelector('.hamburger-btn');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu');

// Menu should open when hamburger is clicked
function openMenu(e) {
    hamburgerMenu.classList.toggle('show-menu');
    hamburgerBtn.focus();
    // Should set aria-expanded="true" or "false" based on menu status 
    if (hamburgerMenu.classList.contains('show-menu')){
        hamburgerBtn.setAttribute('aria-expanded', true);
    } else {
        hamburgerBtn.setAttribute('aria-expanded', false);
    }
}

// Open menu on hamburgerBtn icon click
hamburgerBtn.onclick = openMenu

// Close menu on hamburgerBtn icon click 
function closeMenu(e) {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.focus();
}

// Close menu when pressing escape
document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
}

// Close menu when clicking outside of the menu
document.body.onclick = function (e) {
    if (!menu.contains(e.target)) {
        closeMenu();
    }
}