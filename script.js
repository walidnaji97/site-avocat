const MenuFunctions = {
    openSidenav: function () {
        const sidenav = document.querySelector(".sidenav");
        sidenav.classList.add("active");
    },
    closeSidenav: function () {
        const sidenav = document.querySelector(".sidenav");
        sidenav.classList.remove("active");
    },
    handleScroll: function () {
        const menuBtn = document.querySelector(".menu-outline");
        const scrollY = window.scrollY;

        if (scrollY === 0) {
            menuBtn.classList.remove("hidden");
        } else {
            menuBtn.classList.add("hidden");
        }
    },
};

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-outline");
    const closeBtn = document.querySelector(".close-btn");
    const sidenavLinks = document.querySelectorAll(".sidenav li a");

    menuBtn.addEventListener("click", MenuFunctions.openSidenav);
    closeBtn.addEventListener("click", MenuFunctions.closeSidenav);

    sidenavLinks.forEach(link => {
        link.addEventListener("click", MenuFunctions.closeSidenav);
    });
});
