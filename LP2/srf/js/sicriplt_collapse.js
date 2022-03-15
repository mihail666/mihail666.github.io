let fragments = document.querySelectorAll('.case2_button_collaps');
for (let fragment of fragments) {
    let but = fragment.querySelector('button');
    let text = fragment.querySelector('div');
    but.addEventListener("click", function() {
        text.classList.toggle("stylecollapse");
    });
}
const screenWidth = window.outerWidth;
if (outerHeight <= 500){
    text.classList.add("stylecollapse");
}
