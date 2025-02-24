document.addEventListener("DOMContentLoaded", () => {
    const removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        });
    });
});
