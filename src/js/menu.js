let toggleMenuBtn = document.querySelector('.menu_button');
let menu = document.querySelector('#menu');
let menuItems = menu.querySelectorAll('.menu__list__item-link');
var current = document.getElementsByClassName("active");


for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    })
}

function callback(entries) {
    entries.map((entry) => {
        console.log("this is " + entry.target.id);
    });
}

menuItems.forEach((target) => {
    new IntersectionObserver(callback).observe(target);
});


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
    if (window.screen.width <= 1024) {
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
if (window.screen.width < 900) {
    toggleTabindex(-1);
}


let lastLink = document.querySelector('#lastLink');
if (window.screen.width <= 1024) {
    lastLink.addEventListener('keydown', function(e) {
        if (e.keyCode === 9 && e.keyCode === 16 ) {
            if (document.activeElement === toggleMenuBtn) {
                lastLink.focus();
                e.preventDefault();
            }
        } else if (e.keyCode === 9) {
            if (document.activeElement === lastLink) {
                toggleMenuBtn.focus();
                e.preventDefault();
            }
        }
    });
}


var navHeight = document.querySelector('.lp-nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + 'px');