let toggleMenuBtn = document.querySelector('.menu_button');
let menu = document.querySelector('#menu');
let menuItems = menu.querySelectorAll('.menu__list__item-link');
var current = document.getElementsByClassName("active");

// Add active class to menu item on click
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    })
}

// Toggle menu
function toggleTabindex(value) {
    menuItems.forEach((item) => item.setAttribute('tabindex', value));
}

function toggleMenu(e) {
    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open');

    // Hide outline after clicking, but don't hide when using the keyboard
    if (e.screenX !== 0 && e.screenY !== 0) {
        toggleMenuBtn.blur();
    }

    let label = toggleMenuBtn.getAttribute('aria-label');
    if (label === "Ouvrir la navigation") {
        toggleMenuBtn.setAttribute('aria-label', "Fermer la navigation");
    } else {
        toggleMenuBtn.setAttribute('aria-label', "Ouvrir la navigation");
    }

    let ariaAttribute = toggleMenuBtn.getAttribute('aria-expanded');
    if (window.innerWidth <= 1024) {
        if (ariaAttribute === 'false') {
            toggleMenuBtn.setAttribute('aria-expanded', 'true');
            toggleTabindex(0);
        } else {
            toggleMenuBtn.setAttribute('aria-expanded', 'false');
            toggleTabindex(-1);
        }
    }
}

toggleMenuBtn.addEventListener('click', toggleMenu);

// On small screens, hide menu items from tab order until menu opens
if (window.innerWidth <= 1024) {
    toggleTabindex(-1);
}

// Trap focus on hamburger menu
let lastLink = document.querySelector('#lastLink');
if (window.innerWidth <= 1024) {
    lastLink.addEventListener('keydown', function(e) {
        if (e.keyCode === 9) {
            toggleMenuBtn.focus();
            e.preventDefault();
        }
    });

    toggleMenuBtn.addEventListener('keydown', function(e) {
        if (e.keyCode === 9 && e.keyCode === 16) {
            lastLink.focus();
            e.preventDefault();
        }
    });
}


// Change active class onScroll
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".menu__list__item a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".menu__list__item a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}