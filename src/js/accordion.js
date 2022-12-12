var accordion_buttons = document.querySelectorAll('.accordion-button');

[].forEach.call(accordion_buttons, function(accordion_button) {
    accordion_button.addEventListener('click', () => {

        accordion_button.classList.toggle('open');

        var btn_label = accordion_button.getAttribute('data-attr-id');
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
