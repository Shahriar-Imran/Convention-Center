document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector(".mobile-menu-items");
    const menuToggle = document.querySelector(".mobile-menu-toggle");

    menuToggle.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });
});