var accordion_buttons = document.querySelectorAll('.accordion-button');

[].forEach.call(accordion_buttons, function(accordion_button) {
    accordion_button.addEventListener('click', () => {

        accordion_button.classList.toggle('open');
        var acc_button_text = accordion_button.querySelector('.accordion-button-txt');
        var btn_label = accordion_button.getAttribute('data-attr-id');

        if (acc_button_text.innerHTML == "Voir plus") {
            acc_button_text.innerHTML = "Voir moins";
            accordion_button.setAttribute('aria-label', `Voir moins ${btn_label}`);
        } else {
            acc_button_text.innerHTML = "Voir plus";
            accordion_button.setAttribute('aria-label', `Voir plus ${btn_label}`);
        }

        var content_id = accordion_button.getAttribute('aria-controls');
        var accordion_content = document.getElementById(content_id);
        accordion_content.classList.toggle('open');

        toggleARIA(accordion_button, 'aria-expanded');
        toggleARIA(accordion_content, 'aria-hidden');
    })
});

function toggleARIA(element, attribute_name) {
    var current_value = element.getAttribute(attribute_name);
    var new_value = current_value == 'true' ? 'false' : 'true';
    element.setAttribute(attribute_name, new_value);
}
