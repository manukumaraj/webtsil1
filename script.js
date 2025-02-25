const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Restore menu state from sessionStorage
if (sessionStorage.getItem("menuState") === "open") {
    navbarMenu.classList.add("show-menu");
}

// Restore popup state from sessionStorage
if (sessionStorage.getItem("popupState") === "open") {
    document.body.classList.add("show-popup");
}

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
    sessionStorage.setItem("menuState", navbarMenu.classList.contains("show-menu") ? "open" : "closed");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
    sessionStorage.setItem("menuState", "closed");
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    sessionStorage.setItem("popupState", document.body.classList.contains("show-popup") ? "open" : "closed");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
    sessionStorage.setItem("popupState", "closed");
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
        sessionStorage.setItem("signupState", formPopup.classList.contains("show-signup") ? "signup" : "login");
    });
});

// Restore signup/login state
if (sessionStorage.getItem("signupState") === "signup") {
    formPopup.classList.add("show-signup");
}
