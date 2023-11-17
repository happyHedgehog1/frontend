const $hamburgerButton = document.querySelector(".hamburger_button");
const $hamburgerMenu = document.querySelector(".hamburger_menu");
let isOpenHanburgerButton = false;

function hambugerButtonClickEvent(event) {
    $hamburgerMenu.style.display =
        $hamburgerMenu.style.display === "block" ? "none" : "block";
}
$hamburgerButton.addEventListener("click", hambugerButtonClickEvent);
