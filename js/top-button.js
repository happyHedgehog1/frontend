const topButton = document.querySelector(".top-button");

topButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
