document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu-items");
    const menuToggle = document.querySelector(".mobile-menu-toggle");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});

// Expanding answer in FAQ
document.addEventListener("DOMContentLoaded", function () {

    const toggleQuesAll = document.querySelectorAll(".faq-content");

    toggleQuesAll.forEach(function (toggleQues) {
        toggleQues.addEventListener('click', function() {
            toggleQues.classList.toggle('active');
        })
    })
});
