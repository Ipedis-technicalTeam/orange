let menuElements = document.querySelectorAll('.menu__list__item-link');
let currentIndex = null;

for (let i =0; i < menuElements.length; i++) {
    menuElements[i].addEventListener('click', function() {
        this.classList.add('active');

        currentIndex = i;

        menuElements.forEach(function(menuElement, index) {
            if (index != currentIndex) {
                menuElement.classList.remove('active');
            }
        })
    });
}


function toggleNav(status, scope) {
    document.documentElement.classList.toggle("has-open-menu");

    if (status == "open") {
        scope.addEventListener("transitionend", () => {
            scope.querySelector(".js-close").focus();
        });
    }
    if (status == "close") {
        scope.querySelector(".js-open").focus();
    }
}

/* ----------
 * Open & close menu on buttons click
 */
const menu = document.querySelector(".lp-nav");

menu.addEventListener(
    "click",
    (event) => {
        const openButton = menu.querySelector(".js-open");
        const closeButton = menu.querySelector(".js-close");

        if (event.target == openButton) {
            toggleNav("open", menu);
        } else if (event.target == closeButton) {
            toggleNav("close", menu);
        }
    },
    true
);

/* ----------
 * Close menu if focus is out of it
 */
menu.addEventListener(
    "blur",
    (event) => {
        // Check if the target link is an indirect child of .menu_list
        const targetIsIn = event.relatedTarget.closest(".menu");

        if (
            document.documentElement.classList.contains("has-open-menu") &&
            !targetIsIn
        ) {
            document.documentElement.classList.remove("has-open-menu");
        }
    },
    true
);


var navHeight = document.querySelector('.lp-nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + 'px');