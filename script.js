const navbar = document.querySelector(".nav-container");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});
